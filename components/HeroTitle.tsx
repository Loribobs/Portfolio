"use client";

import { useEffect, useRef } from "react";

/**
 * Hero headline with a cursor-driven fluid effect (inspired by Framer's "Fluid Image").
 * - The real <h1> text stays in the page for search engines and screen readers.
 * - A WebGL canvas redraws the same text on top and warps it where the cursor moves,
 *   tinting the disturbed area with a soft gradient. Clicking sends out a ripple.
 * - Falls back to the plain text if WebGL is unavailable or reduced motion is on.
 * - Only animates while the pointer is active; idles otherwise.
 */

/* ---- Tweak the feel here ---- */
const STRENGTH = 0.07; // how far letters are pushed (share of canvas size)
const RADIUS = 0.012; // brush size
const DECAY = 0.965; // trail persistence per frame (higher = longer trail)
const COLOR_AMOUNT = 1.4; // how strongly the gradient shows in disturbed letters
const COLORS = ["#C6F36B", "#7FE3F5", "#9D8CFF"]; // gradient stops (lime, cyan, violet)
const PAD = 60; // px of room around the text so warped letters aren't clipped
const TRAIL_SCALE = 0.25; // trail resolution vs. canvas

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main(){ vUv = aPos * 0.5 + 0.5; gl_Position = vec4(aPos, 0.0, 1.0); }`;

const TRAIL = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uPrev;
uniform vec2 uMouse;
uniform vec2 uDelta;
uniform float uRadius;
uniform float uAspect;
uniform float uDecay;
uniform vec3 uBurst;
vec2 dz(vec2 v){ return sign(v) * max(abs(v) - 0.006, 0.0); }
void main(){
  vec2 vel0 = dz(texture2D(uPrev, vUv).rg * 2.0 - 1.0);
  vec4 q = texture2D(uPrev, vUv - vel0 * 0.012);
  vec2 v = dz(q.rg * 2.0 - 1.0) * uDecay;
  float ink = max(q.b * uDecay - 0.004, 0.0);
  vec2 d = vUv - uMouse; d.x *= uAspect;
  float g = exp(-dot(d, d) / uRadius);
  v += uDelta * g;
  ink += min(length(uDelta) * 6.0, 1.0) * g;
  vec2 db = vUv - uBurst.xy; db.x *= uAspect;
  float gb = exp(-dot(db, db) / (uRadius * 5.0));
  v += normalize(db + 1e-5) * uBurst.z * gb;
  ink += uBurst.z * gb;
  gl_FragColor = vec4(clamp(v, -1.0, 1.0) * 0.5 + 0.5, clamp(ink, 0.0, 1.0), 1.0);
}`;

const RENDER = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uText;
uniform sampler2D uTrail;
uniform float uStrength;
uniform float uColor;
uniform float uTime;
uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;
vec2 dz(vec2 v){ return sign(v) * max(abs(v) - 0.006, 0.0); }
void main(){
  vec4 t = texture2D(uTrail, vUv);
  vec2 vel = dz(t.rg * 2.0 - 1.0);
  float ink = t.b;
  vec2 uv = vUv - vel * uStrength;
  float a = texture2D(uText, vec2(uv.x, 1.0 - uv.y)).a;
  float h = fract(uv.x * 0.9 + uv.y * 0.5 + uTime * 0.06 + ink * 0.35);
  vec3 grad = h < 0.333 ? mix(uC1, uC2, h * 3.0)
            : h < 0.666 ? mix(uC2, uC3, (h - 0.333) * 3.0)
            : mix(uC3, uC1, (h - 0.666) * 3.0);
  vec3 col = mix(vec3(1.0), grad, clamp(ink * uColor, 0.0, 1.0));
  gl_FragColor = vec4(col * a, a);
}`;

const hex = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);

type Props = { lines: string[] };

export default function HeroTitle({ lines }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current, title = titleRef.current, canvas = canvasRef.current;
    if (!wrap || !title || !canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const gl = canvas.getContext("webgl", { premultipliedAlpha: true, alpha: true, antialias: false });
    if (!gl) return;

    /* ---------- GL helpers ---------- */
    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) || "shader");
      return s;
    };
    const program = (frag: string) => {
      const p = gl.createProgram()!;
      gl.attachShader(p, compile(gl.VERTEX_SHADER, VERT));
      gl.attachShader(p, compile(gl.FRAGMENT_SHADER, frag));
      gl.bindAttribLocation(p, 0, "aPos");
      gl.linkProgram(p);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error("link");
      return p;
    };
    let trailProg: WebGLProgram, renderProg: WebGLProgram;
    try {
      trailProg = program(TRAIL);
      renderProg = program(RENDER);
    } catch {
      return;
    }
    const u = (p: WebGLProgram, n: string) => gl.getUniformLocation(p, n);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const makeTex = (w: number, h: number, data: ArrayBufferView | null) => {
      const t = gl.createTexture()!;
      gl.bindTexture(gl.TEXTURE_2D, t);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
      return t;
    };

    let textTex: WebGLTexture | null = null;
    let trails: { tex: WebGLTexture; fb: WebGLFramebuffer }[] = [];
    let tw = 0, th = 0, cw = 0, ch = 0, aspect = 1;
    let cur = 0;

    /* ---------- Draw the headline into a texture, matching the DOM exactly ---------- */
    const drawText = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const box = title.getBoundingClientRect();
      const w = box.width + PAD * 2, h = box.height + PAD * 2;
      canvas.style.left = `${title.offsetLeft - PAD}px`;
      canvas.style.top = `${title.offsetTop - PAD}px`;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      cw = Math.round(w * dpr);
      ch = Math.round(h * dpr);
      canvas.width = cw;
      canvas.height = ch;
      aspect = cw / ch;

      const off = document.createElement("canvas");
      off.width = cw;
      off.height = ch;
      const ctx = off.getContext("2d")!;
      ctx.scale(dpr, dpr);
      ctx.fillStyle = "#fff";
      const originX = box.left - PAD, originY = box.top - PAD;

      title.querySelectorAll<HTMLElement>(".hero-line").forEach((line) => {
        const cs = getComputedStyle(line);
        const font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
        ctx.font = font;
        const upper = cs.textTransform === "uppercase";
        // Find the exact baseline the browser uses: a zero-size inline probe sits on it
        const probe = document.createElement("span");
        probe.style.cssText = "display:inline-block;width:0;height:0;vertical-align:baseline";
        line.appendChild(probe);
        const probeTop = probe.getBoundingClientRect().top;
        line.removeChild(probe);

        // Group words by visual row so wrapped lines (phones) draw correctly
        const node = line.firstChild;
        if (!node || node.nodeType !== Node.TEXT_NODE) return;
        const text = node.textContent || "";
        const rows = new Map<number, { left: number; top: number; words: string[] }>();
        const re = /\S+/g;
        let match: RegExpExecArray | null;
        while ((match = re.exec(text))) {
          const r = document.createRange();
          r.setStart(node, match.index);
          r.setEnd(node, match.index + match[0].length);
          const rect = r.getBoundingClientRect();
          const key = Math.round(rect.top);
          const row = rows.get(key);
          if (row) row.words.push(match[0]);
          else rows.set(key, { left: rect.left, top: rect.top, words: [match[0]] });
        }
        // Every row sits the same distance from its line-box top to its baseline
        const lastTop = Math.max(...Array.from(rows.values()).map((r) => r.top));
        const baselineOffset = probeTop - lastTop;
        rows.forEach((row) => {
          const baseline = row.top - originY + baselineOffset;
          const str = row.words.join(" ");
          ctx.fillText(upper ? str.toUpperCase() : str, row.left - originX, baseline);
        });
      });

      if (textTex) gl.deleteTexture(textTex);
      textTex = makeTex(cw, ch, null);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, off);

      // trail buffers
      trails.forEach((t) => { gl.deleteTexture(t.tex); gl.deleteFramebuffer(t.fb); });
      tw = Math.max(8, Math.round(cw * TRAIL_SCALE));
      th = Math.max(8, Math.round(ch * TRAIL_SCALE));
      const neutral = new Uint8Array(tw * th * 4);
      for (let i = 0; i < neutral.length; i += 4) { neutral[i] = 128; neutral[i + 1] = 128; neutral[i + 3] = 255; }
      trails = [0, 1].map(() => {
        const tex = makeTex(tw, th, neutral);
        const fb = gl.createFramebuffer()!;
        gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
        return { tex, fb };
      });
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };

    /* ---------- Pointer input ---------- */
    let mouse = { x: -10, y: -10 }, last: { x: number; y: number } | null = null;
    let delta = { x: 0, y: 0 }, burst = { x: 0, y: 0, z: 0 };
    let lastInput = 0;

    const toUv = (cx: number, cy: number) => {
      const r = canvas.getBoundingClientRect();
      return { x: (cx - r.left) / r.width, y: 1 - (cy - r.top) / r.height, inside: cx >= r.left && cx <= r.right && cy >= r.top && cy <= r.bottom };
    };
    const onMove = (e: PointerEvent) => {
      const p = toUv(e.clientX, e.clientY);
      if (!p.inside) { last = null; return; }
      if (last) {
        delta.x += (p.x - last.x) * 4;
        delta.y += (p.y - last.y) * 4;
      }
      last = { x: p.x, y: p.y };
      mouse = { x: p.x, y: p.y };
      wake();
    };
    const onDown = (e: PointerEvent) => {
      const p = toUv(e.clientX, e.clientY);
      if (!p.inside) return;
      burst = { x: p.x, y: p.y, z: 0.6 };
      wake();
    };

    /* ---------- Loop ---------- */
    const c1 = hex(COLORS[0]), c2 = hex(COLORS[1]), c3 = hex(COLORS[2]);
    let raf = 0, running = false;
    const start = performance.now();

    const frame = () => {
      const now = performance.now();
      // trail step
      const src = trails[cur], dst = trails[1 - cur];
      gl.bindFramebuffer(gl.FRAMEBUFFER, dst.fb);
      gl.viewport(0, 0, tw, th);
      gl.useProgram(trailProg);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, src.tex);
      gl.uniform1i(u(trailProg, "uPrev"), 0);
      gl.uniform2f(u(trailProg, "uMouse"), mouse.x, mouse.y);
      gl.uniform2f(u(trailProg, "uDelta"), Math.max(-1, Math.min(1, delta.x)), Math.max(-1, Math.min(1, delta.y)));
      gl.uniform1f(u(trailProg, "uRadius"), RADIUS);
      gl.uniform1f(u(trailProg, "uAspect"), aspect);
      gl.uniform1f(u(trailProg, "uDecay"), DECAY);
      gl.uniform3f(u(trailProg, "uBurst"), burst.x, burst.y, burst.z);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      cur = 1 - cur;
      delta = { x: 0, y: 0 };
      burst.z *= 0.5;
      if (burst.z < 0.01) burst.z = 0;

      // render
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, cw, ch);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(renderProg);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, textTex);
      gl.uniform1i(u(renderProg, "uText"), 0);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, trails[cur].tex);
      gl.uniform1i(u(renderProg, "uTrail"), 1);
      gl.uniform1f(u(renderProg, "uStrength"), STRENGTH);
      gl.uniform1f(u(renderProg, "uColor"), COLOR_AMOUNT);
      gl.uniform1f(u(renderProg, "uTime"), (now - start) / 1000);
      gl.uniform3f(u(renderProg, "uC1"), c1[0], c1[1], c1[2]);
      gl.uniform3f(u(renderProg, "uC2"), c2[0], c2[1], c2[2]);
      gl.uniform3f(u(renderProg, "uC3"), c3[0], c3[1], c3[2]);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      // keep running ~3s after the last movement, then rest
      if (now - lastInput < 3000) raf = requestAnimationFrame(frame);
      else running = false;
    };
    const wake = () => {
      lastInput = performance.now();
      if (!running) { running = true; raf = requestAnimationFrame(frame); }
    };

    let resizeTimer = 0;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => { drawText(); wake(); }, 150);
    };

    let cancelled = false;
    document.fonts.ready.then(() => {
      if (cancelled) return;
      drawText();
      wrap.classList.add("is-fluid");
      wake();
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerdown", onDown, { passive: true });
      window.addEventListener("resize", onResize);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("resize", onResize);
      wrap.classList.remove("is-fluid");
    };
  }, []);

  return (
    <div className="hero-fluid" ref={wrapRef}>
      <h1 className="hero-title" ref={titleRef}>
        {lines.map((line, i) => (
          <span key={line} className={`hero-line l${i + 1}`}>
            {line}
          </span>
        ))}
      </h1>
      <canvas className="hero-canvas" ref={canvasRef} aria-hidden="true" />
    </div>
  );
}
