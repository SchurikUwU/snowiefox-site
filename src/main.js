/*
	Build the cabin and boot the computer so the links have a home.
*/

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

const CFG = window.SNOWIE_CONFIG || {};
const LINKS = (CFG.links || []).filter(l => l && l.url);
const TD = {
  enterTitle: 'PRESS TO ENTER THE CABIN', enterSub: 'sound on \u00b7 headphones recommended', liteLink: 'just here for the links? open the lightweight version \u2192', liteBack: '\u2190 enter the cabin instead',
  prompt: 'click the computer', hintDesktop: 'look around \u00b7 click things', hintTouch: 'drag to look \u00b7 tap things', sliderLeft: 'TONIGHT', sliderRight: 'YEARS LATER',
  bootTitle: 'SNOWIE_OS', bootSub: 'v4.1  //  FrostPaw Interactive',
  bootLines: ['> memory test .......... 640K ok', '> keyboard ............. ok', '> drive C: ............. ok', '> mounting /void ...... ??', '> 1 unread note'],
  login: 'schurik', welcome: 'WELCOME BACK, schurik', welcomeSub: 'last login: yesterday', welcomeSubLate: 'last login: 2,191 days ago', footer: 'SNOWIE_OS v4.1  \u00b7  FrostPaw Interactive',
  idleLines: ['SNOWIE_OS v4.1', 'last login: 2,191 days ago', 'battery: ??', ''],
  readme: ['SNOWIE_OS v4.1', 'type help for commands.'],
  fragments: [
    'day 12\nsnow is up to the second log outside. wood for maybe four more days if i stop wasting it.\nthe fox sleeps by the fire. the little white one sleeps on the fox.',
    'day 19\nonly tape left for the boombox is the scientello one. playing it slow so it lasts longer.\nradio did the numbers again at 3:14. 4 7 2. same as tuesday.',
    'day 31\npower has been out for a week. the computer still turns on.\ni dont know what its running on and im not opening it.',
    'day 40\nthe tower light came back on last night. nobody is out there to fix it.\nleaving tomorrow with the fox and the little one. if you find this, check the computer. type void.'
  ],
  allFound: '> 4 of 4 notes. check the computer.', signalFull: '> the radio is louder over here.', signalPartial: '> something out there is still transmitting.', voidLocked: '/void locked',
  voidLines: ['LOG 41', '', 'left at first light. took the fox and the little one.', 'the fire wont last but this thing will.', 'the links still work. somebody should use them.', '', 'see you when it stops snowing.', '  - s'],
  radioNumbers: 'four. seven. two. ... four. seven. two. ... three. one. four.',
  lateHint: 'turn the radio off to go back', radioHelp: 'body: power \u00b7 left knob: band \u00b7 right knob: station \u00b7 scroll: tune', radioHelpTouch: 'tap body: power \u00b7 knobs: band / station \u00b7 drag: tune', bookHelp: 'click a page to flip', bookEmpty: 'nothing here yet\ngonna add more soon', bookHelpTouch: 'tap a page to flip',
  labels: { radio: 'radio', screenOff: 'power on', screenOn: 'open', note: 'read', radioOn: 'turn on', radioOff: 'turn off', fire: 'stoke', fox: 'pet', slug: 'pet', plush: 'squeeze', book: 'sketchbook', bookNext: 'next', bookPrev: 'back', play: 'play', stop: 'stop', window: 'look outside' }
};
const T = Object.assign({}, TD, CFG.text || {}); T.labels = Object.assign({}, TD.labels, (CFG.text || {}).labels || {});
const CREDITS = [
  ['fox', 'PixelMannen (CC0), rig by tomkranis, glTF by AsoboStudio + scurest', 'CC BY 4.0'],
  ['potted plant', 'Darmstadt Graphics Group', 'CC BY 4.0'],
  ['barn lamp, candle holder', 'Wayfair', 'CC BY 4.0'],
  ['boombox, street lantern', 'Microsoft', 'CC0'],
  ['armchair', 'Wayfair / Eric Chadwick', 'CC0'],
  ['teacup', 'Poly Haven / Eric Chadwick', 'CC0'],
  ['tiger shark plush', 'fan model via The Models Resource, Changed by DragonSnow', 'fan work']
];
const LICENSE_URL = 'https://creativecommons.org/licenses/by/4.0/', SOURCE_URL = 'https://github.com/KhronosGroup/glTF-Sample-Assets';
const $ = id => document.getElementById(id);
const QS = new URLSearchParams(location.search);
const Version = document.querySelector("meta[name=version]")?.content || "0.0.0";
const IS_TOUCH = (matchMedia('(hover: none)').matches && 'ontouchstart' in window) || QS.has('touch');
const LOW = IS_TOUCH || /Mobi|Android/i.test(navigator.userAgent) || QS.has('low');
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (IS_TOUCH) document.body.classList.add('touch');

const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
let PR = Math.min(devicePixelRatio || 1, LOW ? 1.25 : 1.75);
renderer.setPixelRatio(PR);
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = !LOW;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x030407);
scene.fog = new THREE.FogExp2(0x0a0706, 0.045);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.06;

const camera = new THREE.PerspectiveCamera(52, innerWidth / innerHeight, 0.03, 120);

const manager = new THREE.LoadingManager();
manager.onProgress = (u, l, t) => { const p = Math.round(l / t * 100); $('loadpct').textContent = ' ' + p + '%'; $('loadbar').style.width = p + '%'; };
const gltfLoader = new GLTFLoader(manager); gltfLoader.setMeshoptDecoder(MeshoptDecoder);
const texLoader = new THREE.TextureLoader(manager);
const b64buf = b => { const s = atob(b), u = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i); return u.buffer; };
const loadGLB = name => new Promise(res => {
  const fail = e => { console.warn("\n-----------------------------------------------"
    +"\nSnowie_Site failed to load a model!"
    +"\nModel: "+name
    +"\nError: "+(e && e.message || e)
    +"\n-----------------------------------------------"); res(null); };
  const packed = window.__MODELS && window.__MODELS[name];
  if (packed) { manager.itemStart(name); gltfLoader.parse(b64buf(packed), '', g => { manager.itemEnd(name); res(g); }, e => { manager.itemEnd(name); fail(e); }); }
  else gltfLoader.load('assets/models/' + name + '.glb', res, undefined, fail);
});
function tex(path, { srgb = true, rep = [1, 1], rot = 0 } = {}) {
  const t = texLoader.load(path); t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); t.rotation = rot; t.anisotropy = 8; return t;
}
function canvasTex(w, h, draw, { srgb = true, rep = [1, 1] } = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); t.anisotropy = 8; return t;
}
const rnd = (a, b) => a + Math.random() * (b - a);
function seeded(s) { return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }

function planks({ rep = [1, 1], color = 0xffffff, rough = 0.85, rot = 0 } = {}) {
  return new THREE.MeshStandardMaterial({
    map: tex('assets/tex/wood_diff.jpg', { rep, rot }), roughnessMap: tex('assets/tex/wood_rough.jpg', { srgb: false, rep, rot }),
    bumpMap: tex('assets/tex/wood_bump.jpg', { srgb: false, rep, rot }), bumpScale: 1.6, color, roughness: rough
  });
}
const logTex = canvasTex(256, 1024, (g, w, h) => {
  const r = seeded(7);
  g.fillStyle = '#7a5a3e'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 520; i++) {
    const x = r() * w, a = r() * 0.16, wd = 0.6 + r() * 2.4;
    g.strokeStyle = r() < 0.5 ? `rgba(40,24,12,${a})` : `rgba(190,150,105,${a * 0.7})`; g.lineWidth = wd;
    g.beginPath(); g.moveTo(x, 0);
    let xx = x; for (let y = 0; y <= h; y += 32) { xx += (r() - 0.5) * 3; g.lineTo(xx, y); } g.stroke();
  }
  for (let k = 0; k < 7; k++) {
    const x = r() * w, y = r() * h, rad = 4 + r() * 7;
    const gr = g.createRadialGradient(x, y, 0, x, y, rad * 2.4); gr.addColorStop(0, 'rgba(35,20,10,.85)'); gr.addColorStop(.4, 'rgba(60,35,18,.45)'); gr.addColorStop(1, 'rgba(60,35,18,0)');
    g.fillStyle = gr; g.beginPath(); g.ellipse(x, y, rad * 1.4, rad * 2.6, 0, 0, 7); g.fill();
  }
}, { rep: [1, 1] });
const logBump = canvasTex(256, 1024, (g, w, h) => {
  const r = seeded(11); g.fillStyle = '#808080'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 300; i++) { const x = r() * w; g.strokeStyle = `rgba(0,0,0,${r() * 0.35})`; g.lineWidth = 0.5 + r() * 2; g.beginPath(); g.moveTo(x, 0); g.lineTo(x + (r() - 0.5) * 8, h); g.stroke(); }
}, { srgb: false });
const logMat = new THREE.MeshStandardMaterial({ map: logTex, bumpMap: logBump, bumpScale: 2.2, color: 0xb08a68, roughness: 0.82 });
const chinkTex = canvasTex(256, 256, (g, w, h) => {
  const id = g.createImageData(w, h); for (let i = 0; i < id.data.length; i += 4) { const v = 150 + Math.random() * 40; id.data[i] = v; id.data[i + 1] = v * 0.93; id.data[i + 2] = v * 0.82; id.data[i + 3] = 255; } g.putImageData(id, 0, 0);
}, { rep: [8, 4] });
const chinkMat = new THREE.MeshStandardMaterial({ map: chinkTex, color: 0x8c7d68, roughness: 1 });
function brick(rep) { const m = tex('assets/tex/brick.jpg', { rep }); return new THREE.MeshStandardMaterial({ map: m, bumpMap: tex('assets/tex/brick.jpg', { srgb: false, rep }), bumpScale: 3, color: 0x7a625a, roughness: 0.95 }); }
const sootMat = new THREE.MeshStandardMaterial({ color: 0x060404, roughness: 1 });
const ironMat = new THREE.MeshStandardMaterial({ color: 0x1c1b1d, roughness: 0.55, metalness: 0.7 });
const barkMat = new THREE.MeshStandardMaterial({ map: logTex, color: 0x5a4030, roughness: 0.95, bumpMap: logBump, bumpScale: 3 });
const stoneMat = new THREE.MeshStandardMaterial({ color: 0x4d4844, roughness: 0.92 });

const interactives = [];
function tag(obj, kind, data = {}) { obj.traverse(o => { if (o.isMesh) { o.userData.kind = kind; o.userData.root = obj; Object.assign(o.userData, data); interactives.push(o); } }); return obj; }
function shade(o, cast = true, recv = true) { o.traverse(m => { if (m.isMesh) { m.castShadow = cast; m.receiveShadow = recv; } }); return o; }
function box(w, h, d, mat, x, y, z, parent = scene) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; parent.add(m); return m; }
function rrShape(w, h, r) { const s = new THREE.Shape(), x = -w / 2, y = -h / 2; s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r); s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h); s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r); s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y); return s; }
function rrPath(w, h, r) { const s = new THREE.Path(), x = -w / 2, y = -h / 2; s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r); s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h); s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r); s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y); return s; }
const glowTex = canvasTex(128, 128, (g) => { const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.35, 'rgba(255,255,255,.3)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 128, 128); });
glowTex.wrapS = glowTex.wrapT = THREE.ClampToEdgeWrapping;
function halo(color, size, pos, opacity = 0.5) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false, fog: false })); s.scale.setScalar(size); s.position.copy(pos); scene.add(s); return s; }
const noGTAO = [];

const R = { x0: -3, x1: 3, z0: -2.6, z1: 3.6, h: 2.85 };
const WIN = { x: -1.55, y: 1.7, w: 1.3, h: 1.05 };
const FIRE = new THREE.Vector3(-2.66, 0.1, 0.3);
const DESK = { x: 0.62, z: -2.08, top: 0.76, w: 1.75, d: 0.8 };
const MON = { x: 0.78, z: -2.05 };
const CUP = { x: 1.36, z: -1.97 };

function buildRoom() {
  const LR = 0.135, GAP = 0.25;
  const logGeo = (len) => { const g = new THREE.CylinderGeometry(LR, LR, len, 16, 1); g.rotateZ(Math.PI / 2); return g; };
  const addLog = (len, x, y, z, alongZ) => {
    const geo = new THREE.CylinderGeometry(LR * rnd(0.94, 1.06), LR * rnd(0.94, 1.06), len, 16, 1);
    geo.rotateY(rnd(0, Math.PI * 2));
    if (alongZ) geo.rotateX(Math.PI / 2); else geo.rotateZ(Math.PI / 2);
    const m = new THREE.Mesh(geo, logMat); m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; scene.add(m); return m;
  };
  logTex.repeat.set(1, 3);
  const wl = WIN.x - WIN.w / 2 - 0.1, wr = WIN.x + WIN.w / 2 + 0.1, wb = WIN.y - WIN.h / 2 - 0.12, wt = WIN.y + WIN.h / 2 + 0.12;
  for (let y = 0.12; y < R.h; y += GAP) {
    if (y > wb && y < wt) { addLog(wl - (R.x0 - 0.18), (R.x0 - 0.18 + wl) / 2, y, R.z0, false); addLog(R.x1 + 0.18 - wr, (wr + R.x1 + 0.18) / 2, y, R.z0, false); }
    else addLog(R.x1 - R.x0 + 0.36, 0, y, R.z0, false);
  }
  for (let y = 0.12 + GAP / 2; y < R.h; y += GAP) { addLog(R.z1 - R.z0 + 0.36, R.x0, y, (R.z0 + R.z1) / 2, true); addLog(R.z1 - R.z0 + 0.36, R.x1, y, (R.z0 + R.z1) / 2, true); }
  const back = new THREE.Shape(); back.moveTo(R.x0, 0); back.lineTo(R.x1, 0); back.lineTo(R.x1, R.h); back.lineTo(R.x0, R.h); back.lineTo(R.x0, 0);
  const hole = new THREE.Path(); hole.moveTo(WIN.x - WIN.w / 2, WIN.y - WIN.h / 2); hole.lineTo(WIN.x + WIN.w / 2, WIN.y - WIN.h / 2); hole.lineTo(WIN.x + WIN.w / 2, WIN.y + WIN.h / 2); hole.lineTo(WIN.x - WIN.w / 2, WIN.y + WIN.h / 2); back.holes.push(hole);
  const bw = new THREE.Mesh(new THREE.ShapeGeometry(back), chinkMat); bw.position.z = R.z0 - 0.05; bw.receiveShadow = true; bw.castShadow = true; scene.add(bw);
  const sideG = new THREE.PlaneGeometry(R.z1 - R.z0, R.h);
  const lw = new THREE.Mesh(sideG, chinkMat); lw.rotation.y = Math.PI / 2; lw.position.set(R.x0 - 0.05, R.h / 2, (R.z0 + R.z1) / 2); lw.receiveShadow = true; scene.add(lw);
  const rw = new THREE.Mesh(sideG, chinkMat); rw.rotation.y = -Math.PI / 2; rw.position.set(R.x1 + 0.05, R.h / 2, (R.z0 + R.z1) / 2); rw.receiveShadow = true; scene.add(rw);
  const fw = new THREE.Mesh(new THREE.PlaneGeometry(R.x1 - R.x0, R.h), planks({ rep: [2, 2], color: 0x5a4030 })); fw.rotation.y = Math.PI; fw.position.set(0, R.h / 2, R.z1); scene.add(fw);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(R.x1 - R.x0 + 0.4, R.z1 - R.z0 + 0.4), planks({ rep: [2.2, 4.4], color: 0x7a5a42, rough: 1.0 }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(0, 0, (R.z0 + R.z1) / 2); floor.receiveShadow = true; scene.add(floor);
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(R.x1 - R.x0 + 0.4, R.z1 - R.z0 + 0.4), planks({ rep: [2, 4], color: 0x4a3424 }));
  ceil.rotation.x = Math.PI / 2; ceil.position.set(0, R.h, (R.z0 + R.z1) / 2); ceil.receiveShadow = true; scene.add(ceil);
  const beamMat = new THREE.MeshStandardMaterial({ map: logTex, color: 0x6a4a34, roughness: 0.9, bumpMap: logBump, bumpScale: 2 });
  for (let x = -2.2; x <= 2.21; x += 1.1) { const b = box(0.16, 0.2, R.z1 - R.z0, beamMat, x, R.h - 0.1, (R.z0 + R.z1) / 2); b.castShadow = false; }
}

let windowGlass, snowOut, snowOutGeo, snowV, streetLight;
const outsideMats = [];
function buildWindow() {
  const fm = planks({ rep: [0.5, 0.25], color: 0x6b4c34 });
  const d = 0.34, t = 0.075, zc = R.z0;
  const L = WIN.x - WIN.w / 2, Rr = WIN.x + WIN.w / 2, B = WIN.y - WIN.h / 2, T = WIN.y + WIN.h / 2;
  box(WIN.w + 2 * t, t, d, fm, WIN.x, T + t / 2, zc);
  box(t, WIN.h, d, fm, L - t / 2, WIN.y, zc); box(t, WIN.h, d, fm, Rr + t / 2, WIN.y, zc);
  box(WIN.w + 2 * t + 0.12, 0.05, d + 0.12, fm, WIN.x, B - 0.025, zc + 0.04);
  box(0.035, WIN.h, 0.04, fm, WIN.x, WIN.y, zc - 0.05); box(WIN.w, 0.035, 0.04, fm, WIN.x, WIN.y, zc - 0.05);
  const frost = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = 'rgba(0,0,0,0)'; g.fillRect(0, 0, w, h);
    for (const [cx, cy] of [[0, 0], [w, 0], [0, h], [w, h]]) { const gr = g.createRadialGradient(cx, cy, 0, cx, cy, w * 0.42); gr.addColorStop(0, 'rgba(255,255,255,.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, w, h); }
    const r = seeded(3); for (let i = 0; i < 600; i++) { const x = r() * w, y = r() * h, e = Math.min(x, w - x, y, h - y) / w; if (r() > e * 4) { g.fillStyle = `rgba(255,255,255,${0.15 * r()})`; g.fillRect(x, y, 1 + r() * 2, 1 + r() * 2); } }
  });
  frost.wrapS = frost.wrapT = THREE.ClampToEdgeWrapping;
  windowGlass = new THREE.Mesh(new THREE.PlaneGeometry(WIN.w, WIN.h), new THREE.MeshStandardMaterial({ color: 0xb8cce0, map: frost, transparent: true, opacity: 0.32, roughness: 0.08, metalness: 0, depthWrite: false, envMapIntensity: 3 }));
  windowGlass.position.set(WIN.x, WIN.y, zc - 0.045); scene.add(windowGlass); noGTAO.push(windowGlass);
  tag(windowGlass, 'window');
  const snowSill = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, WIN.w + 0.05, 4, 10), new THREE.MeshStandardMaterial({ color: 0xdfe6f2, roughness: 0.9 }));
  snowSill.rotation.z = Math.PI / 2; snowSill.scale.set(1, 1, 1.8); snowSill.position.set(WIN.x, B + 0.01, zc - 0.22); scene.add(snowSill);

  const om = (c, extra = {}) => { const m = new THREE.MeshStandardMaterial({ color: c, roughness: 0.95, fog: false, ...extra }); outsideMats.push(m); return m; };
  const sky = canvasTex(512, 512, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#02030a'); gr.addColorStop(0.55, '#0a1226'); gr.addColorStop(1, '#1b2640'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    const r = seeded(21); for (let i = 0; i < 420; i++) { const y = r() * h * 0.75; g.fillStyle = `rgba(220,230,255,${r() * 0.8 * (1 - y / h)})`; g.fillRect(r() * w, y, r() < 0.06 ? 2 : 1, r() < 0.06 ? 2 : 1); }
  });
  const skyM = new THREE.Mesh(new THREE.PlaneGeometry(120, 50), new THREE.MeshBasicMaterial({ map: sky, fog: false })); skyM.position.set(-6, 14, -42); scene.add(skyM);
  const moon = new THREE.Mesh(new THREE.CircleGeometry(1.1, 40), new THREE.MeshBasicMaterial({ color: new THREE.Color(0xdfe6f5).multiplyScalar(2.2), fog: false })); moon.position.set(-10.5, 6.2, -40); scene.add(moon);
  const mh = halo(0x8fa8e0, 9, moon.position, 0.25); mh.material.fog = false;
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(120, 60, 40, 20), om(0xb8c4d8, { roughness: 1 }));
  { const p = ground.geometry.attributes.position; for (let i = 0; i < p.count; i++) p.setZ(i, (Math.sin(p.getX(i) * 0.35) + Math.cos(p.getY(i) * 0.5)) * 0.18); ground.geometry.computeVertexNormals(); }
  ground.rotation.x = -Math.PI / 2; ground.position.set(-4, -0.35, -32); ground.receiveShadow = true; scene.add(ground);
  const parts = []; const r = seeded(99); const col = new THREE.Color();
  const pushGeo = (g, c, dark) => { const n = g.attributes.position.count; const arr = new Float32Array(n * 3); col.set(c).multiplyScalar(dark); for (let i = 0; i < n; i++) { arr[i * 3] = col.r; arr[i * 3 + 1] = col.g; arr[i * 3 + 2] = col.b; } g.setAttribute('color', new THREE.BufferAttribute(arr, 3)); parts.push(g.toNonIndexed ? (g.index ? g.toNonIndexed() : g) : g); };
  for (let i = 0; i < 70; i++) {
    const z = -5 - r() * 30, x = -26 + r() * 40; if (z > -7 && x > -4 && x < 1.5) continue;
    const s = 0.7 + r() * 1.3 + (-z) * 0.03, dark = Math.max(0.18, 1 - (-z - 5) / 34);
    const trunk = new THREE.CylinderGeometry(0.06 * s, 0.09 * s, 0.6 * s, 6); trunk.translate(x, -0.35 + 0.3 * s, z); pushGeo(trunk, 0x1a120c, dark);
    for (let k = 0; k < 4; k++) {
      const rr2 = (1.0 - k * 0.2) * 0.75 * s, hh = 1.0 * s, y = -0.35 + 0.45 * s + k * 0.55 * s;
      const c1 = new THREE.ConeGeometry(rr2, hh, 8); c1.rotateY(r() * 3); c1.translate(x, y + hh / 2, z); pushGeo(c1, 0x15241e, dark);
      const c2 = new THREE.ConeGeometry(rr2 * 0.82, hh * 0.45, 8); c2.rotateY(r() * 3); c2.translate(x, y + hh * 0.78, z); pushGeo(c2, 0xc9d4e6, dark);
    }
  }
  const forest = new THREE.Mesh(mergeGeometries(parts), om(0xffffff, { vertexColors: true, flatShading: true }));
  forest.castShadow = true; forest.receiveShadow = true; scene.add(forest);
  const N = LOW ? 700 : 1600; const p = new Float32Array(N * 3); snowV = new Float32Array(N);
  for (let i = 0; i < N; i++) { p[i * 3] = rnd(-14, 6); p[i * 3 + 1] = rnd(-0.3, 7); p[i * 3 + 2] = rnd(-2.9, -16); snowV[i] = rnd(0.25, 0.7); }
  snowOutGeo = new THREE.BufferGeometry(); snowOutGeo.setAttribute('position', new THREE.BufferAttribute(p, 3));
  const sf = texLoader.load('assets/tex/snowflake.png'); sf.colorSpace = THREE.SRGBColorSpace;
  snowOut = new THREE.Points(snowOutGeo, new THREE.PointsMaterial({ map: sf, size: 0.07, color: 0x9aa8c0, transparent: true, depthWrite: false, fog: false, opacity: 0.9 }));
  scene.add(snowOut); noGTAO.push(snowOut);
}

const L = {};
function buildLights() {
  L.amb = new THREE.HemisphereLight(0x2a2440, 0x120a06, 0.35); scene.add(L.amb);
  L.moon = new THREE.DirectionalLight(0x9db4e8, LOW ? 0.12 : 0.55);
  L.moon.position.set(-7.5, 7.5, -14); L.moon.target.position.set(-0.5, 0, 1.5); scene.add(L.moon, L.moon.target);
  if (!LOW) { L.moon.castShadow = true; Object.assign(L.moon.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 1, far: 40 }); L.moon.shadow.mapSize.set(1024, 1024); L.moon.shadow.bias = -0.0008; L.moon.shadow.normalBias = 0.02; }
  L.fire = new THREE.PointLight(0xff7a30, 9, 0, 2); L.fire.position.set(-2.3, 0.42, 0.3);
  if (!LOW) { L.fire.castShadow = true; L.fire.shadow.mapSize.set(512, 512); L.fire.shadow.bias = -0.003; L.fire.shadow.normalBias = 0.03; L.fire.shadow.camera.near = 0.08; L.fire.shadow.radius = 4; }
  scene.add(L.fire);
  L.fireFill = new THREE.PointLight(0xff8a40, 2.2, 0, 2); L.fireFill.position.set(-1.6, 0.9, 0.4); scene.add(L.fireFill);
  L.sconce = new THREE.SpotLight(0xffc27a, 4.5, 0, 0.85, 0.65, 2); L.sconce.position.set(1.32, 1.5, -2.22); L.sconce.target.position.set(0.95, 0.7, -1.7); scene.add(L.sconce, L.sconce.target);
  if (!LOW) { L.sconce.castShadow = true; L.sconce.shadow.mapSize.set(512, 512); L.sconce.shadow.bias = -0.002; L.sconce.shadow.radius = 5; }
  L.fairy = new THREE.PointLight(0xffc89a, 0.9, 0, 2); L.fairy.position.set(0, 2.35, -2.1); scene.add(L.fairy);
  L.candle = new THREE.PointLight(0xffa850, 0.6, 0, 2); L.candle.position.set(-2.4, 1.48, 0.95); scene.add(L.candle);
  L.screen = new THREE.PointLight(0x8ab0ff, 0, 0, 2); L.screen.position.set(MON.x, 1.02, -1.35); scene.add(L.screen);
}

const flames = []; let coalMat, embers, emberGeo, emberV;
const flameVS = `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`;
const noiseGLSL = `float h1(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h1(i),h1(i+vec2(1,0)),f.x),mix(h1(i+vec2(0,1)),h1(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n2(p);p*=2.03;a*=.5;}return v;}`;
function flameMaterial(seed, strength = 1) {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uInt: { value: strength }, uSeed: { value: seed } },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false,
    vertexShader: flameVS,
    fragmentShader: `uniform float uTime,uInt,uSeed;varying vec2 vUv;${noiseGLSL}
    void main(){vec2 uv=vUv;float t=uTime*1.35+uSeed*7.0;
      float x=(uv.x-.5)*2.;
      float n=fbm(vec2(uv.x*3.2+uSeed,uv.y*2.4-t));
      float n2v=fbm(vec2(uv.x*6.0-uSeed,uv.y*4.0-t*1.7));
      float shape=1.0-abs(x+ (n-0.5)*0.5*uv.y)*(1.15+uv.y*1.9);
      float f=shape-uv.y*1.1+n*0.85+n2v*0.25-0.42;
      f=clamp(f*2.4,0.,1.);
      f*=smoothstep(0.0,0.12,uv.y)*0.7+0.3;
      vec3 c=mix(vec3(0.5,0.05,0.0),vec3(1.0,0.32,0.03),smoothstep(0.05,0.5,f));
      c=mix(c,vec3(1.0,0.66,0.26),smoothstep(0.65,1.0,f));
      gl_FragColor=vec4(c*f*1.35*uInt,1.0);}`
  });
}
function buildFireplace() {
  const X0 = R.x0, XF = -2.42, cz = 0.3;
  const dep = XF - X0, cx = (X0 + XF) / 2;
  box(dep, 0.92, 0.32, brick([1, 1.4]), cx, 0.46, cz - 0.61);
  box(dep, 0.92, 0.32, brick([1, 1.4]), cx, 0.46, cz + 0.61);
  box(dep, 0.26, 1.54, brick([2.4, 0.4]), cx, 1.05, cz);
  box(dep - 0.12, R.h - 1.18, 1.25, brick([1.9, 2.6]), cx - 0.06, 1.18 + (R.h - 1.18) / 2, cz);
  box(0.06, 0.9, 0.92, sootMat, X0 + 0.16, 0.46, cz); box(dep, 0.06, 0.92, sootMat, cx, 0.89, cz);
  box(dep, 0.9, 0.04, sootMat, cx, 0.46, cz - 0.45); box(dep, 0.9, 0.04, sootMat, cx, 0.46, cz + 0.45);
  box(dep, 0.04, 0.92, new THREE.MeshStandardMaterial({ color: 0x1a120d, roughness: 1 }), cx, 0.02, cz);
  const hs = box(0.55, 0.07, 1.9, stoneMat, XF + 0.27, 0.035, cz); hs.material = new THREE.MeshStandardMaterial({ map: tex('assets/tex/brick.jpg', { rep: [0.6, 2] }), color: 0x5a5452, roughness: 0.9 });
  box(0.36, 0.11, 1.85, planks({ rep: [0.6, 0.12], color: 0x5a3a24 }), XF + 0.12, 1.235, cz);
  for (const dz of [-0.2, 0.2]) box(0.4, 0.025, 0.025, ironMat, FIRE.x, 0.1, cz + dz);
  const logs = new THREE.Group();
  const lg = (len, r, x, y, z, ry, rz) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 1.05, len, 10), barkMat); m.rotation.set(0, ry, rz); m.position.set(x, y, z); m.castShadow = true; logs.add(m); };
  lg(0.62, 0.06, FIRE.x, 0.16, cz - 0.06, 0.15, Math.PI / 2);
  lg(0.58, 0.055, FIRE.x + 0.04, 0.16, cz + 0.1, -0.2, Math.PI / 2);
  lg(0.5, 0.05, FIRE.x, 0.25, cz, Math.PI / 2 + 0.3, Math.PI / 2 - 0.25);
  scene.add(logs); tag(logs, 'fire');
  coalMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uInt: { value: 1 } }, vertexShader: flameVS, fog: false,
    fragmentShader: `uniform float uTime,uInt;varying vec2 vUv;${noiseGLSL}
    void main(){vec2 c=vUv-.5;float r=length(c*vec2(1.,1.4));float n=fbm(vUv*9.0+vec2(uTime*.15,0.));float p=0.6+0.4*sin(uTime*1.3+n*6.0);
      float g=smoothstep(.5,.05,r)*smoothstep(.35,.75,n)*p;vec3 col=mix(vec3(.06,.02,.01),vec3(1.0,.32,.05)*2.2,g);gl_FragColor=vec4(col*uInt+vec3(.02,.01,.0),1.);}`
  });
  const coals = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.62), coalMat); coals.rotation.x = -Math.PI / 2; coals.position.set(FIRE.x, 0.045, cz); scene.add(coals);
  tag(coals, 'fire');
  for (let i = 0; i < 3; i++) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.56), flameMaterial(i * 1.7, 1));
    m.position.set(FIRE.x + 0.02, 0.13 + 0.28, cz + (i - 1) * 0.07); m.rotation.y = Math.PI / 2 + (i - 1) * 0.55; scene.add(m); flames.push(m); noGTAO.push(m);
  }
  const N = 50; const p = new Float32Array(N * 3); emberV = new Float32Array(N);
  for (let i = 0; i < N; i++) { p[i * 3] = FIRE.x + rnd(-0.15, 0.15); p[i * 3 + 1] = rnd(0.2, 0.85); p[i * 3 + 2] = cz + rnd(-0.25, 0.25); emberV[i] = rnd(0.2, 0.55); }
  emberGeo = new THREE.BufferGeometry(); emberGeo.setAttribute('position', new THREE.BufferAttribute(p, 3));
  embers = new THREE.Points(emberGeo, new THREE.PointsMaterial({ color: new THREE.Color(1.0, 0.5, 0.15).multiplyScalar(3), size: 0.012, transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending }));
  scene.add(embers); noGTAO.push(embers);
  const stack = new THREE.Group(); const sr = seeded(5);
  const rows = [3, 2, 1]; rows.forEach((n, row) => { for (let i = 0; i < n; i++) { const m = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.07, 0.48, 9), barkMat); m.rotation.x = Math.PI / 2; m.rotation.y = (sr() - 0.5) * 0.15; m.position.set((i - (n - 1) / 2) * 0.14, 0.07 + row * 0.12, 0); m.castShadow = m.receiveShadow = true; stack.add(m); } });
  stack.position.set(-2.62, 0, 1.55); stack.rotation.y = 0.1; scene.add(stack);
}

let screenMat, scr, sctx, screenMesh, ledMat, boombox, boomPanelMats = [];
const SW = 1024, SH = 768;
function buildDesk() {
  const top = planks({ rep: [1.2, 0.5], color: 0x8a6448, rough: 0.6 });
  const legM = planks({ rep: [0.2, 0.6], color: 0x6a4a34 });
  box(DESK.w, 0.045, DESK.d, top, DESK.x, DESK.top - 0.022, DESK.z);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(0.055, DESK.top - 0.045, 0.055, legM, DESK.x + sx * (DESK.w / 2 - 0.06), (DESK.top - 0.045) / 2, DESK.z + sz * (DESK.d / 2 - 0.06));
  box(DESK.w - 0.12, 0.09, 0.02, legM, DESK.x, DESK.top - 0.09, DESK.z + DESK.d / 2 - 0.05);
  box(0.42, 0.13, DESK.d - 0.1, top, DESK.x - DESK.w / 2 + 0.27, DESK.top - 0.13, DESK.z);
  box(0.05, 0.025, 0.015, ironMat, DESK.x - DESK.w / 2 + 0.27, DESK.top - 0.13, DESK.z + DESK.d / 2 - 0.04);

  const plastic = new THREE.MeshStandardMaterial({ color: 0xb5ad9c, roughness: 0.55, metalness: 0 });
  const mon = new THREE.Group(); mon.position.set(MON.x, DESK.top, MON.z);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.17, 0.035, 32), plastic); base.position.y = 0.018; mon.add(base);
  const bez = new THREE.ExtrudeGeometry(Object.assign(rrShape(0.44, 0.38, 0.03), { holes: [rrPath(0.352, 0.268, 0.02)] }), { depth: 0.05, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.008, bevelSegments: 3, curveSegments: 8 });
  const bezel = new THREE.Mesh(bez, plastic); bezel.position.set(0, 0.04 + 0.19, -0.02); mon.add(bezel);
  const backG = new THREE.BoxGeometry(0.4, 0.34, 0.34); { const p = backG.attributes.position; for (let i = 0; i < p.count; i++) if (p.getZ(i) < 0) { p.setX(i, p.getX(i) * 0.6); p.setY(i, p.getY(i) * 0.62 + 0.015); } backG.computeVertexNormals(); }
  const backM = new THREE.Mesh(backG, plastic); backM.position.set(0, 0.04 + 0.19, -0.02 - 0.17); mon.add(backM);
  const vents = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.1), new THREE.MeshStandardMaterial({ color: 0x2a2620, roughness: 1 })); vents.position.set(0, 0.34, -0.25); vents.rotation.x = -Math.PI / 2 + 0.35; mon.add(vents);
  const tube = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.28, 0.05), new THREE.MeshBasicMaterial({ color: 0x050505 })); tube.position.set(0, 0.23, 0.0); mon.add(tube);
  const sg = new THREE.PlaneGeometry(0.352, 0.268, 28, 22); { const p = sg.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i) / 0.176, y = p.getY(i) / 0.134; p.setZ(i, 0.011 * (1 - 0.5 * (x * x + y * y))); } sg.computeVertexNormals(); }
  scr = document.createElement('canvas'); scr.width = SW; scr.height = SH; sctx = scr.getContext('2d');
  const stex = new THREE.CanvasTexture(scr); stex.colorSpace = THREE.SRGBColorSpace; stex.anisotropy = 8; stex.minFilter = THREE.LinearMipmapLinearFilter;
  screenMat = new THREE.ShaderMaterial({
    uniforms: { map: { value: stex }, uTime: { value: 0 }, uOn: { value: 0 }, uBright: { value: 1.15 } }, fog: false,
    vertexShader: flameVS,
    fragmentShader: `uniform sampler2D map;uniform float uTime,uOn,uBright;varying vec2 vUv;
    float hh(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
    vec2 barrel(vec2 uv){vec2 c=uv-.5;float r2=dot(c,c);return .5+c*(1.0+.09*r2);}
    void main(){vec2 uv=barrel(vUv);vec3 col=vec3(0.);
      if(uv.x>0.&&uv.x<1.&&uv.y>0.&&uv.y<1.){
        float ca=0.0011;col.r=texture2D(map,uv+vec2(ca,0.)).r;col.g=texture2D(map,uv).g;col.b=texture2D(map,uv-vec2(ca,0.)).b;
        col+=texture2D(map,uv+vec2(0.0035,0.)).rgb*0.12;
        col*=0.80+0.20*sin(uv.y*768.*3.14159);
        col*=0.95+0.05*sin(uv.x*1024.*2.0);
        float band=smoothstep(0.,.12,abs(fract(uv.y+uTime*.05)-.5));col*=.975+.025*band;
        col+=(hh(uv*vec2(1024.,768.)+fract(uTime))-.5)*.03;
        vec2 c=uv-.5;col*=1.-dot(c,c)*1.3;
        col*=uBright;}
      vec2 c2=vUv-.5;vec3 glass=vec3(.008,.01,.009)+vec3(.035,.04,.045)*smoothstep(.45,0.,length(c2-vec2(-.2,.17)))+vec3(.012)*smoothstep(.5,.0,length(c2));
      vec3 o=mix(glass,col+glass*0.4,uOn);gl_FragColor=vec4(o,1.);}`
  });
  screenMesh = new THREE.Mesh(sg, screenMat); screenMesh.position.set(0, 0.04 + 0.19, 0.022); mon.add(screenMesh);
  ledMat = new THREE.MeshStandardMaterial({ color: 0x220000, emissive: 0xff3020, emissiveIntensity: 0.6 });
  const led = new THREE.Mesh(new THREE.SphereGeometry(0.005, 10, 8), ledMat); led.position.set(0.17, 0.065, 0.045); mon.add(led);
  const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.01, 12), plastic); knob.rotation.x = Math.PI / 2; knob.position.set(0.14, 0.065, 0.045); mon.add(knob);
  shade(mon); screenMesh.castShadow = false; scene.add(mon);
  tag(screenMesh, 'screen'); tag(bezel, 'screen');
  const kTex = canvasTex(512, 170, (g, w, h) => {
    g.fillStyle = '#a69e8c'; g.fillRect(0, 0, w, h);
    const rows = [14, 14, 13, 12]; let y = 12;
    rows.forEach((n, ri) => { const kw = (w - 24) / 14.6, off = ri * kw * 0.3 + 12; for (let i = 0; i < n; i++) { g.fillStyle = '#cfc7b4'; g.fillRect(off + i * kw + 2, y, kw - 4, 30); g.fillStyle = 'rgba(0,0,0,.18)'; g.fillRect(off + i * kw + 2, y + 26, kw - 4, 4); } y += 36; });
    g.fillStyle = '#cfc7b4'; g.fillRect(w * 0.27, y, w * 0.42, 26); g.fillStyle = 'rgba(0,0,0,.18)'; g.fillRect(w * 0.27, y + 22, w * 0.42, 4);
  });
  const kb = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.022, 0.15), [plastic, plastic, new THREE.MeshStandardMaterial({ map: kTex, roughness: 0.6 }), plastic, plastic, plastic]);
  kb.position.set(MON.x, DESK.top + 0.011, -1.8); kb.rotation.x = 0.05; kb.castShadow = kb.receiveShadow = true; scene.add(kb);
  const mouse = new THREE.Mesh(new THREE.CapsuleGeometry(0.025, 0.04, 4, 10), plastic); mouse.rotation.x = Math.PI / 2; mouse.scale.set(1, 1, 0.55); mouse.position.set(MON.x + 0.33, DESK.top + 0.012, -1.82); mouse.castShadow = true; scene.add(mouse);
  const bk = [[0.24, 0.035, 0.17, 0x3a4a5a], [0.22, 0.03, 0.16, 0x5a2a2a], [0.2, 0.028, 0.15, 0x2f4a3a]]; let by = DESK.top;
  bk.forEach(([w, h, d, c], i) => { const b = box(w, h, d, new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 }), 1.32 + i * 0.01, by + h / 2, -2.33); b.rotation.y = (i - 1) * 0.12; by += h; });
}

let fairyBulbs;
function buildDecor() {
  const sm = planks({ rep: [0.6, 0.3], color: 0x5e412d });
  const sx = 2.38, sz = -2.3, W = 0.96, H = 1.86, D = 0.3;
  box(0.035, H, D, sm, sx - W / 2, H / 2, sz); box(0.035, H, D, sm, sx + W / 2, H / 2, sz);
  box(W, 0.02, D, sm, sx, H, sz); box(W, H, 0.012, sm, sx, H / 2, sz - D / 2 + 0.006);
  const r = seeded(42); const bookCols = [0x6a2f2a, 0x2e4256, 0x3e5a3a, 0x7a6038, 0x4a3050, 0x8a7a5a, 0x2a2a30, 0x6a4a2a, 0x355a5a];
  for (let s = 0; s < 4; s++) {
    const y = 0.06 + s * 0.45; box(W - 0.04, 0.025, D - 0.02, sm, sx, y, sz);
    let x = sx - W / 2 + 0.05; const end = sx + W / 2 - 0.05 - (s === 1 ? 0.24 : 0);
    while (x < end - 0.03) {
      const bw2 = 0.025 + r() * 0.035, bh = 0.2 + r() * 0.14, bd = 0.17 + r() * 0.07;
      if (r() < 0.08) { x += 0.05; continue; }
      const b = box(bw2, bh, bd, new THREE.MeshStandardMaterial({ color: bookCols[Math.floor(r() * bookCols.length)], roughness: 0.75 }), x + bw2 / 2, y + 0.0125 + bh / 2, sz + 0.02 - (0.24 - bd) / 2);
      if (r() < 0.07) { b.rotation.z = -0.25; b.position.x += 0.03; x += 0.06; }
      x += bw2 + 0.003;
    }
    if (s === 1) {
      for (let i = 0; i < 3; i++) box(0.18, 0.03, 0.14, new THREE.MeshStandardMaterial({ color: bookCols[(i * 3) % 9], roughness: 0.8 }), sx + W / 2 - 0.15, y + 0.03 + i * 0.03, sz + 0.02);
    }
  }
  const print1 = canvasTex(360, 480, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#0b1222'); gr.addColorStop(1, '#1d2a3c'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 4; i++) { g.strokeStyle = `rgba(110,230,190,${0.18 - i * 0.03})`; g.lineWidth = 18 - i * 3; g.beginPath(); g.moveTo(-20, 120 + i * 22); g.bezierCurveTo(100, 40 + i * 30, 240, 200 - i * 20, 400, 90 + i * 15); g.stroke(); }
    g.fillStyle = '#0a0f18'; g.beginPath(); g.moveTo(0, 360); g.lineTo(90, 250); g.lineTo(150, 310); g.lineTo(230, 210); g.lineTo(360, 340); g.lineTo(360, 480); g.lineTo(0, 480); g.fill();
    g.fillStyle = '#e8eef8'; g.beginPath(); g.moveTo(90, 250); g.lineTo(110, 275); g.lineTo(70, 274); g.fill(); g.beginPath(); g.moveTo(230, 210); g.lineTo(258, 245); g.lineTo(205, 243); g.fill();
    g.fillStyle = '#05070c'; g.fillRect(0, 420, w, 60);
  });
  const print2 = canvasTex(480, 300, (g, w, h) => {
    g.fillStyle = '#e9e0cc'; g.fillRect(0, 0, w, h); g.fillStyle = '#c86a32';
    g.beginPath(); g.moveTo(170, 230); g.quadraticCurveTo(140, 140, 200, 110); g.lineTo(215, 70); g.lineTo(232, 108); g.lineTo(262, 108); g.lineTo(280, 70); g.lineTo(290, 112); g.quadraticCurveTo(340, 150, 300, 230); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(300, 225); g.quadraticCurveTo(400, 240, 380, 160); g.quadraticCurveTo(360, 200, 300, 200); g.fill();
    g.fillStyle = '#f6efe2'; g.beginPath(); g.moveTo(222, 150); g.lineTo(245, 185); g.lineTo(268, 150); g.lineTo(245, 160); g.fill(); g.beginPath(); g.arc(378, 168, 14, 0, 7); g.fill();
    g.fillStyle = '#2a1d14'; g.fillRect(232, 136, 6, 6); g.fillRect(256, 136, 6, 6);
  });
  const frame = (tx, w, h, x, y, z, ry = 0) => {
    const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry;
    const fm = new THREE.MeshStandardMaterial({ color: 0x2a1c12, roughness: 0.6 });
    box(w + 0.05, h + 0.05, 0.025, fm, 0, 0, 0, g);
    const art = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: tx, roughness: 0.7 })); art.position.z = 0.0135; g.add(art); scene.add(g); return g;
  };
  frame(print1, 0.36, 0.48, -0.42, 1.72, R.z0 + 0.17);
  frame(print2, 0.44, 0.27, 2.38, 2.28, R.z0 + 0.17);
  frame(print2, 0.2, 0.125, -2.45, 1.38, 0.05, Math.PI / 2 - 0.12);

  const pts = []; const y0 = 2.62, zf = R.z0 + 0.2;
  const hooks = [-2.85, -1.0, 0.85, 2.85];
  for (let k = 0; k < hooks.length - 1; k++) { const a = hooks[k], b = hooks[k + 1]; for (let i = 0; i <= 24; i++) { const t = i / 24; pts.push(new THREE.Vector3(a + (b - a) * t, y0 - Math.sin(Math.PI * t) * 0.22, zf)); } }
  const curve = new THREE.CatmullRomCurve3(pts);
  const wire = new THREE.Mesh(new THREE.TubeGeometry(curve, 200, 0.0035, 5), new THREE.MeshStandardMaterial({ color: 0x15130f, roughness: 0.8 })); scene.add(wire);
  const NB = 34; fairyBulbs = new THREE.InstancedMesh(new THREE.SphereGeometry(0.014, 10, 8), new THREE.MeshStandardMaterial({ color: 0x331a00, emissive: 0xffb36a, emissiveIntensity: 5 }), NB);
  const dm = new THREE.Object3D(); for (let i = 0; i < NB; i++) { const p = curve.getPointAt((i + 0.5) / NB); dm.position.set(p.x, p.y - 0.02, p.z); dm.updateMatrix(); fairyBulbs.setMatrixAt(i, dm.matrix); }
  scene.add(fairyBulbs);

  const rugTex = canvasTex(1024, 1024, (g, w, h) => {
    const cols = ['#5a1e22', '#7a3a2a', '#c9b08a', '#2a3448', '#6a2a2e', '#8a6a4a', '#3a2a24'];
    for (let i = 0; i < 46; i++) { const t = 1 - i / 46; g.fillStyle = cols[i % cols.length]; g.beginPath(); g.ellipse(w / 2, h / 2, (w / 2) * t, (h / 2) * t, 0, 0, 7); g.fill();
      g.strokeStyle = 'rgba(0,0,0,.28)'; g.lineWidth = 2; g.stroke();
      g.save(); g.setLineDash([6, 8]); g.strokeStyle = 'rgba(255,240,220,.08)'; g.lineWidth = 4; g.beginPath(); g.ellipse(w / 2, h / 2, (w / 2) * t - 5, (h / 2) * t - 5, 0, 0, 7); g.stroke(); g.restore(); }
  });
  rugTex.wrapS = rugTex.wrapT = THREE.ClampToEdgeWrapping;
  const rug = new THREE.Mesh(new THREE.CircleGeometry(1, 64), new THREE.MeshStandardMaterial({ map: rugTex, roughness: 1, transparent: false }));
  rug.scale.set(0.88, 0.76, 1); rug.rotation.x = -Math.PI / 2; rug.position.set(-1.2, 0.006, 0.45); rug.receiveShadow = true; scene.add(rug);

  const cm = planks({ rep: [0.3, 0.2], color: 0x5a3e2a });
  const ch = new THREE.Group();
  box(0.44, 0.04, 0.42, cm, 0, 0.46, 0, ch);
  for (const a of [-1, 1]) for (const b of [-1, 1]) box(0.035, 0.46, 0.035, cm, a * 0.19, 0.23, b * 0.18, ch);
  for (const a of [-1, 1]) box(0.035, 0.42, 0.035, cm, a * 0.19, 0.69, 0.18, ch);
  box(0.42, 0.08, 0.025, cm, 0, 0.84, 0.18, ch); box(0.42, 0.05, 0.02, cm, 0, 0.66, 0.18, ch);
  ch.position.set(MON.x - 0.12, 0, -1.28); ch.rotation.y = 0.35; scene.add(ch);
}

const candleFlames = []; let clockHands = null, dust = null, dustGeo = null, dustV = null;
function fabric(c1, c2, size = 256, rep = [1, 1]) {
  return canvasTex(size, size, (g, w, h) => {
    g.fillStyle = c1; g.fillRect(0, 0, w, h);
    g.fillStyle = c2; g.globalAlpha = 0.55; g.fillRect(0, 0, w / 2, h); g.fillRect(0, 0, w, h / 2);
    g.globalAlpha = 0.35; g.fillRect(0, 0, w / 2, h / 2); g.globalAlpha = 1;
    g.strokeStyle = 'rgba(0,0,0,.18)'; g.lineWidth = 1; for (let i = 0; i < w; i += 4) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, h); g.stroke(); }
  }, { rep });
}
function knit(c, rep = [3, 3]) {
  return canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = c; g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 16) for (let x = 0; x < w; x += 16) { g.strokeStyle = 'rgba(0,0,0,.22)'; g.lineWidth = 2; g.beginPath(); g.moveTo(x, y); g.lineTo(x + 8, y + 14); g.lineTo(x + 16, y); g.stroke(); g.strokeStyle = 'rgba(255,255,255,.08)'; g.beginPath(); g.moveTo(x + 2, y + 2); g.lineTo(x + 8, y + 11); g.stroke(); }
  }, { rep });
}
function addCandle(x, y, z, h = 0.1, r = 0.024) {
  const wax = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 18), new THREE.MeshStandardMaterial({ color: 0xefe4cc, roughness: 0.55, emissive: 0xff9a40, emissiveIntensity: 0.06 }));
  wax.position.set(x, y + h / 2, z); wax.castShadow = true; scene.add(wax);
  const wick = new THREE.Mesh(new THREE.CylinderGeometry(0.002, 0.002, 0.012, 4), new THREE.MeshBasicMaterial({ color: 0x111111 })); wick.position.set(x, y + h + 0.006, z); scene.add(wick);
  const f = new THREE.Mesh(new THREE.PlaneGeometry(0.026, 0.055), flameMaterial(x * 3.1, 1.2)); f.position.set(x, y + h + 0.03, z); scene.add(f); noGTAO.push(f); candleFlames.push(f);
  return f;
}
function buildCozy() {
  const wood = planks({ rep: [0.4, 0.2], color: 0x6a4a34, rough: 0.7 });
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.95, 10), ironMat); rod.rotation.z = Math.PI / 2; rod.position.set(WIN.x, 2.36, R.z0 + 0.25); scene.add(rod);
  for (const s of [-1, 1]) { const k = new THREE.Mesh(new THREE.SphereGeometry(0.022, 12, 10), ironMat); k.position.set(WIN.x + s * 0.98, 2.36, R.z0 + 0.25); scene.add(k); }
  const plaid = fabric('#7a1c1c', '#1a1414', 256, [2, 4]);
  const curtainMat = new THREE.MeshStandardMaterial({ map: plaid, roughness: 1, side: THREE.DoubleSide });
  for (const s of [-1, 1]) {
    const w = 0.46, h = 1.38, g = new THREE.PlaneGeometry(w, h, 30, 12), p = g.attributes.position;
    for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), t = (h / 2 - y) / h; const gather = 1 - t * 0.25 * (s < 0 ? 1 : 1); p.setX(i, x * gather + s * t * 0.05); p.setZ(i, Math.sin((x + 0.3) * 42) * 0.028 * (0.7 + t * 0.6)); }
    g.computeVertexNormals();
    const c = new THREE.Mesh(g, curtainMat); c.position.set(WIN.x + s * (WIN.w / 2 + 0.12), 2.34 - h / 2, R.z0 + 0.22); c.castShadow = c.receiveShadow = true; scene.add(c);
  }
  addCandle(WIN.x + 0.42, WIN.y - WIN.h / 2, R.z0 + 0.13, 0.11);
  addCandle(WIN.x + 0.52, WIN.y - WIN.h / 2, R.z0 + 0.16, 0.07, 0.02);
  L.sill = new THREE.PointLight(0xffa850, 0.35, 0, 2); L.sill.position.set(WIN.x + 0.47, WIN.y - WIN.h / 2 + 0.2, R.z0 + 0.3); scene.add(L.sill);

  const runTex = canvasTex(512, 768, (g, w, h) => {
    const cols = ['#d8c8a8', '#2f5a5a', '#a4542c', '#d8c8a8', '#3a2a24', '#c9b48e'];
    let y = 0, i = 0; while (y < h) { const bh = 18 + (i * 37) % 40; g.fillStyle = cols[i % cols.length]; g.fillRect(0, y, w, bh); y += bh; i++; }
    const r = seeded(8); for (let k = 0; k < 4000; k++) { g.fillStyle = `rgba(0,0,0,${r() * 0.12})`; g.fillRect(r() * w, r() * h, 2, 1); }
    g.strokeStyle = '#d8c8a8'; g.lineWidth = 14; g.strokeRect(7, 7, w - 14, h - 14);
  });
  const rug2 = new THREE.Mesh(new THREE.PlaneGeometry(1.25, 1.85), new THREE.MeshStandardMaterial({ map: runTex, roughness: 1 }));
  rug2.rotation.x = -Math.PI / 2; rug2.rotation.z = 0.35; rug2.position.set(1.75, 0.005, -0.3); rug2.receiveShadow = true; scene.add(rug2);
  const tbl = new THREE.Group(); tbl.position.set(1.85, 0, -0.08);
  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.035, 32), wood); top.position.y = 0.56; tbl.add(top);
  const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 0.54, 12), wood); leg.position.y = 0.28; tbl.add(leg);
  const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.19, 0.03, 24), wood); foot.position.y = 0.015; tbl.add(foot);
  const lb = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.065, 0.16, 20), new THREE.MeshStandardMaterial({ color: 0x2e4a4a, roughness: 0.35 })); lb.position.set(-0.06, 0.66, -0.04); tbl.add(lb);
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.12, 8), ironMat); stem.position.set(-0.06, 0.8, -0.04); tbl.add(stem);
  const lshade = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.13, 0.15, 28, 1, true), new THREE.MeshStandardMaterial({ color: 0xe8d6b4, roughness: 0.9, side: THREE.DoubleSide, emissive: 0xffb060, emissiveIntensity: 0.35 }));
  lshade.position.set(-0.06, 0.89, -0.04); tbl.add(lshade);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.025, 12, 10), new THREE.MeshStandardMaterial({ color: 0x331a00, emissive: 0xffc27a, emissiveIntensity: 5 })); bulb.position.set(-0.06, 0.86, -0.04); tbl.add(bulb);
  for (let i = 0; i < 2; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.028, 0.12), new THREE.MeshStandardMaterial({ color: [0x3e5a3a, 0x7a3a2a][i], roughness: 0.8 })); b.position.set(0.09, 0.592 + i * 0.028, 0.06); b.rotation.y = i * 0.3; tbl.add(b); }
  const mug = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.028, 0.075, 18), new THREE.MeshStandardMaterial({ color: 0xc8a070, roughness: 0.4 })); mug.position.set(0.1, 0.65, -0.1); tbl.add(mug);
  shade(tbl); lshade.castShadow = false; bulb.castShadow = false; scene.add(tbl);
  L.table = new THREE.PointLight(0xffb066, 1.5, 0, 2); L.table.position.set(1.79, 0.86, -0.12); scene.add(L.table);
  L.tableShade = lshade; L.tableBulb = bulb;

  const cush = (c, x, z, rot, s = 1) => { const m = new THREE.Mesh(new THREE.SphereGeometry(0.26, 28, 16), new THREE.MeshStandardMaterial({ map: knit(c, [4, 2]), roughness: 1 })); m.scale.set(1 * s, 0.32 * s, 0.85 * s); m.position.set(x, 0.075 * s, z); m.rotation.y = rot; m.castShadow = m.receiveShadow = true; scene.add(m);
    const btn = new THREE.Mesh(new THREE.SphereGeometry(0.018, 10, 8), new THREE.MeshStandardMaterial({ color: 0x2a2018 })); btn.position.set(x, 0.155 * s, z); scene.add(btn); };
  cush('#c4922e', -0.98, -0.16, 0.4); cush('#4a8a86', -0.66, 0.16, -0.3, 0.82);
  const fold = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.07, 0.3), new THREE.MeshStandardMaterial({ map: fabric('#d8cfbe', '#8a2424', 128, [2, 2]), roughness: 1 }));
  fold.position.set(-0.98, 0.04, 0.98); fold.rotation.y = 0.5; fold.castShadow = fold.receiveShadow = true; scene.add(fold);
  const fold2 = fold.clone(); fold2.scale.set(0.95, 0.9, 0.95); fold2.position.y = 0.105; fold2.rotation.y = 0.62; scene.add(fold2);

  const hp = new THREE.Group(); const dark = new THREE.MeshStandardMaterial({ color: 0x1a1a1e, roughness: 0.45 }), pad = new THREE.MeshStandardMaterial({ color: 0x2a2a30, roughness: 0.9 });
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.01, 8, 28, Math.PI), dark); band.rotation.x = -Math.PI / 2; hp.add(band);
  for (const s of [-1, 1]) { const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.03, 22), dark); cup.position.set(s * 0.085, 0.015, 0); hp.add(cup); const pd = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.012, 8, 20), pad); pd.rotation.x = Math.PI / 2; pd.position.set(s * 0.085, 0.032, 0); hp.add(pd); }
  hp.position.set(0.33, DESK.top + 0.01, -1.86); hp.rotation.y = 0.5; shade(hp); scene.add(hp);
  const tapeCols = [0xd8d0c0, 0x2a2a2e, 0xb04030];
  tapeCols.forEach((c, i) => { const t = new THREE.Mesh(new THREE.BoxGeometry(0.105, 0.016, 0.068), new THREE.MeshStandardMaterial({ color: c, roughness: 0.5 })); t.position.set(0.36, DESK.top + 0.008 + i * 0.017, -2.25); t.rotation.y = (i - 1) * 0.15; t.castShadow = true; scene.add(t);
    const lab = new THREE.Mesh(new THREE.PlaneGeometry(0.07, 0.04), new THREE.MeshStandardMaterial({ color: 0xf0e8d0, roughness: 0.8 })); lab.rotation.x = -Math.PI / 2; lab.rotation.z = -t.rotation.y; lab.position.set(0.36, DESK.top + 0.0165 + i * 0.017, -2.25); scene.add(lab); });
  const pc = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.032, 0.1, 18, 1, true), new THREE.MeshStandardMaterial({ color: 0x4a6a6a, roughness: 0.5, side: THREE.DoubleSide })); pc.position.set(1.12, DESK.top + 0.05, -2.33); pc.castShadow = true; scene.add(pc);
  [0xe0b030, 0x3060c0, 0xc03030, 0x30a050].forEach((c, i) => { const pen = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.16, 6), new THREE.MeshStandardMaterial({ color: c, roughness: 0.5 })); pen.position.set(1.12 + Math.cos(i * 1.6) * 0.014, DESK.top + 0.1, -2.33 + Math.sin(i * 1.6) * 0.014); pen.rotation.set(Math.sin(i) * 0.15, 0, Math.cos(i * 2) * 0.15); scene.add(pen); });
  const note = (c, x, y, rz) => { const n = new THREE.Mesh(new THREE.PlaneGeometry(0.05, 0.05), new THREE.MeshStandardMaterial({ color: c, roughness: 0.9, side: THREE.DoubleSide })); n.position.set(x, y, MON.z + 0.045); n.rotation.z = rz; scene.add(n); };
  note(0xf2d65a, MON.x + 0.205, DESK.top + 0.36, -0.12); note(0xf29ab0, MON.x + 0.2, DESK.top + 0.3, 0.08);

  const face = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#efe6d2'; g.beginPath(); g.arc(128, 128, 126, 0, 7); g.fill();
    g.fillStyle = '#2a1d14'; g.font = '600 28px Georgia, serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    for (let i = 1; i <= 12; i++) { const a = i / 12 * Math.PI * 2; g.fillText(String(i), 128 + Math.sin(a) * 96, 128 - Math.cos(a) * 96); }
    for (let i = 0; i < 60; i++) { const a = i / 60 * Math.PI * 2, r1 = i % 5 ? 116 : 110; g.strokeStyle = '#2a1d14'; g.lineWidth = i % 5 ? 1 : 3; g.beginPath(); g.moveTo(128 + Math.sin(a) * r1, 128 - Math.cos(a) * r1); g.lineTo(128 + Math.sin(a) * 122, 128 - Math.cos(a) * 122); g.stroke(); }
  });
  const ck = new THREE.Group(); ck.position.set(0.3, 1.98, R.z0 + 0.17);
  const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.035, 40), wood); rim.rotation.x = Math.PI / 2; ck.add(rim);
  const fc = new THREE.Mesh(new THREE.CircleGeometry(0.13, 40), new THREE.MeshStandardMaterial({ map: face, roughness: 0.7 })); fc.position.z = 0.018; ck.add(fc);
  const handM = new THREE.MeshStandardMaterial({ color: 0x1a120c });
  const mk = (len, wdt) => { const g = new THREE.BoxGeometry(wdt, len, 0.003); g.translate(0, len / 2 - 0.01, 0); const m = new THREE.Mesh(g, handM); m.position.z = 0.022; ck.add(m); return m; };
  clockHands = { h: mk(0.07, 0.008), m: mk(0.105, 0.005), s: mk(0.11, 0.0022) }; clockHands.s.material = new THREE.MeshStandardMaterial({ color: 0x8a2020 });
  shade(ck); scene.add(ck);

  const rope = (x, z, y0, y1) => { const r = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, y0 - y1, 4), new THREE.MeshStandardMaterial({ color: 0x8a7a5a })); r.position.set(x, (y0 + y1) / 2, z); scene.add(r); };
  const hpX = -0.05, hpZ = -1.05, hpY = 2.2;
  rope(hpX, hpZ, R.h - 0.2, hpY + 0.1);
  const pot = new THREE.Mesh(new THREE.SphereGeometry(0.13, 24, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xb06a44, roughness: 0.8, side: THREE.DoubleSide })); pot.position.set(hpX, hpY + 0.1, hpZ); pot.castShadow = true; scene.add(pot);
  const leafM = new THREE.MeshStandardMaterial({ color: 0x3f6a3a, roughness: 0.7, side: THREE.DoubleSide }); const lr = seeded(17);
  for (let v = 0; v < 9; v++) {
    const a = v / 9 * Math.PI * 2, len = 0.25 + lr() * 0.45, pts = [];
    for (let k = 0; k <= 6; k++) { const t = k / 6; pts.push(new THREE.Vector3(hpX + Math.cos(a) * (0.1 + t * 0.06), hpY + 0.08 - t * len, hpZ + Math.sin(a) * (0.1 + t * 0.06))); }
    const crv = new THREE.CatmullRomCurve3(pts); scene.add(new THREE.Mesh(new THREE.TubeGeometry(crv, 12, 0.0035, 4), leafM));
    for (let k = 1; k <= 6; k++) { const p = crv.getPoint(k / 6.5); const lf = new THREE.Mesh(new THREE.CircleGeometry(0.022, 8), leafM); lf.scale.set(1, 1.5, 1); lf.position.copy(p); lf.rotation.set(lr() * 3, lr() * 3, 0); scene.add(lf); }
  }
  const herbCols = [0x6a6a3a, 0x8a5a3a, 0x5a6a4a];
  [[-1.1, -1.7], [-1.1, -1.25], [-1.1, -0.8]].forEach(([x, z], i) => {
    rope(x, z, R.h - 0.2, 2.42);
    const hm = new THREE.MeshStandardMaterial({ color: herbCols[i], roughness: 1 }), hr2 = seeded(30 + i);
    for (let k = 0; k < 11; k++) { const sp = new THREE.Mesh(new THREE.ConeGeometry(0.012 + hr2() * 0.008, 0.2 + hr2() * 0.08, 5), hm); sp.rotation.set(Math.PI + (hr2() - 0.5) * 0.6, 0, (hr2() - 0.5) * 0.6); sp.position.set(x + (hr2() - 0.5) * 0.04, 2.31, z + (hr2() - 0.5) * 0.04); sp.castShadow = true; scene.add(sp); }
    const tie = new THREE.Mesh(new THREE.TorusGeometry(0.018, 0.005, 6, 12), new THREE.MeshStandardMaterial({ color: 0x8a2a2a })); tie.rotation.x = Math.PI / 2; tie.position.set(x, 2.43, z); scene.add(tie);
  });

  const kt = new THREE.Group(); const iron2 = new THREE.MeshStandardMaterial({ color: 0x1e1c1c, roughness: 0.5, metalness: 0.6 });
  const kb2 = new THREE.Mesh(new THREE.SphereGeometry(0.11, 24, 16), iron2); kb2.scale.set(1, 0.75, 1); kb2.position.y = 0.08; kt.add(kb2);
  const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.06, 0.03, 16), iron2); lid.position.y = 0.165; kt.add(lid);
  const sp2 = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.022, 0.12, 10), iron2); sp2.position.set(0.12, 0.11, 0); sp2.rotation.z = -0.9; kt.add(sp2);
  const hd = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.008, 8, 24, Math.PI), iron2); hd.position.y = 0.16; kt.add(hd);
  kt.position.set(-2.1, 0.07, 1.0); kt.rotation.y = 0.9; shade(kt); scene.add(kt);
  const tools = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.72, 8), iron2); pole.position.y = 0.36; tools.add(pole);
  const bse = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.1, 0.02, 20), iron2); bse.position.y = 0.01; tools.add(bse);
  for (let i = 0; i < 3; i++) { const a = i / 3 * Math.PI * 2, t = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.6, 6), iron2); t.position.set(Math.cos(a) * 0.035, 0.36, Math.sin(a) * 0.035); t.rotation.set(Math.sin(a) * 0.06, 0, -Math.cos(a) * 0.06); tools.add(t);
    const hdl = new THREE.Mesh(new THREE.TorusGeometry(0.018, 0.005, 6, 12), iron2); hdl.position.set(Math.cos(a) * 0.05, 0.68, Math.sin(a) * 0.05); tools.add(hdl); }
  tools.position.set(-2.22, 0.07, -0.56); shade(tools); scene.add(tools);

  const bc = [0x5a2a2a, 0x2e4256, 0x7a6038, 0x3e5a3a, 0x4a3050];
  bc.forEach((c, i) => { const b = new THREE.Mesh(new THREE.BoxGeometry(0.26 - i * 0.015, 0.045, 0.19 - i * 0.008), new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 })); b.position.set(1.68, 0.0225 + i * 0.045, -1.95); b.rotation.y = Math.sin(i * 2.3) * 0.25; b.castShadow = b.receiveShadow = true; scene.add(b); });

  const DN = LOW ? 80 : 160; const dp = new Float32Array(DN * 3); dustV = new Float32Array(DN);
  for (let i = 0; i < DN; i++) { dp[i * 3] = rnd(-2.6, 2.6); dp[i * 3 + 1] = rnd(0.3, 2.6); dp[i * 3 + 2] = rnd(-2.3, 2.2); dustV[i] = rnd(0.004, 0.02); }
  dustGeo = new THREE.BufferGeometry(); dustGeo.setAttribute('position', new THREE.BufferAttribute(dp, 3));
  dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ map: glowTex, color: 0xffd8a8, size: 0.018, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending }));
  scene.add(dust); noGTAO.push(dust);
}

let garlandBulbs = null, auroraMat = null, shroomMats = [];
function paperSketch(seed, kind, sc = 1) {
  return canvasTex(256 * sc, 320 * sc, (g, w, h) => {
    g.scale(sc, sc); w = 256; h = 320;
    const r = seeded(seed); g.fillStyle = '#ece4d2'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(110,90,60,${r() * 0.05})`; g.fillRect(r() * w, r() * h, 2, 2); }
    g.strokeStyle = '#2b2622'; g.lineWidth = 3; g.lineCap = 'round'; g.lineJoin = 'round';
    const L = (pts) => { g.beginPath(); g.moveTo(pts[0][0] + (r() - .5) * 2, pts[0][1]); for (let i = 1; i < pts.length; i++) g.lineTo(pts[i][0] + (r() - .5) * 2, pts[i][1] + (r() - .5) * 2); g.stroke(); };
    if (kind === 'fox') {
      L([[70, 120], [60, 50], [105, 95], [150, 95], [196, 50], [186, 120]]);
      L([[70, 120], [80, 170], [128, 215], [176, 170], [186, 120]]);
      L([[100, 150], [110, 158]]); L([[156, 150], [146, 158]]); L([[120, 196], [128, 204], [136, 196]]);
      g.lineWidth = 1.5; for (let i = 0; i < 9; i++) L([[200 + r() * 30, 230 + r() * 50], [210 + r() * 30, 240 + r() * 50]]);
    } else if (kind === 'shark') {
      L([[30, 170], [80, 140], [150, 132], [205, 150], [230, 168], [200, 182], [140, 195], [80, 192], [30, 170]]);
      L([[120, 133], [140, 95], [160, 134]]); L([[30, 170], [12, 140]]); L([[30, 170], [14, 200]]);
      L([[185, 160], [188, 161]]); g.lineWidth = 2; for (let i = 0; i < 4; i++) L([[80 + i * 26, 142], [88 + i * 26, 175]]);
      L([[100, 192], [92, 215]]); L([[150, 194], [160, 214]]);
    } else if (kind === 'head') {
      g.strokeStyle = 'rgba(43,38,34,.4)'; g.lineWidth = 1.5;
      g.beginPath(); g.arc(128, 150, 62, 0, 7); g.stroke(); L([[128, 80], [128, 225]]); L([[62, 155], [194, 150]]);
      g.beginPath(); g.ellipse(128, 190, 30, 20, 0, 0, 7); g.stroke();
      g.strokeStyle = '#2b2622'; g.lineWidth = 2.5; L([[78, 110], [70, 40], [112, 92]]); L([[178, 110], [186, 40], [144, 92]]);
      L([[96, 150], [112, 146]]); L([[160, 150], [144, 146]]); L([[120, 200], [128, 206], [136, 200]]);
    } else if (kind === 'cabin') {
      L([[20, 250], [236, 246]]); L([[70, 250], [70, 175], [186, 175], [186, 248]]); L([[58, 180], [128, 120], [198, 180]]);
      L([[160, 150], [160, 122], [174, 122], [174, 162]]); L([[110, 248], [110, 205], [134, 205], [134, 248]]); L([[146, 190], [172, 190], [172, 212], [146, 212], [146, 190]]);
      g.lineWidth = 2; L([[167, 112], [160, 98], [172, 86], [164, 72], [176, 60]]);
      for (const tx of [32, 222]) L([[tx - 16, 248], [tx, 196], [tx + 16, 248]]);
      g.fillStyle = '#2b2622'; for (let i = 0; i < 26; i++) { g.beginPath(); g.arc(r() * w, r() * 170, 1.6, 0, 7); g.fill(); }
    } else if (kind === 'name') {
      g.fillStyle = '#2b2622'; g.font = '44px "Caveat", "Comic Sans MS", cursive'; g.textAlign = 'center'; g.fillText((CFG.name || 'schurik').toLowerCase(), w / 2, 140);
      g.lineWidth = 2; L([[80, 156], [176, 152]]);
      g.beginPath(); g.ellipse(128, 222, 14, 11, 0, 0, 7); g.stroke(); for (let j = 0; j < 4; j++) { g.beginPath(); g.ellipse(112 + j * 11, 202 - (j === 1 || j === 2 ? 5 : 0), 4, 5.5, 0, 0, 7); g.stroke(); }
    } else if (kind === 'text') {
      g.fillStyle = '#2b2622'; g.font = '30px "Caveat", "Comic Sans MS", cursive'; g.textAlign = 'left';
      let y = 92; String(T.bookEmpty || '').split('\n').forEach(par => { let line = ''; par.split(' ').forEach(wd => { if (g.measureText(line + wd).width > w - 60) { g.save(); g.translate(32, y); g.rotate((r() - 0.5) * 0.03); g.fillText(line.trim(), 0, 0); g.restore(); y += 34; line = ''; } line += wd + ' '; }); g.save(); g.translate(32, y); g.rotate((r() - 0.5) * 0.03); g.fillText(line.trim(), 0, 0); g.restore(); y += 34; });
    } else if (kind === 'blank') {
    } else {
      for (let k = 0; k < 4; k++) { const cx = 60 + (k % 2) * 120 + r() * 20, cy = 80 + Math.floor(k / 2) * 140 + r() * 20;
        g.beginPath(); g.ellipse(cx, cy + 20, 24, 18, 0, 0, 7); g.stroke(); for (let j = 0; j < 4; j++) { g.beginPath(); g.ellipse(cx - 27 + j * 18, cy - 14 - (j === 1 || j === 2 ? 8 : 0), 7, 9, 0, 0, 7); g.stroke(); } }
    }
  });
}
function buildDecor2() {
  const wood = planks({ rep: [0.5, 0.25], color: 0x6a4630, rough: 0.7 });
  const bigRug = canvasTex(768, 512, (g, w, h) => {
    g.fillStyle = '#5a2422'; g.fillRect(0, 0, w, h);
    const band = (m, c, t) => { g.strokeStyle = c; g.lineWidth = t; g.strokeRect(m, m, w - 2 * m, h - 2 * m); };
    band(14, '#c9b08a', 10); band(34, '#2a3448', 14); band(52, '#c9b08a', 4);
    g.fillStyle = '#7a3a2a'; for (let y = 90; y < h - 80; y += 60) for (let x = 100; x < w - 90; x += 70) { g.save(); g.translate(x, y); g.rotate(Math.PI / 4); g.fillRect(-14, -14, 28, 28); g.restore(); }
    g.fillStyle = '#c9b08a'; for (let y = 90; y < h - 80; y += 60) for (let x = 100; x < w - 90; x += 70) { g.save(); g.translate(x, y); g.rotate(Math.PI / 4); g.fillRect(-5, -5, 10, 10); g.restore(); }
    const r = seeded(6); for (let i = 0; i < 9000; i++) { g.fillStyle = `rgba(0,0,0,${r() * 0.1})`; g.fillRect(r() * w, r() * h, 2, 1); }
  });
  const br = new THREE.Mesh(new THREE.PlaneGeometry(2.9, 1.95), new THREE.MeshStandardMaterial({ map: bigRug, roughness: 1 }));
  br.rotation.x = -Math.PI / 2; br.rotation.z = -0.08; br.position.set(-0.75, 0.003, 0.5); br.receiveShadow = true; scene.add(br);
  const ch = new THREE.Group(); ch.position.set(-0.3, 0, -0.42); ch.rotation.y = 0.35; ch.scale.setScalar(0.9);
  const bodyC = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.32, 0.4), wood); bodyC.position.y = 0.16; ch.add(bodyC);
  const lid = new THREE.Mesh(new THREE.BoxGeometry(0.69, 0.06, 0.43), wood); lid.position.y = 0.35; ch.add(lid);
  for (const x of [-0.24, 0.24]) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.39, 0.435), ironMat); b.position.set(x, 0.19, 0); ch.add(b); }
  const lock = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.07, 0.01), new THREE.MeshStandardMaterial({ color: 0x8a6a30, metalness: 0.7, roughness: 0.4 })); lock.position.set(0, 0.29, 0.206); ch.add(lock);
  const mug = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.032, 0.085, 18), new THREE.MeshStandardMaterial({ color: 0x3a5a6a, roughness: 0.45 })); mug.position.set(0.18, 0.42, 0.05); ch.add(mug);
  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.022, 0.006, 6, 14), mug.material); handle.position.set(0.218, 0.42, 0.05); handle.rotation.y = Math.PI / 2; ch.add(handle);
  const bk = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.025, 0.14), new THREE.MeshStandardMaterial({ color: 0x6a2a2a, roughness: 0.8 })); bk.position.set(-0.12, 0.392, -0.02); bk.rotation.y = 0.3; ch.add(bk);
  const pg = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.006, 0.12), new THREE.MeshStandardMaterial({ color: 0xe8dfc8, roughness: 0.9 })); pg.position.set(-0.12, 0.407, -0.02); pg.rotation.y = 0.3; ch.add(pg);
  shade(ch); scene.add(ch); ch.updateMatrixWorld(true);
  const cp = new THREE.Vector3(0.0, 0.38, 0.0).applyMatrix4(ch.matrixWorld); addCandle(cp.x, cp.y, cp.z, 0.09, 0.028);
  L.chest = new THREE.PointLight(0xffa850, 0.35, 0, 2); L.chest.position.set(cp.x, cp.y + 0.25, cp.z); scene.add(L.chest);
  const gPts = []; const xm = -2.12, ym = 1.29;
  for (let i = 0; i <= 40; i++) { const t = i / 40, z = -0.58 + t * 1.76; const sag = Math.abs(Math.sin(t * Math.PI * 2)) * 0.1; gPts.push(new THREE.Vector3(xm, ym - sag, z)); }
  const gc = new THREE.CatmullRomCurve3(gPts), pine = new THREE.MeshStandardMaterial({ color: 0x1f3a26, roughness: 0.9, flatShading: true });
  const clumpG = new THREE.IcosahedronGeometry(0.045, 0); const NC = 60; const clumps = new THREE.InstancedMesh(clumpG, pine, NC); const dm = new THREE.Object3D(); const gr = seeded(14);
  for (let i = 0; i < NC; i++) { const p = gc.getPointAt(i / (NC - 1)); dm.position.set(p.x + (gr() - 0.5) * 0.03, p.y + (gr() - 0.5) * 0.03, p.z); dm.rotation.set(gr() * 3, gr() * 3, gr() * 3); dm.scale.setScalar(0.8 + gr() * 0.6); dm.updateMatrix(); clumps.setMatrixAt(i, dm.matrix); }
  clumps.castShadow = true; scene.add(clumps);
  const NB = 18; garlandBulbs = new THREE.InstancedMesh(new THREE.SphereGeometry(0.01, 8, 6), new THREE.MeshStandardMaterial({ color: 0x331a00, emissive: 0xffc070, emissiveIntensity: 4 }), NB);
  for (let i = 0; i < NB; i++) { const p = gc.getPointAt((i + 0.5) / NB); dm.position.set(p.x + 0.035, p.y - 0.01, p.z); dm.rotation.set(0, 0, 0); dm.scale.setScalar(1); dm.updateMatrix(); garlandBulbs.setMatrixAt(i, dm.matrix); }
  scene.add(garlandBulbs);
  [['fox', -0.06, 1.36, 0.06, 31], ['shark', 0.15, 1.27, -0.07, 32], ['paws', 0.05, 1.5, 0.12, 33]].forEach(([k, x, y, rz, sd]) => {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(0.14, 0.175), new THREE.MeshStandardMaterial({ map: paperSketch(sd, k), roughness: 0.9 })); p.position.set(x, y, R.z0 + 0.15 + (k === 'paws' ? 0.003 : 0)); p.rotation.z = rz; p.receiveShadow = true; scene.add(p);
    const pin = new THREE.Mesh(new THREE.SphereGeometry(0.006, 8, 6), new THREE.MeshStandardMaterial({ color: [0x2a6ab0, 0xc0a020, 0x30a050][sd % 3] })); pin.position.set(x, y + 0.075, R.z0 + 0.157); scene.add(pin);
  });
  const poster = canvasTex(260, 360, (g, w, h) => {
    g.fillStyle = '#121a26'; g.fillRect(0, 0, w, h); g.strokeStyle = '#3a5a7a'; g.lineWidth = 6; g.strokeRect(10, 10, w - 20, h - 20);
    g.fillStyle = '#bcd6f0'; const cx = w / 2, cy = 140; g.beginPath(); g.ellipse(cx, cy + 28, 44, 34, 0, 0, 7); g.fill();
    [[-46, -18], [-18, -40], [18, -40], [46, -18]].forEach(([dx, dy]) => { g.beginPath(); g.ellipse(cx + dx, cy + dy, 15, 19, 0, 0, 7); g.fill(); });
    g.fillStyle = '#e8f2fb'; g.font = '700 34px "Space Grotesk", Arial'; g.textAlign = 'center'; g.fillText('FROSTPAW', cx, 262); g.fillStyle = '#7aa0c4'; g.font = '400 18px "JetBrains Mono", monospace'; g.fillText('interactive', cx, 292);
  });
  const pf = new THREE.Group(); pf.position.set(-2.7, 2.02, R.z0 + 0.155);
  box(0.27, 0.36, 0.015, new THREE.MeshStandardMaterial({ color: 0x1a120c, roughness: 0.6 }), 0, 0, 0, pf);
  const pm = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.33), new THREE.MeshStandardMaterial({ map: poster, roughness: 0.7 })); pm.position.z = 0.009; pf.add(pm); scene.add(pf);
  const tab = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.008, 0.17), new THREE.MeshStandardMaterial({ color: 0x18181c, roughness: 0.35 })); tab.position.set(0.0, DESK.top + 0.004, -1.86); tab.rotation.y = 0.15; tab.castShadow = tab.receiveShadow = true; scene.add(tab);
  const act = new THREE.Mesh(new THREE.PlaneGeometry(0.19, 0.12), new THREE.MeshStandardMaterial({ color: 0x24242a, roughness: 0.6 })); act.rotation.x = -Math.PI / 2; act.rotation.z = 0.15; act.position.set(0.01, DESK.top + 0.0085, -1.86); scene.add(act);
  const pen = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.003, 0.14, 8), new THREE.MeshStandardMaterial({ color: 0x2a2a30, roughness: 0.3 })); pen.rotation.z = Math.PI / 2; pen.rotation.y = 0.6; pen.position.set(0.04, DESK.top + 0.014, -1.82); scene.add(pen);
  const vr = new THREE.Group(); const vrm = new THREE.MeshStandardMaterial({ color: 0xe8e6e2, roughness: 0.4 }), vrd = new THREE.MeshStandardMaterial({ color: 0x1a1a1e, roughness: 0.3 });
  const vb = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.1, 0.09), vrm); vb.position.y = 0.05; vr.add(vb);
  const vf = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.085, 0.005), vrd); vf.position.set(0, 0.05, 0.047); vr.add(vf);
  const strap = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.012, 6, 24, Math.PI), vrd); strap.rotation.x = -Math.PI / 2; strap.position.set(0, 0.012, -0.045); vr.add(strap);
  vr.position.set(2.62, 1.876, -2.26); vr.rotation.y = -0.5; shade(vr); scene.add(vr);
  const jar = new THREE.Group(); const jx = WIN.x - 0.38, jy = WIN.y - WIN.h / 2, jz = R.z0 + 0.14;
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.15, 24, 1, true), new THREE.MeshStandardMaterial({ color: 0xcfe0e8, transparent: true, opacity: 0.18, roughness: 0.05, side: THREE.DoubleSide, depthWrite: false })); glass.position.y = 0.075; jar.add(glass); noGTAO.push(glass);
  const cork = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.042, 0.03, 16), new THREE.MeshStandardMaterial({ color: 0x9a7a52, roughness: 0.9 })); cork.position.y = 0.165; jar.add(cork);
  const moss = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.052, 0.03, 20), new THREE.MeshStandardMaterial({ color: 0x2f4a26, roughness: 1 })); moss.position.y = 0.015; jar.add(moss);
  [[0.0, 0.0, 0.06, 0x3fe0d0], [0.022, 0.012, 0.045, 0x6af0c0], [-0.02, -0.015, 0.038, 0x40c8ff], [0.01, -0.025, 0.03, 0x7fffd0]].forEach(([x, z, h2, c]) => {
    const st = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.004, h2, 6), new THREE.MeshStandardMaterial({ color: 0xd8e8e0, emissive: c, emissiveIntensity: 0.6 })); st.position.set(x, 0.03 + h2 / 2, z); jar.add(st);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.012, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x0a1a18, emissive: c, emissiveIntensity: 3 })); cap.position.set(x, 0.03 + h2, z); jar.add(cap); shroomMats.push(cap.material);
  });
  jar.position.set(jx, jy, jz); scene.add(jar);
  L.jar = new THREE.PointLight(0x50e0d0, 0.25, 0, 2); L.jar.position.set(jx, jy + 0.12, jz + 0.12); scene.add(L.jar);

  const om2 = c => { const m = new THREE.MeshStandardMaterial({ color: c, roughness: 0.95, fog: false }); outsideMats.push(m); return m; };
  const fw = om2(0x2a1e16), sn = om2(0xc8d2e2);
  for (let i = 0; i < 9; i++) { const x = -5.6 + i * 0.95, z = -6.2 + Math.sin(i * 1.3) * 0.15, hgt = 1.0 + Math.sin(i * 2.1) * 0.08;
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.09, hgt, 0.09), fw); post.position.set(x, -0.35 + hgt / 2, z); post.rotation.z = Math.sin(i * 3.7) * 0.05; post.castShadow = true; scene.add(post);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), sn); cap.scale.set(1, 0.6, 1); cap.position.set(x, -0.35 + hgt, z); scene.add(cap);
    if (i < 8) for (const ry of [0.35, 0.7]) { const rail = new THREE.Mesh(new THREE.BoxGeometry(0.97, 0.05, 0.04), fw); rail.position.set(x + 0.475, -0.35 + ry, z + 0.04); scene.add(rail); const rs = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.03, 0.06), sn); rs.position.set(x + 0.475, -0.35 + ry + 0.04, z + 0.04); scene.add(rs); } }
  const stump = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.42, 14), om2(0x3a2a1c)); stump.position.set(-2.4, -0.35 + 0.21, -4.2); stump.castShadow = true; scene.add(stump);
  const stTop = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.06, 14), sn); stTop.position.set(-2.4, 0.1, -4.2); scene.add(stTop);
  const axeH = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.022, 0.6, 8), om2(0x6a4a2a)); axeH.position.set(-2.32, 0.32, -4.2); axeH.rotation.z = -0.5; scene.add(axeH);
  const axeB = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.02), om2(0x4a4c52)); axeB.position.set(-2.24, 0.14, -4.2); axeB.rotation.z = -0.5; scene.add(axeB);
  auroraMat = new THREE.ShaderMaterial({ uniforms: { uTime: { value: 0 }, uInt: { value: 1 } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, side: THREE.DoubleSide, vertexShader: flameVS,
    fragmentShader: `uniform float uTime,uInt;varying vec2 vUv;${noiseGLSL}
    void main(){vec2 uv=vUv;float t=uTime*0.03;float band=0.;
      for(int i=0;i<3;i++){float fi=float(i);float y=0.45+0.18*sin(uv.x*3.0+t*6.0+fi*2.1)+0.1*fbm(vec2(uv.x*2.0+t+fi,fi));
        float d=uv.y-y;band+=smoothstep(0.22,0.0,abs(d))*(0.6+0.4*fbm(vec2(uv.x*14.0-t*8.0,fi)))*smoothstep(-0.25,0.15,d);}
      float fade=smoothstep(0.0,0.2,uv.x)*smoothstep(1.0,0.8,uv.x)*smoothstep(0.0,0.3,uv.y);
      vec3 c=mix(vec3(0.1,0.9,0.5),vec3(0.3,0.5,1.0),uv.y);gl_FragColor=vec4(c*band*fade*0.22*uInt,1.);}` });
  const aur = new THREE.Mesh(new THREE.PlaneGeometry(70, 16), auroraMat); aur.position.set(-8, 11, -40.5); scene.add(aur); noGTAO.push(aur);
}
function buildPlush() {
  const st = canvasTex(256, 128, (g, w, h) => { g.fillStyle = '#6f8396'; g.fillRect(0, 0, w, h); g.fillStyle = 'rgba(40,52,64,.28)'; for (let x = 20; x < w; x += 34) { g.beginPath(); g.moveTo(x, 0); g.quadraticCurveTo(x + 8, h * 0.3, x - 2, h * 0.55); g.lineTo(x + 10, h * 0.55); g.quadraticCurveTo(x + 18, h * 0.3, x + 12, 0); g.fill(); } });
  const skin = new THREE.MeshStandardMaterial({ map: st, roughness: 0.9 }), belly = new THREE.MeshStandardMaterial({ color: 0xe6e2da, roughness: 0.9 }), eye = new THREE.MeshStandardMaterial({ color: 0x0c0c0e, roughness: 0.3 });
  const sh = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.2, 8, 20), skin); body.rotation.z = Math.PI / 2; body.scale.set(1, 1, 0.85); sh.add(body);
  const bel = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.17, 6, 16), belly); bel.rotation.z = Math.PI / 2; bel.position.y = -0.03; bel.scale.set(1, 1, 0.75); sh.add(bel);
  const dors = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.09, 10), skin); dors.position.set(0.0, 0.1, 0); dors.rotation.z = -0.3; dors.scale.set(1, 1, 0.35); sh.add(dors);
  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.12, 10), skin); tail.position.set(-0.2, 0.03, 0); tail.rotation.z = 0.9; tail.scale.set(1, 1, 0.3); sh.add(tail);
  const tail2 = tail.clone(); tail2.position.set(-0.19, -0.04, 0); tail2.rotation.z = 2.3; tail2.scale.set(0.8, 0.8, 0.3); sh.add(tail2);
  for (const s of [-1, 1]) { const fin = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.09, 8), skin); fin.position.set(0.05, -0.06, s * 0.06); fin.rotation.set(s * 1.1, 0, 0.6); fin.scale.set(1, 1, 0.35); sh.add(fin);
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.011, 10, 8), eye); e.position.set(0.15, 0.02, s * 0.05); sh.add(e); }
  sh.position.set(-0.98, 0.2, -0.13); sh.rotation.set(0, 0.6, 0.12); shade(sh); scene.add(sh);
}

const BOOK = { pos: new THREE.Vector3(-0.1, 0, 0.36), rot: 0.17, W: 0.2, H: 0.25, spread: 0, flip: null, pages: [], tex: [], left: null, right: null, sheet: null, front: null, back: null, grp: null, light: null };
function bookPages() {
  const imgs = (CFG.sketchbook || []).filter(Boolean), pages = [{ kind: 'name' }];
  pages.push({ kind: 'fox' });
  if (imgs.length) imgs.forEach(src => pages.push({ src })); else pages.push({ kind: 'text' });
  pages.push({ kind: 'blank' }); if (pages.length % 2) pages.push({ kind: 'blank' }); return pages;
}
function pageTex(i) {
  if (BOOK.tex[i]) return BOOK.tex[i]; const pg = BOOK.pages[i] || { kind: 'blank' }; let t;
  if (pg.src) {
    t = paperSketch(70 + i, 'blank', 2); const img = new Image(); img.crossOrigin = 'anonymous';
    img.onload = () => { const c = t.image, g = c.getContext('2d'); g.setTransform(1, 0, 0, 1, 0, 0); const m = 28, bw = c.width - m * 2, bh = c.height - m * 2, k = Math.min(bw / img.width, bh / img.height), dw = img.width * k, dh = img.height * k;
      g.drawImage(img, (c.width - dw) / 2, (c.height - dh) / 2, dw, dh); t.needsUpdate = true; };
    img.src = pg.src;
  } else t = paperSketch(70 + i, pg.kind, 2);
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; BOOK.tex[i] = t; return t;
}
function buildSketchbook() {
  BOOK.pages = bookPages(); const { W, H } = BOOK;
  const grp = new THREE.Group(); grp.position.copy(BOOK.pos); grp.rotation.y = BOOK.rot; BOOK.grp = grp;
  const cover = new THREE.Mesh(new THREE.BoxGeometry(W * 2 + 0.014, 0.004, H + 0.014), new THREE.MeshStandardMaterial({ color: 0x24303c, roughness: 0.8 })); cover.position.y = 0.002; grp.add(cover);
  const paperM = new THREE.MeshStandardMaterial({ color: 0xe6dcc6, roughness: 0.95 });
  for (const sx of [-1, 1]) { const st = new THREE.Mesh(new THREE.BoxGeometry(W - 0.004, 0.01, H - 0.004), paperM); st.position.set(sx * (W / 2 + 0.001), 0.009, 0); grp.add(st); }
  const curve = gg => { const p = gg.attributes.position; for (let i = 0; i < p.count; i++) { const x = Math.abs(p.getX(i)) / W; p.setY(i, 0.007 * (1 - Math.pow(1 - x, 3))); } gg.computeVertexNormals(); return gg; };
  const rg = new THREE.PlaneGeometry(W, H, 16, 1); rg.translate(W / 2, 0, 0); rg.rotateX(-Math.PI / 2); curve(rg);
  const flipU = gg => { const uv = gg.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setX(i, 1 - uv.getX(i)); return gg; };
  const lg = rg.clone(); lg.scale(-1, 1, 1); flipU(lg); lg.computeVertexNormals();
  BOOK.left = new THREE.Mesh(lg, new THREE.MeshStandardMaterial({ map: pageTex(0), roughness: 0.92, side: THREE.DoubleSide })); BOOK.left.position.y = 0.0145; BOOK.left.userData.part = 'left';
  BOOK.right = new THREE.Mesh(rg, new THREE.MeshStandardMaterial({ map: pageTex(1), roughness: 0.92, side: THREE.DoubleSide })); BOOK.right.position.y = 0.0145; BOOK.right.userData.part = 'right';
  grp.add(BOOK.left, BOOK.right);
  const pen = new THREE.Group(); const pb = new THREE.Mesh(new THREE.CylinderGeometry(0.0035, 0.0035, 0.15, 6), new THREE.MeshStandardMaterial({ color: 0xd8a830, roughness: 0.6 })); pen.add(pb);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.0035, 0.014, 6), new THREE.MeshStandardMaterial({ color: 0xd8b890, roughness: 0.8 })); tip.position.y = 0.082; pen.add(tip);
  pen.rotation.set(0, 0, Math.PI / 2); pen.rotation.y = 0.5; pen.position.set(W + 0.06, 0.0035, 0.04); grp.add(pen);
  shade(grp); BOOK.left.castShadow = BOOK.right.castShadow = false; scene.add(grp); tag(grp, 'book');
  const sh = new THREE.Group(); sh.position.y = 0.016; sh.visible = false;
  BOOK.front = new THREE.Mesh(rg, new THREE.MeshStandardMaterial({ roughness: 0.92, side: THREE.FrontSide }));
  BOOK.back = new THREE.Mesh(flipU(rg.clone()), new THREE.MeshStandardMaterial({ roughness: 0.92, side: THREE.BackSide }));
  sh.add(BOOK.front, BOOK.back); grp.add(sh); BOOK.sheet = sh;
  if (document.fonts) document.fonts.load('44px Caveat').then(() => { BOOK.pages.forEach((pg, i) => { if (pg.kind === 'name' || pg.kind === 'text') BOOK.tex[i] = null; }); if (!BOOK.flip) setSpread(); }).catch(() => {});
  BOOK.light = new THREE.PointLight(0xffc890, 0, 0, 2); BOOK.light.position.copy(BOOK.pos).add(V(0.05, 0.45, 0.25)); scene.add(BOOK.light);
}
function setSpread() { BOOK.left.material.map = pageTex(BOOK.spread * 2); BOOK.right.material.map = pageTex(BOOK.spread * 2 + 1); BOOK.left.material.needsUpdate = BOOK.right.material.needsUpdate = true; }
function flipBook(dir) {
  if (BOOK.flip) return; const s = BOOK.spread, n = BOOK.pages.length / 2;
  if (dir > 0 && s >= n - 1) return blip(180, 0.06, 'sine', 0.03); if (dir < 0 && s <= 0) return blip(180, 0.06, 'sine', 0.03);
  const fm = BOOK.front.material, bm = BOOK.back.material;
  if (dir > 0) { fm.map = pageTex(s * 2 + 1); bm.map = pageTex(s * 2 + 2); BOOK.right.material.map = pageTex(s * 2 + 3); }
  else { fm.map = pageTex(s * 2 - 1); bm.map = pageTex(s * 2); BOOK.left.material.map = pageTex(s * 2 - 2); }
  fm.needsUpdate = bm.needsUpdate = BOOK.right.material.needsUpdate = BOOK.left.material.needsUpdate = true;
  BOOK.flip = { dir, t: 0 }; BOOK.sheet.visible = true; BOOK.sheet.rotation.z = dir > 0 ? 0 : Math.PI; flipSound();
}
function bookStep(dt) {
  const F = BOOK.flip; if (!F) return; F.t = Math.min(1, F.t + dt / 0.6); const e = F.t < 0.5 ? 2 * F.t * F.t : 1 - Math.pow(-2 * F.t + 2, 2) / 2;
  BOOK.sheet.rotation.z = F.dir > 0 ? e * Math.PI : (1 - e) * Math.PI; BOOK.sheet.position.y = 0.016 + Math.sin(e * Math.PI) * 0.01;
  if (F.t >= 1) { BOOK.spread += F.dir; setSpread(); BOOK.sheet.visible = false; BOOK.flip = null; }
}

let slug, slugBody, slugBaseY = 0;
function buildSlugcat() {
  const fur = new THREE.MeshStandardMaterial({ color: 0xece6dc, roughness: 0.75 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x0c0b0e, roughness: 0.35 });
  slug = new THREE.Group();
  slugBody = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.13, 8, 20), fur); slugBody.rotation.z = Math.PI / 2; slugBody.position.set(0, 0.075, 0); slug.add(slugBody);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.085, 28, 20), fur); head.scale.set(1, 0.95, 1); head.position.set(0.15, 0.095, 0.02); slug.add(head);
  for (const s of [-1, 1]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.014, 14, 10), dark); e.scale.set(0.9, 1.25, 0.6); e.position.set(0.215, 0.11, 0.036 * s + 0.01); slug.add(e);
    const hl = new THREE.Mesh(new THREE.SphereGeometry(0.0035, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff })); hl.position.set(0.226, 0.118, 0.036 * s + 0.016); slug.add(hl); }
  const tail = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(-0.1, 0.05, 0), new THREE.Vector3(-0.17, 0.03, 0.06), new THREE.Vector3(-0.12, 0.02, 0.13), new THREE.Vector3(-0.02, 0.02, 0.14)]), 20, 0.022, 10), fur); slug.add(tail);
  for (const s of [-1, 1]) { const paw = new THREE.Mesh(new THREE.SphereGeometry(0.028, 14, 10), fur); paw.scale.set(1.5, 0.6, 0.9); paw.position.set(0.12, 0.018, 0.06 * s); slug.add(paw); }
  slug.position.set(-1.42, 0, 0.72); slug.rotation.y = 2.4; slug.scale.setScalar(1.15);
  shade(slug); scene.add(slug); tag(slug, 'slug');
}

let fox, foxMixer, foxBaseY = 0, plantObj, cup, candle, plush, plushBase = 1, plushBaseY = 0;
const steam = { geo: null, v: null };
function placeModel(gltf, { scale = 1, pos = [0, 0, 0], rotY = 0, ground = true, cast = true } = {}) {
  if (!gltf) return null; const o = gltf.scene; o.scale.setScalar(scale); o.rotation.y = rotY; o.updateMatrixWorld(true);
  const bb = new THREE.Box3().setFromObject(o); o.position.set(pos[0], pos[1] - (ground ? bb.min.y : 0), pos[2]);
  o.traverse(c => { if (c.isLight) c.visible = false; if (c.isMesh) { c.castShadow = cast; c.receiveShadow = true; } });
  scene.add(o); return o;
}
async function loadModels() {
  const [foxG, boomG, plantG, cupG, lampG, candleG, chairG, lanternG, sharkG] = await Promise.all(['Fox', 'BoomBox', 'DiffuseTransmissionPlant', 'DiffuseTransmissionTeacup', 'AnisotropyBarnLamp', 'GlassHurricaneCandleHolder', 'SheenChair', 'Lantern', 'SharkPlush'].map(loadGLB));
  fox = placeModel(foxG, { scale: 0.0042, pos: [-1.82, 0.006, 0.25], rotY: -2.25 });
  if (fox) { foxBaseY = fox.position.y; foxMixer = new THREE.AnimationMixer(fox); const clip = foxG.animations.find(a => a.name === 'Survey') || foxG.animations[0]; if (clip) { const a = foxMixer.clipAction(clip); a.timeScale = 0.55; a.play(); } tag(fox, 'fox'); fox.traverse(c => { if (c.isMesh) c.frustumCulled = false; }); }
  boombox = placeModel(boomG, { scale: 19, pos: [DESK.x - DESK.w / 2 + 0.3, DESK.top, -2.27], rotY: 0.25 });
  if (boombox) { boombox.traverse(c => { if (c.isMesh && c.material.emissiveMap) { boomPanelMats.push(c.material); c.material.emissiveIntensity = 0.15; } }); tag(boombox, 'boombox'); }
  plantObj = placeModel(plantG, { scale: 0.95, pos: [-0.62, 0, -2.2], rotY: 0.6 });
  cup = placeModel(cupG, { scale: 0.75, pos: [CUP.x, DESK.top, CUP.z], rotY: 1.2 });
  placeModel(lampG, { scale: 1.5, pos: [1.32, 1.86, R.z0 + 0.14], rotY: 0, ground: false });
  candle = placeModel(candleG, { scale: 0.7, pos: [-2.42, 1.29, 0.95], rotY: 0 });
  const chairO = placeModel(chairG, { scale: 1.12, pos: [2.05, 0, -0.55], rotY: -1.15 }); if (chairO) chairO.userData.isArmchair = true;
  if (sharkG) {
    plush = placeModel(sharkG, { scale: 0.1, pos: [-0.66, 0.105, 0.17], rotY: 0.55 });
    if (plush) { plush.traverse(c => { if (c.isMesh) { c.material.roughness = 0.95; c.material.metalness = 0; c.material.specularIntensity = 0.2; } }); plushBase = plush.scale.x; plushBaseY = plush.position.y; tag(plush, 'plush'); }
  }
  const lan = placeModel(lanternG, { scale: 0.11, pos: [-8.5, -0.35, -13], rotY: 0.6, cast: false });
  if (lan) { lan.traverse(c => { if (c.isMesh) { c.material = c.material.clone(); c.material.fog = false; } }); const bb = new THREE.Box3().setFromObject(lan);
    streetLight = new THREE.PointLight(0xffb36b, 14, 0, 1.6); const head = new THREE.Vector3(); bb.getCenter(head); streetLight.position.set(head.x + 0.25, bb.max.y - 0.55, head.z); scene.add(streetLight);
    const sh = halo(0xffb36b, 2.2, streetLight.position, 0.55); sh.material.fog = false; }
  const N = 22; const p = new Float32Array(N * 3); steam.v = new Float32Array(N);
  for (let i = 0; i < N; i++) { p[i * 3] = CUP.x + rnd(-0.02, 0.02); p[i * 3 + 1] = DESK.top + rnd(0.07, 0.3); p[i * 3 + 2] = CUP.z + rnd(-0.02, 0.02); steam.v[i] = rnd(0.04, 0.09); }
  steam.geo = new THREE.BufferGeometry(); steam.geo.setAttribute('position', new THREE.BufferAttribute(p, 3));
  const sp = new THREE.Points(steam.geo, new THREE.PointsMaterial({ map: glowTex, color: 0x9a9890, size: 0.05, transparent: true, opacity: 0.12, depthWrite: false })); scene.add(sp); noGTAO.push(sp); steam.points = sp;
}

let candleFlame, sconceBulb;
function buildSmallLights() {
  candleFlame = new THREE.Mesh(new THREE.PlaneGeometry(0.035, 0.07), flameMaterial(3.3, 1.2)); candleFlame.position.set(-2.42, 1.42, 0.95); scene.add(candleFlame); noGTAO.push(candleFlame);
  sconceBulb = new THREE.Mesh(new THREE.SphereGeometry(0.03, 16, 12), new THREE.MeshStandardMaterial({ color: 0x331a00, emissive: 0xffc27a, emissiveIntensity: 6 })); sconceBulb.position.set(1.32, 1.55, -2.32); scene.add(sconceBulb);
}

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const AB = { fades: [], frostMats: [], deadMats: [], lastAge: -1 };
function fadeIn(obj, from, to, castWhenSolid = true) {
  obj.traverse(o => { if (o.isMesh || o.isPoints) { const ms = Array.isArray(o.material) ? o.material : [o.material]; ms.forEach(m => { m.transparent = true; m.opacity = 0; }); } });
  obj.visible = false; AB.fades.push({ obj, from, to, cast: castWhenSolid }); scene.add(obj); return obj;
}
const RAD = { on: false, band: 'FM', f: { FM: 88.4, SW: 52.0 }, lock: 0, triggered: false, nextBleed: 0, cv: null, ctx: null, tex: null, needle: null };
const BANDS = { FM: [87.5, 108.0], SW: [40.0, 60.0] }, FM_ST = [{ f: 88.4, kind: 'music' }, { f: 95.1, kind: 'dead' }, { f: 103.7, kind: 'ambient' }], SECRET = 47.2;
function drawRadio() {
  if (!RAD.ctx) return; const g = RAD.ctx, w = 256, h = 112, f = RAD.f[RAD.band], [a, b] = BANDS[RAD.band];
  g.fillStyle = RAD.on ? '#2a1606' : '#120a04'; g.fillRect(0, 0, w, h);
  g.strokeStyle = RAD.on ? '#d08a3a' : '#3a2410'; g.lineWidth = 2; for (let i = 0; i <= 20; i++) { const x = 14 + i / 20 * (w - 28); g.beginPath(); g.moveTo(x, 70); g.lineTo(x, i % 5 ? 82 : 90); g.stroke(); }
  if (RAD.on) { g.fillStyle = '#ffb860'; g.font = '700 40px "JetBrains Mono", monospace'; g.textAlign = 'center'; g.fillText(RAD.band + ' ' + f.toFixed(1), w / 2, 50); }
  RAD.tex.needsUpdate = true; RAD.needle.position.x = 0.04 + ((f - a) / (b - a)) * 0.08;
}
function tune(delta) { const [a, b] = BANDS[RAD.band]; RAD.f[RAD.band] = Math.round(THREE.MathUtils.clamp(RAD.f[RAD.band] + delta, a, b) * 10) / 10; RAD.lock = 0; drawRadio(); }
let flashlight, radio, radioDial, ashMound, flickerBulb, towerLight, snowIn, snowInGeo, snowInV, sheetChair;
const notes = [];
function noteTexture(text, seed) {
  return canvasTex(400, 500, (g, w, h) => {
    const r = seeded(seed);
    g.fillStyle = '#e9e0c9'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(110,90,60,${r() * 0.06})`; g.fillRect(r() * w, r() * h, 2, 2); }
    g.strokeStyle = 'rgba(120,140,170,.35)'; g.lineWidth = 1; for (let y = 70; y < h; y += 34) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); }
    g.strokeStyle = 'rgba(120,70,40,.18)'; g.lineWidth = 9; g.beginPath(); g.arc(w * (0.6 + r() * 0.3), h * (0.7 + r() * 0.2), 44, 0.4, 5.4); g.stroke();
    g.fillStyle = '#2a2420'; g.font = '34px "Caveat", "Comic Sans MS", cursive'; g.textBaseline = 'alphabetic';
    let y = 60; const lines = [];
    text.split('\n').forEach(par => { let line = ''; par.split(' ').forEach(wd => { if (g.measureText(line + wd).width > w - 50) { lines.push(line); line = ''; } line += wd + ' '; }); lines.push(line); });
    lines.forEach((l, i) => { g.save(); g.translate(26, y); g.rotate((r() - 0.5) * 0.025); g.fillText(l.trim(), 0, 0); g.restore(); y += 34; });
  });
}
function buildAbandoned() {
  const bm = planks({ rep: [0.6, 0.12], color: 0x5a4636, rough: 0.95 });
  const boards = new THREE.Group();
  [[0.25, 0.14], [-0.18, -0.09], [0.0, -0.33]].forEach(([dy, rz], i) => { const b = new THREE.Mesh(new THREE.BoxGeometry(WIN.w + 0.32, 0.13, 0.03), bm.clone()); b.position.set(WIN.x + (i - 1) * 0.04, WIN.y + dy, R.z0 + 0.2); b.rotation.z = rz; b.castShadow = true; boards.add(b);
    for (const s of [-1, 1]) { const n = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.01, 8), ironMat.clone()); n.rotation.x = Math.PI / 2; n.position.set(WIN.x + (i - 1) * 0.04 + s * (WIN.w / 2 + 0.08) * Math.cos(rz), WIN.y + dy + s * (WIN.w / 2 + 0.08) * Math.sin(rz), R.z0 + 0.218); boards.add(n); } });
  fadeIn(boards, 0.35, 0.65);
  const crack = canvasTex(512, 410, (g, w, h) => {
    const r = seeded(77); const cx = w * 0.28, cy = h * 0.7;
    g.fillStyle = 'rgba(210,225,240,.22)'; g.fillRect(0, 0, w, h);
    g.globalCompositeOperation = 'destination-out'; g.beginPath(); g.moveTo(cx - 40, cy - 20); for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2; g.lineTo(cx + Math.cos(a) * (30 + r() * 60), cy + Math.sin(a) * (25 + r() * 50)); } g.closePath(); g.fill(); g.globalCompositeOperation = 'source-over';
    g.strokeStyle = 'rgba(235,245,255,.75)'; g.lineWidth = 1.4;
    for (let k = 0; k < 14; k++) { let x = cx, y = cy, a = r() * Math.PI * 2; g.beginPath(); g.moveTo(x, y); for (let s = 0; s < 8; s++) { a += (r() - 0.5) * 0.7; const l = 18 + r() * 40; x += Math.cos(a) * l; y += Math.sin(a) * l; g.lineTo(x, y); } g.stroke(); }
    for (const [fx, fy] of [[0, 0], [w, 0], [0, h], [w, h]]) { const gr = g.createRadialGradient(fx, fy, 0, fx, fy, w * 0.55); gr.addColorStop(0, 'rgba(240,248,255,.75)'); gr.addColorStop(1, 'rgba(240,248,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, w, h); }
  });
  crack.wrapS = crack.wrapT = THREE.ClampToEdgeWrapping;
  const crk = new THREE.Mesh(new THREE.PlaneGeometry(WIN.w, WIN.h), new THREE.MeshBasicMaterial({ map: crack, color: 0x56607a, transparent: true, depthWrite: false, fog: false }));
  crk.material.userData.noDepth = true; crk.position.set(WIN.x, WIN.y, R.z0 - 0.04); noGTAO.push(crk); fadeIn(crk, 0.3, 0.6, false);
  const sm = new THREE.MeshStandardMaterial({ color: 0xe6edf6, roughness: 0.92 }); sm.userData.noFrost = true;
  const dg = new THREE.PlaneGeometry(2, 2, 48, 48); dg.rotateX(-Math.PI / 2); { const p = dg.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i); const ang = Math.atan2(z, x), rad = 0.62 + Math.sin(ang * 3 + 1) * 0.16 + Math.sin(ang * 7) * 0.07, d = Math.sqrt(x * x + z * z) / rad;
      const hgt = d < 1 ? Math.pow(1 - d, 1.6) * 0.13 * (1 + Math.sin(x * 9) * 0.15 + Math.cos(z * 11) * 0.12) * (z < 0 ? 1.6 : 1) : -0.02; p.setY(i, hgt); } dg.computeVertexNormals(); }
  const drift = new THREE.Mesh(dg, sm); drift.scale.set(1.0, 1, 1.1); drift.position.set(WIN.x - 0.2, 0.0, R.z0 + 0.5); drift.receiveShadow = true; fadeIn(drift, 0.4, 0.75, false);
  const sillSnow = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, WIN.w * 0.8, 4, 10), sm.clone()); sillSnow.material.userData.noFrost = true; sillSnow.rotation.z = Math.PI / 2; sillSnow.scale.set(1, 1, 1.6); sillSnow.position.set(WIN.x - 0.1, WIN.y - WIN.h / 2 + 0.02, R.z0 + 0.12); fadeIn(sillSnow, 0.4, 0.75, false);
  const N = 140; const p = new Float32Array(N * 3); snowInV = new Float32Array(N);
  for (let i = 0; i < N; i++) { p[i * 3] = WIN.x - 0.35 + rnd(-0.25, 0.4); p[i * 3 + 1] = rnd(0, 1.5); p[i * 3 + 2] = R.z0 + rnd(0.1, 1.4); snowInV[i] = rnd(0.2, 0.45); }
  snowInGeo = new THREE.BufferGeometry(); snowInGeo.setAttribute('position', new THREE.BufferAttribute(p, 3));
  snowIn = new THREE.Points(snowInGeo, new THREE.PointsMaterial({ map: glowTex, color: 0xcfd8e8, size: 0.022, depthWrite: false })); noGTAO.push(snowIn); fadeIn(snowIn, 0.45, 0.75, false);
  ashMound = new THREE.Mesh(new THREE.SphereGeometry(0.26, 24, 10), new THREE.MeshStandardMaterial({ color: 0x4a4744, roughness: 1 })); ashMound.scale.set(1, 0.18, 1.2); ashMound.position.set(FIRE.x, 0.05, FIRE.z); fadeIn(ashMound, 0.35, 0.6, false);
  const sheetTex = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#8f897e'; g.fillRect(0, 0, w, h); const r = seeded(12); for (let i = 0; i < 1600; i++) { g.fillStyle = `rgba(80,70,55,${r() * 0.08})`; g.fillRect(r() * w, r() * h, 3, 3); } }, { rep: [2, 2] });
  const sheetMat = new THREE.MeshStandardMaterial({ map: sheetTex, roughness: 1, side: THREE.DoubleSide });
  const sg = new THREE.PlaneGeometry(1.06, 1.7, 30, 20); { const pp = sg.attributes.position; for (let i = 0; i < pp.count; i++) { const x = pp.getX(i), y = pp.getY(i), t = (0.85 - y) / 1.7; pp.setZ(i, Math.sin(x * 26 + y * 3) * 0.03 * t + Math.sin(x * 9) * 0.02); } sg.computeVertexNormals(); }
  const sheetShelf = new THREE.Mesh(sg, sheetMat); sheetShelf.position.set(2.38, 1.92 - 0.85, -2.12); sheetShelf.castShadow = true; fadeIn(sheetShelf, 0.45, 0.8);
  const topSheet = new THREE.Mesh(new THREE.PlaneGeometry(1.06, 0.34, 10, 4), sheetMat.clone()); topSheet.rotation.x = -Math.PI / 2; topSheet.position.set(2.38, 1.873, -2.3); fadeIn(topSheet, 0.45, 0.8);
  flickerBulb = new THREE.Mesh(new THREE.SphereGeometry(0.016, 10, 8), new THREE.MeshStandardMaterial({ color: 0x331a00, emissive: 0xffb36a, emissiveIntensity: 0 })); flickerBulb.position.set(-0.55, 2.43, R.z0 + 0.2); scene.add(flickerBulb);
  L.flicker = new THREE.PointLight(0xffb36a, 0, 0, 2); L.flicker.position.copy(flickerBulb.position); L.flicker.position.z += 0.1; scene.add(L.flicker);
  const tm = new THREE.MeshStandardMaterial({ color: 0x0c0f16, roughness: 1, fog: false }); outsideMats.push(tm);
  const tower = new THREE.Group(), TH = 7.5;
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.06, TH, 5), tm); leg.position.set(sx * 0.32, TH / 2, sz * 0.32); leg.rotation.set(-sz * 0.04, 0, sx * 0.04); tower.add(leg); }
  for (let y = 0.6; y < TH; y += 0.75) { const k = 1 - y / TH * 0.6; const bx = new THREE.Mesh(new THREE.BoxGeometry(0.75 * k, 0.03, 0.03), tm); bx.position.y = y; bx.rotation.z = 0.6; tower.add(bx); const bz = bx.clone(); bz.rotation.set(0, Math.PI / 2, -0.6); tower.add(bz); }
  towerLight = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.08, 0.05).multiplyScalar(3), fog: false })); towerLight.position.y = TH + 0.1; tower.add(towerLight);
  tower.position.set(-15.5, -0.35, -31); scene.add(tower);
  flashlight = new THREE.SpotLight(0xfff0d8, 0, 0, 0.27, 0.55, 2); scene.add(flashlight, flashlight.target);
  if (!LOW) { flashlight.castShadow = true; flashlight.shadow.mapSize.set(512, 512); flashlight.shadow.bias = -0.002; flashlight.shadow.camera.near = 0.1; }
  const rg = new THREE.Group(); const case_ = new THREE.MeshStandardMaterial({ map: logTex, color: 0x9a6a40, roughness: 0.45 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.17, 0.13), case_); body.position.y = 0.085; rg.add(body);
  const grill = canvasTex(128, 96, (g, w, h) => { g.fillStyle = '#c8b894'; g.fillRect(0, 0, w, h); g.fillStyle = '#3a2c1c'; for (let y = 6; y < h; y += 8) for (let x = 6 + (y / 8 % 2) * 4; x < w; x += 8) { g.beginPath(); g.arc(x, y, 2.2, 0, 7); g.fill(); } });
  const gr = new THREE.Mesh(new THREE.PlaneGeometry(0.13, 0.11), new THREE.MeshStandardMaterial({ map: grill, roughness: 0.9 })); gr.position.set(-0.06, 0.085, 0.066); rg.add(gr);
  RAD.cv = document.createElement('canvas'); RAD.cv.width = 256; RAD.cv.height = 112; RAD.ctx = RAD.cv.getContext('2d'); RAD.tex = new THREE.CanvasTexture(RAD.cv); RAD.tex.colorSpace = THREE.SRGBColorSpace;
  radioDial = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.045), new THREE.MeshStandardMaterial({ color: 0x1a1006, map: RAD.tex, emissive: 0xffffff, emissiveMap: RAD.tex, emissiveIntensity: 0 })); radioDial.position.set(0.08, 0.11, 0.066); rg.add(radioDial);
  RAD.needle = new THREE.Mesh(new THREE.PlaneGeometry(0.0025, 0.036), new THREE.MeshBasicMaterial({ color: 0xc02020 })); RAD.needle.position.set(0.04, 0.11, 0.067); rg.add(RAD.needle);
  const knobs = [];
  for (const kx of [0.05, 0.11]) { const kn = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.018, 18), new THREE.MeshStandardMaterial({ color: 0xd8c8a4, roughness: 0.35 })); kn.rotation.x = Math.PI / 2; kn.position.set(kx, 0.045, 0.07); rg.add(kn); knobs.push(kn);
    const hit = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 6), new THREE.MeshBasicMaterial({ visible: false })); hit.position.copy(kn.position); hit.position.z += 0.01; rg.add(hit); knobs.push(hit); }
  const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.32, 5), ironMat); ant.position.set(0.11, 0.3, -0.03); ant.rotation.z = -0.5; rg.add(ant);
  rg.position.set(2.18, 1.876, -2.3); rg.rotation.y = -0.2; shade(rg); scene.add(rg); tag(rg, 'radio'); radio = rg;
  rg.traverse(o => { if (o.isMesh) o.userData.part = 'power'; }); knobs[0].userData.part = knobs[1].userData.part = 'band'; knobs[2].userData.part = knobs[3].userData.part = 'station';
  drawRadio();
  L.radioFill = new THREE.PointLight(0xffd0a0, 0, 0, 2); L.radioFill.position.set(2.05, 2.05, -1.95); scene.add(L.radioFill);
}
function buildChairSheet() {
  const chair = scene.children.find(o => o.userData.isArmchair); if (!chair) return;
  const bb = new THREE.Box3().setFromObject(chair), c = bb.getCenter(new THREE.Vector3()), sz = bb.getSize(new THREE.Vector3());
  const g = new THREE.SphereGeometry(1, 40, 24), p = g.attributes.position;
  for (let i = 0; i < p.count; i++) { let x = p.getX(i), y = p.getY(i), z = p.getZ(i); const len = Math.hypot(x, z); const box = len < 1e-4 ? 1 : Math.max(0.7, Math.pow(Math.max(Math.abs(x), Math.abs(z)) / len, 0.9));
    x /= box; z /= box; if (y < -0.2) { y = -1; x *= 1.04; z *= 1.04; } x += Math.sin(y * 9 + z * 6) * 0.04; z += Math.cos(y * 8 + x * 5) * 0.04; p.setXYZ(i, x, y, z); }
  g.computeVertexNormals();
  const sheet = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: 0x8f897e, roughness: 1, map: canvasTex(128, 128, (cx, w, h) => { cx.fillStyle = '#fff'; cx.fillRect(0, 0, w, h); const r = seeded(9); for (let i = 0; i < 900; i++) { cx.fillStyle = `rgba(60,50,40,${r() * 0.1})`; cx.fillRect(r() * w, r() * h, 3, 2); } }) }));
  sheet.scale.set(sz.x * 0.43, sz.y * 0.53, sz.z * 0.43); sheet.position.set(c.x, c.y + sz.y * 0.05, c.z); sheet.rotation.y = chair.rotation.y; sheet.castShadow = sheet.receiveShadow = true;
  fadeIn(sheet, 0.45, 0.8);
}
function buildNotes() {
  const spots = [[-2.7, 1.5, R.z0 + 0.15, 0, 0.06], [0.8, 2.08, R.z0 + 0.15, 0, -0.08], [-2.535, 1.78, 0.62, Math.PI / 2, 0.05], [R.x1 - 0.14, 1.42, -0.85, -Math.PI / 2, -0.04]];
  spots.forEach(([x, y, z, ry, rz], i) => {
    const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.set(0, ry, rz);
    const paper = new THREE.Mesh(new THREE.PlaneGeometry(0.17, 0.212), new THREE.MeshStandardMaterial({ map: noteTexture(T.fragments[i % T.fragments.length], 50 + i), roughness: 0.9, side: THREE.DoubleSide }));
    paper.position.z = 0.002; g.add(paper);
    const pin = new THREE.Mesh(new THREE.SphereGeometry(0.008, 10, 8), new THREE.MeshStandardMaterial({ color: 0xa01818, roughness: 0.3 })); pin.position.set(0, 0.09, 0.01); g.add(pin);
    g.userData.pid = i; g.userData.found = false; fadeIn(g, 0.5, 0.75, false); tag(g, 'note', { pid: i }); paper.userData.note = g; pin.userData.note = g; notes.push(g);
  });
}
function collectFrost() {
  const seen = new Set(), dead = new Set();
  const markDead = o => o && o.traverse(c => { if (c.isMesh) (Array.isArray(c.material) ? c.material : [c.material]).forEach(m => dead.add(m)); });
  markDead(plantObj); scene.traverse(c => { if (c.isMesh && c.material && c.material.color && c.material.color.getHex() === 0x3f6a3a) dead.add(c.material); });
  scene.traverse(c => {
    if (!c.isMesh || c === screenMesh) return; const ms = Array.isArray(c.material) ? c.material : [c.material];
    ms.forEach(m => { if (!m || !m.isMeshStandardMaterial || seen.has(m) || outsideMats.includes(m) || m.userData.noFrost) return; seen.add(m); m.userData.base = m.color.clone();
      (dead.has(m) ? AB.deadMats : AB.frostMats).push(m); });
  });
}
const _gray = new THREE.Color(), _cold = new THREE.Color(0.78, 0.86, 1.0), _deadC = new THREE.Color(0x5a4a32);
function applyAge(a) {
  if (Math.abs(a - AB.lastAge) < 0.002) return; AB.lastAge = a;
  const f = smooth(0.3, 0.85, a);
  AB.frostMats.forEach(m => { const b = m.userData.base; const l = b.r * 0.3 + b.g * 0.59 + b.b * 0.11; _gray.setRGB(l, l, l).multiply(_cold); m.color.copy(b).lerp(_gray, f * 0.7).multiplyScalar(1 - f * 0.12); });
  AB.deadMats.forEach(m => { m.color.copy(m.userData.base).lerp(_deadC, smooth(0.3, 0.8, a)); });
  AB.fades.forEach(F => { const op = smooth(F.from, F.to, a); F.obj.visible = op > 0.005; if (F.last === op) return; F.last = op;
    F.obj.traverse(o => { if (o.isMesh || o.isPoints) { (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => { m.opacity = op; m.depthWrite = !o.isPoints && op > 0.99 && !m.userData.noDepth; }); if (F.cast && o.isMesh) o.castShadow = op > 0.6; } }); });
  if (fox) fox.visible = a < 0.5; if (slug) slug.visible = a < 0.5;
  embers.visible = a < 0.55;
}

let composer, bloom, gtao, finalPass;
function buildPost() {
  const rt = new THREE.WebGLRenderTarget(innerWidth * PR, innerHeight * PR, { type: THREE.HalfFloatType, samples: LOW ? 0 : 4 });
  composer = new EffectComposer(renderer, rt);
  composer.setPixelRatio(PR); composer.setSize(innerWidth, innerHeight);
  composer.addPass(new RenderPass(scene, camera));
  if (!LOW && !QS.has('noao')) {
    gtao = new GTAOPass(scene, camera, innerWidth, innerHeight);
    gtao.updateGtaoMaterial({ radius: 0.32, distanceExponent: 1.4, thickness: 1, scale: 1.25, samples: 12, distanceFallOff: 1, screenSpaceRadius: false });
    gtao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 });
    gtao.blendIntensity = 0.85;
    const orig = gtao.render.bind(gtao);
    gtao.render = (...a) => { noGTAO.forEach(o => o.visible = false); const sv = [halos.hover]; sv.forEach(o => o && (o.userData.v = o.visible, o.visible = false)); orig(...a); noGTAO.forEach(o => o.visible = true); sv.forEach(o => o && (o.visible = o.userData.v)); };
    composer.addPass(gtao);
  }
  bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.55, 0.62, 0.92); composer.addPass(bloom);
  composer.addPass(new OutputPass());
  finalPass = new ShaderPass({
    uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uVoid: { value: 0 }, uVig: { value: 0.6 }, uGrain: { value: 0.035 }, uGlitch: { value: 0 }, uRes: { value: new THREE.Vector2(innerWidth, innerHeight) } },
    vertexShader: flameVS,
    fragmentShader: `uniform sampler2D tDiffuse;uniform float uTime,uVoid,uVig,uGrain,uGlitch;uniform vec2 uRes;varying vec2 vUv;
    float hh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    void main(){vec2 uv=vUv;
      if(uGlitch>0.){float row=floor(uv.y*48.);float r=hh(vec2(row,floor(uTime*18.)));if(r<uGlitch*.22)uv.x+=(hh(vec2(row,uTime))-.5)*.035*uGlitch;}
      vec2 c=uv-.5;float d=dot(c,c);float ca=.004*d;
      vec3 col;col.r=texture2D(tDiffuse,uv+c*ca).r;col.g=texture2D(tDiffuse,uv).g;col.b=texture2D(tDiffuse,uv-c*ca).b;
      float l=dot(col,vec3(.299,.587,.114));
      col+=mix(vec3(.012,.014,.03),vec3(.03,.012,.06),uVoid)*(1.-smoothstep(0.,.3,l));
      col=mix(col,col*vec3(1.05,1.,.93),smoothstep(.25,.85,l)*(1.-uVoid));
      col=mix(col,vec3(l)*vec3(.82,.86,1.18),uVoid*.38);
      col*=1.-uVig*smoothstep(.12,.7,d*2.1);
      col+=(hh(uv*uRes+fract(uTime*7.31))-.5)*uGrain;
      gl_FragColor=vec4(col,1.);}`
  });
  composer.addPass(finalPass);
}

const halos = {};
function buildHalos() { halos.hover = halo(0xffffff, 0.5, new THREE.Vector3(), 0.0); halos.hover.visible = false; }

let S = 1;
const F = (px, w = 400, fam = 'JetBrains Mono') => `${w} ${Math.round(px * S)}px "${fam}", "Courier New", monospace`;
let bizRect = null, scrollY = 0, contentH = SH, linkRects = [], dockRects = [], termLines = [], termInput = '';
let booted = false, bootStart = 0, screenMode = 'off', bootAuthed = false, welcomeStart = 0, screenDirty = true;
const TPAUSE = 4700;
function rr(x, y, w, h, r) { const c = sctx; c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
function drawOff() { const c = sctx; c.fillStyle = '#000'; c.fillRect(0, 0, SW, SH); screenDirty = true; }
function drawBoot(el) {
  const c = sctx, x = 64; c.fillStyle = 'rgba(3,4,8,0.62)'; c.fillRect(0, 0, SW, SH); c.textBaseline = 'top';
  if (el < 320) { const a = 1 - el / 320; c.fillStyle = `rgba(200,212,255,${a * 0.7})`; c.fillRect(0, SH / 2 - (2 + a * 260), SW, 4 + a * 520); return; }
  const t = el - 320, wob = t < 500 ? Math.sin(t * 0.09) * (1 - t / 500) * 6 : 0, X = x + wob, ls = 34 * S;
  c.font = F(64, 700); if (t > 120) { c.fillStyle = '#a98bff'; c.fillText(T.bootTitle, X, 60); }
  c.font = F(20); if (t > 520) { c.fillStyle = '#6a7a8a'; c.fillText(T.bootSub, X, 60 + 76 * S); }
  const lines = T.bootLines.slice(0, 6).map((l, i) => [1000 + i * 400, l.includes('/void') ? '#c06aff' : '#cfe0d0', l]);
  let y = 60 + 120 * S; c.font = F(22);
  for (const a of lines) { if (t > a[0]) { const n = Math.min(a[2].length, Math.floor((t - a[0]) / 11)); c.fillStyle = a[1]; c.fillText(a[2].slice(0, n), X, y); } y += ls; }
  lines.forEach((a, i) => { if (a[2].includes('/void') && t > a[0] + 60 && t < a[0] + 480 && Math.random() < 0.45) { c.fillStyle = '#ff465f'; c.fillText(a[2].replace(/\S+$/, ['D0', 'N0', '\u2593\u2593', '??'][Math.floor(Math.random() * 4)]), X, 60 + 120 * S + i * ls); } });
  if (t > 2900) { const p = Math.min(1, (t - 2900) / 1300); c.fillStyle = '#6a7a8a'; c.fillText('loading environment', X, y + 14); const bw = SW - 2 * x, by = y + 14 + 34 * S; c.strokeStyle = '#34465a'; c.lineWidth = 2; c.strokeRect(x, by, bw, 18 * S); c.fillStyle = '#7fe0a0'; c.fillRect(x + 2, by + 2, (bw - 4) * p, 18 * S - 4); }
  const ly = y + 14 + 70 * S;
  if (t > 4300) { c.fillStyle = '#ffcf9e'; const lp = 'LOGIN: ' + T.login; c.fillText(lp.slice(0, Math.min(lp.length, Math.floor((t - 4300) / 40))), x, ly); }
  if (t >= TPAUSE) {
    if (!bootAuthed) { c.fillStyle = '#ffcf9e'; c.fillText('PASSWORD: ' + (Math.floor(el / 420) % 2 ? '_' : ' '), x, ly + ls); if (Math.floor(el / 520) % 2) { c.fillStyle = '#7fe0a0'; c.font = F(19); c.fillText(IS_TOUCH ? '[ tap to log in ]' : '[ click to log in ]', x, ly + ls * 2.3); } }
    else { c.fillStyle = '#ffcf9e'; c.fillText('PASSWORD: ' + '*'.repeat(Math.min(10, Math.floor((t - TPAUSE) / 70))), x, ly + ls);
      if (t > TPAUSE + 900 && Math.floor(t / 240) % 2) { c.fillStyle = '#7fe0a0'; c.font = F(30, 700); c.fillText('ACCESS GRANTED', x, ly + ls * 2.3); }
      if (t > TPAUSE + 1500) { const a = Math.min(1, (t - TPAUSE - 1500) / 420); c.fillStyle = `rgba(210,225,255,${0.55 * (1 - a)})`; c.fillRect(0, 0, SW, SH); } }
  }
  if (t < TPAUSE && Math.floor(el / 430) % 2 === 0) { c.fillStyle = '#7fe0a0'; c.fillRect(x, y + 10, 12, 20 * S); }
  screenDirty = true;
}
function drawIdle(blink) {
  const c = sctx, x = 64; c.fillStyle = '#05070a'; c.fillRect(0, 0, SW, SH); c.textBaseline = 'top'; c.font = F(24);
  T.idleLines.forEach((l, i) => { c.fillStyle = i === 0 ? '#7fe0a0' : '#5f7a6a'; c.fillText(l, x, 80 + i * 40 * S); });
  if (blink) { c.fillStyle = '#7fe0a0'; c.fillRect(x, 80 + T.idleLines.length * 40 * S + 6, 14, 24 * S); } screenDirty = true;
}
function drawWelcome(el) {
  const c = sctx, x = 64; c.fillStyle = '#080a0e'; c.fillRect(0, 0, SW, SH); c.textBaseline = 'top';
  c.fillStyle = '#7fe0a0'; c.font = F(30); const s = T.welcome; c.fillText(s.slice(0, Math.min(s.length, Math.floor(el / 35))), x, SH / 2 - 40 * S);
  if (el > 1100) { c.fillStyle = '#6a7a8a'; c.font = F(20); c.fillText(mood > 0.55 ? T.welcomeSubLate : T.welcomeSub, x, SH / 2 + 12 * S); }
  screenDirty = true;
}
function drawFoxIcon(cx, cy, r) {
  const c = sctx; c.fillStyle = '#1a1410'; c.beginPath(); c.arc(cx, cy, r, 0, 7); c.fill(); c.fillStyle = '#d9823f';
  c.beginPath(); c.moveTo(cx - r * .5, cy - r * .15); c.lineTo(cx - r * .72, cy - r * .82); c.lineTo(cx - r * .12, cy - r * .45); c.closePath(); c.fill();
  c.beginPath(); c.moveTo(cx + r * .5, cy - r * .15); c.lineTo(cx + r * .72, cy - r * .82); c.lineTo(cx + r * .12, cy - r * .45); c.closePath(); c.fill();
  c.beginPath(); c.arc(cx, cy + r * .06, r * .6, 0, 7); c.fill(); c.fillStyle = '#f3e6d8'; c.beginPath(); c.arc(cx, cy + r * .3, r * .3, 0, 7); c.fill();
  c.fillStyle = '#140f10'; c.beginPath(); c.arc(cx - r * .22, cy - r * .02, r * .08, 0, 7); c.fill(); c.beginPath(); c.arc(cx + r * .22, cy - r * .02, r * .08, 0, 7); c.fill(); c.beginPath(); c.arc(cx, cy + r * .22, r * .07, 0, 7); c.fill();
}
function drawDesktop() {
  const c = sctx; linkRects = []; dockRects = []; const x = 56, W = SW;
  const bg = c.createLinearGradient(0, 0, 0, SH); bg.addColorStop(0, '#0e1019'); bg.addColorStop(1, '#090a10'); c.fillStyle = bg; c.fillRect(0, 0, SW, SH); c.textBaseline = 'top';
  let y = 36 - scrollY;
  c.fillStyle = '#11141d'; rr(x - 20, y, W - 2 * (x - 20), 44 * S, 10); c.fill();
  c.fillStyle = '#a98bff'; c.font = F(18, 700); c.fillText('\u25d6 SNOWIE_OS', x, y + 12 * S);
  const nd = new Date(), hh = ('0' + nd.getHours()).slice(-2), mm = ('0' + nd.getMinutes()).slice(-2);
  c.textAlign = 'right'; c.fillStyle = '#7fe0a0'; c.font = F(15); c.fillText((S > 1 ? '' : 'den \u2593\u2593\u2593\u2591    ') + hh + ':' + mm, W - x + 20, y + 14 * S); c.textAlign = 'left';
  y += 62 * S;
  const chh = 124 * S; c.fillStyle = '#12151f'; rr(x - 20, y, W - 2 * (x - 20), chh, 14); c.fill(); c.strokeStyle = '#262a38'; c.lineWidth = 1.5; c.stroke();
  drawFoxIcon(x + 28 * S, y + chh / 2, 36 * S);
  c.fillStyle = '#fff'; c.font = F(44, 700, 'Space Grotesk'); c.fillText(CFG.name || 'Schurik', x + 82 * S, y + 20 * S);
  c.fillStyle = '#ffcf9e'; c.font = F(18); c.fillText([CFG.handle, CFG.pronouns, CFG.location].filter(Boolean).join(' \u00b7 '), x + 84 * S, y + 72 * S);
  if (CFG.status) { c.font = F(14); const sw = c.measureText(CFG.status).width + 34 * S; c.fillStyle = 'rgba(127,224,160,0.13)'; rr(x + 82 * S, y + 98 * S, sw, 22 * S, 11 * S); c.fill(); c.fillStyle = '#7fe0a0'; c.beginPath(); c.arc(x + 96 * S, y + 109 * S, 4.5 * S, 0, 7); c.fill(); c.fillText(CFG.status, x + 108 * S, y + 102 * S); }
  y += chh + 24 * S;
  if (CFG.tagline) { c.fillStyle = '#9aa3b0'; c.font = F(17); const words = CFG.tagline.split(' '); let line = ''; for (const w of words) { if (c.measureText(line + w).width > W - 2 * x) { c.fillText(line, x, y); y += 26 * S; line = ''; } line += w + ' '; } c.fillText(line, x, y); y += 38 * S; }
  bizRect = null; if (CFG.business) { c.fillStyle = '#6a7a8a'; c.font = F(15); const bl = 'business: ' + CFG.business; c.fillText(bl, x, y); const bw = c.measureText(bl).width; c.fillStyle = '#ffcf9e'; c.fillText('  [copy]', x + bw, y); bizRect = { x, y: y + scrollY, w: bw + c.measureText('  [copy]').width, h: 22 * S }; y += 36 * S; }
  c.fillStyle = '#6a8aff'; c.font = F(15, 700); c.fillText('LINKS', x, y); y += 28 * S;
  const cols = S > 1 ? 1 : 2, gap = 14, bx = x - 20, tw = (W - 2 * (x - 20) - gap * (cols - 1)) / cols, th = 54 * S;
  LINKS.forEach((d, i) => {
    const cx = bx + (i % cols) * (tw + gap), cy = y + Math.floor(i / cols) * (th + gap);
    c.fillStyle = '#10131c'; rr(cx, cy, tw, th, 10); c.fill(); c.strokeStyle = d.color || '#888'; c.lineWidth = 1.5; c.stroke();
    c.fillStyle = d.color || '#888'; c.beginPath(); c.arc(cx + 24 * S, cy + th / 2, 5.5 * S, 0, 7); c.fill();
    c.fillStyle = '#ece4f0'; c.font = F(21); c.fillText(d.label, cx + 44 * S, cy + th / 2 - 12 * S);
    c.fillStyle = '#55606e'; c.textAlign = 'right'; c.fillText('\u2197', cx + tw - 18, cy + th / 2 - 12 * S); c.textAlign = 'left';
    linkRects.push({ link: d, x: cx, y: cy + scrollY, w: tw, h: th });
  });
  y += Math.ceil(LINKS.length / cols) * (th + gap) + 18 * S;
  const dk = [['terminal', 'terminal'], ['about', 'about'], ['/void', 'void'], ['credits', 'credits']]; let dx = x;
  dk.forEach(([lb, id]) => { c.font = F(17); const w = c.measureText(lb).width + 32 * S; c.fillStyle = '#11141d'; rr(dx, y, w, 38 * S, 9); c.fill(); c.strokeStyle = '#2a2f3c'; c.lineWidth = 1.5; c.stroke();
    c.fillStyle = id === 'void' ? '#c06aff' : '#8a93a0'; c.fillText(lb, dx + 16 * S, y + 9 * S); dockRects.push({ id, x: dx, y: y + scrollY, w, h: 38 * S }); dx += w + 12; });
  y += 56 * S; c.fillStyle = '#2e3440'; c.font = F(15); c.fillText(T.footer, x, y); y += 34 * S;
  contentH = y + scrollY + 20;
  if (contentH > SH) { const th2 = SH * SH / contentH, ty = (scrollY / (contentH - SH)) * (SH - th2); c.fillStyle = 'rgba(169,139,255,.25)'; rr(SW - 10, ty + 4, 5, th2 - 8, 3); c.fill(); }
  screenDirty = true;
}
const FS = { 'about.txt': CFG.about || ['just a fox on the internet.'], 'links.txt': LINKS.map(l => l.label + '  ' + l.url.replace(/^https?:\/\//, '')), 'readme.txt': T.readme,
  'credits.txt': CREDITS.map(c => c[0] + ': ' + c[1] + ' (' + c[2] + ')').concat(['license: ' + LICENSE_URL, 'source: ' + SOURCE_URL.replace('https://', ''), 'models + textures compressed for web (modified).']) };
const foundCount = () => notes.filter(p => p.userData.found).length;
const voidUnlocked = () => notes.length > 0 && notes.every(p => p.userData.found);
const tpush = l => { termLines.push(l); if (termLines.length > 80) termLines = termLines.slice(-80); };
function processCmd(raw) {
  const cmd = raw.trim(), sp = cmd.split(/\s+/), c = (sp[0] || '').toLowerCase(), arg = sp.slice(1).join(' ');
  tpush('schurik@snowie:~$ ' + raw);
  if (c === '') { }
  else if (c === 'help') tpush('help  ls  cat <file>  open <link>  links  whoami  about  credits  void  clear  exit');
  else if (c === 'credits') { screenMode = 'credits'; drawCredits(); return; }
  else if (c === 'ls') tpush(Object.keys(FS).join('  ') + '  void/' + (/-\w*a/.test(arg) ? '  .radio' : ''));
  else if (c === 'whoami') tpush((CFG.name || 'schurik').toLowerCase());
  else if (c === 'links') LINKS.forEach(l => tpush(l.label.padEnd(12) + l.url.replace(/^https?:\/\//, '')));
  else if (c === 'open') { const l = LINKS.find(k => k.label === arg.toLowerCase()); if (l) { tpush('opening ' + l.label + ' ...'); openLink(l); } else tpush('open: no link called ' + arg); }
  else if (c === 'about') { screenMode = 'about'; drawAbout(); return; }
  else if (c === 'cat') { if (arg === '.radio') ['band: SW', 'freq: 47.2', 'hold it.'].forEach(tpush); else if (FS[arg]) FS[arg].forEach(tpush); else if (arg.startsWith('void')) tpush('permission denied.'); else tpush('cat: ' + arg + ': no such file'); }
  else if (c === 'void' || c === 'cd' && arg.startsWith('void')) { if (voidUnlocked()) { screenMode = 'void'; drawVoid(); return; } tpush('access denied. notes read [' + foundCount() + '/' + notes.length + ']'); }
  else if (c === 'clear') termLines = [];
  else if (c === 'exit' || c === 'back') { toDesktop(); return; }
  else tpush('command not found: ' + c);
  drawTerminal(true);
}
function drawTerminal(blink) {
  const c = sctx; c.fillStyle = '#07090d'; c.fillRect(0, 0, SW, SH); c.textBaseline = 'top'; c.font = F(21);
  const x = 44, lh = 29 * S, maxCh = Math.floor((SW - 2 * x) / (12.6 * S)); let y = 34;
  const wrapped = []; for (const l of termLines) { if (l.length <= maxCh) wrapped.push(l); else for (let i = 0; i < l.length; i += maxCh) wrapped.push((i ? '  ' : '') + l.slice(i, i + maxCh)); }
  const shown = wrapped.slice(-Math.floor((SH - 80) / lh));
  for (const l of shown) { c.fillStyle = l.startsWith('schurik@') ? '#6a8aff' : (/denied|not found|no such/.test(l) ? '#ff6a6a' : '#cfe0d0'); c.fillText(l, x, y); y += lh; }
  c.fillStyle = '#7fe0a0'; const pr = (S > 1 ? '$ ' : 'schurik@snowie:~$ ') + termInput; c.fillText(pr + (blink ? '\u2588' : ''), x, y);
  screenDirty = true;
}
function drawAbout() {
  const c = sctx; c.fillStyle = '#0b0d12'; c.fillRect(0, 0, SW, SH); c.textBaseline = 'top';
  c.fillStyle = '#a98bff'; c.font = F(34, 700); c.fillText('about', 56, 50); c.fillStyle = '#d8cfe0'; c.font = F(23); let y = 50 + 70 * S;
  FS['about.txt'].forEach(l => { c.fillText(l, 56, y); y += 40 * S; }); c.fillStyle = '#5a6472'; c.font = F(17); c.fillText('[ click / back to close ]', 56, y + 24); screenDirty = true;
}
function drawVoid() {
  const c = sctx; c.fillStyle = '#040207'; c.fillRect(0, 0, SW, SH); c.textBaseline = 'top';
  c.fillStyle = '#c06aff'; c.font = F(38, 700); c.fillText('/void', 56, 48); c.font = F(21);
  const ls = T.voidLines.concat(['', '[ click / back to close ]']);
  let y = 48 + 78 * S; for (const l of ls) { c.fillStyle = /\d+(\.\d+)?\s*\u00b0?N\b/.test(l) ? '#ff465f' : (l.startsWith('[') ? '#5a6472' : '#9a8aaa'); c.fillText(l, 56, y); y += 33 * S; } screenDirty = true;
}
function drawCredits() {
  const c = sctx; c.fillStyle = '#0b0d12'; c.fillRect(0, 0, SW, SH); c.textBaseline = 'top';
  c.fillStyle = '#a98bff'; c.font = F(32, 700); c.fillText('credits', 56, 44); let y = 44 + 62 * S; const lh = 26 * S;
  CREDITS.forEach(([what, who, lic]) => { c.fillStyle = '#ffcf9e'; c.font = F(16); c.fillText(what, 56, y); c.fillStyle = '#d8cfe0'; c.font = F(S > 1 ? 13 : 15); c.fillText(who + '  (' + lic + ')', 56, y + lh * 0.8); y += lh * 2; });
  c.fillStyle = '#8a93a0'; c.font = F(14); c.fillText('CC BY 4.0: ' + LICENSE_URL.replace('https://', ''), 56, y + 4); c.fillText('via ' + SOURCE_URL.replace('https://', ''), 56, y + 4 + lh); c.fillText('compressed for web (modified)', 56, y + 4 + lh * 2);
  c.fillStyle = '#5a6472'; c.fillText('[ click / back to close ]', 56, y + 4 + lh * 3.4); screenDirty = true;
}
function toDesktop() { screenMode = 'desktop'; scrollY = 0; drawDesktop(); kbBlur(); }
function finishBoot() { booted = true; document.body.classList.remove('cine'); toDesktop(); }
function openDock(id) {
  if (id === 'terminal') { screenMode = 'terminal'; termLines = ['SNOWIE_OS terminal. type help.', '']; termInput = ''; drawTerminal(true); kbFocus(); }
  else if (id === 'about') { screenMode = 'about'; drawAbout(); }
  else if (id === 'void') { if (voidUnlocked()) { screenMode = 'void'; drawVoid(); } else showSecret(T.voidLocked + ' \u2014 notes read [' + foundCount() + '/' + notes.length + ']'); }
  else if (id === 'credits') { screenMode = 'credits'; drawCredits(); }
}
function openLink(l) { blip(660, 0.08, 'sine', 0.06); const a = document.createElement('a'); a.href = l.url; a.target = '_blank'; a.rel = 'noopener'; document.body.appendChild(a); a.click(); a.remove(); }

let actx, master, windG, droneG, musicGain, musicFilter, radioG, cleanG, radioMusicG, ambientG, audioOn = false, muted = false, radioNext = 0, mrate = 1;
const muteBtn = $('mute');
function initAudio() {
  if (audioOn) return; audioOn = true;
  try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { audioOn = false; return; }
  const len = actx.sampleRate * 2, buf = actx.createBuffer(1, len, actx.sampleRate), d = buf.getChannelData(0); for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  actx.noise = buf; master = actx.createGain(); master.gain.value = muted ? 0 : 0.8; master.connect(actx.destination);
  const layer = (type, f, q, gain) => { const s = actx.createBufferSource(); s.buffer = buf; s.loop = true; const fl = actx.createBiquadFilter(); fl.type = type; fl.frequency.value = f; if (q) fl.Q.value = q; const g = actx.createGain(); g.gain.value = gain; s.connect(fl); fl.connect(g); g.connect(master); s.start(); return g; };
  windG = layer('lowpass', 380, 0, 0.04); droneG = layer('lowpass', 110, 0, 0);
  const bl = actx.sampleRate * 4, bb = actx.createBuffer(1, bl, actx.sampleRate), bd = bb.getChannelData(0); let last = 0;
  for (let i = 0; i < bl; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; bd[i] = last * 3.5; }
  fireA.pan = actx.createStereoPanner ? actx.createStereoPanner() : actx.createGain(); if (fireA.pan.pan) fireA.pan.pan.value = -0.55;
  fireA.bus = actx.createGain(); fireA.bus.gain.value = 1; fireA.bus.connect(fireA.pan); fireA.pan.connect(master);
  const roarSrc = actx.createBufferSource(); roarSrc.buffer = bb; roarSrc.loop = true; const roarF = actx.createBiquadFilter(); roarF.type = 'lowpass'; roarF.frequency.value = 420;
  fireA.roar = actx.createGain(); fireA.roar.gain.value = 0; roarSrc.connect(roarF); roarF.connect(fireA.roar); fireA.roar.connect(fireA.bus); roarSrc.start();
  const hissSrc = actx.createBufferSource(); hissSrc.buffer = buf; hissSrc.loop = true; const hissF = actx.createBiquadFilter(); hissF.type = 'highpass'; hissF.frequency.value = 5200;
  fireA.hiss = actx.createGain(); fireA.hiss.gain.value = 0; hissSrc.connect(hissF); hissF.connect(fireA.hiss); fireA.hiss.connect(fireA.bus); hissSrc.start();
  fireA.next = actx.currentTime + 0.2;
  radioG = layer('bandpass', 2400, 0.7, 0);
  musicFilter = actx.createBiquadFilter(); musicFilter.type = 'lowpass'; musicFilter.frequency.value = 18000; musicFilter.connect(master);
  musicGain = actx.createGain(); musicGain.gain.value = 0.55;
  cleanG = actx.createGain(); cleanG.gain.value = 0; musicGain.connect(cleanG); cleanG.connect(musicFilter);
  const rbp = actx.createBiquadFilter(); rbp.type = 'bandpass'; rbp.frequency.value = 1300; rbp.Q.value = 0.6; radioMusicG = actx.createGain(); radioMusicG.gain.value = 0; musicGain.connect(rbp); rbp.connect(radioMusicG); radioMusicG.connect(master);
  ambientG = actx.createGain(); ambientG.gain.value = 0; const alp = actx.createBiquadFilter(); alp.type = 'lowpass'; alp.frequency.value = 700; ambientG.connect(master);
  [110, 164.8, 220.4, 277.2].forEach((fq, i) => { const o = actx.createOscillator(); o.type = i % 2 ? 'triangle' : 'sine'; o.frequency.value = fq; o.detune.value = (i - 1.5) * 4; const lfo = actx.createOscillator(), lg = actx.createGain(); lfo.frequency.value = 0.07 + i * 0.03; lg.gain.value = 0.25; const og = actx.createGain(); og.gain.value = 0.35; lfo.connect(lg); lg.connect(og.gain); lfo.start(); o.connect(og); og.connect(alp); o.start(); }); alp.connect(ambientG);
}
muteBtn.addEventListener('click', e => { e.stopPropagation(); muted = !muted; if (audioOn) master.gain.setTargetAtTime(muted ? 0 : 0.8, actx.currentTime, 0.05); if (music.el) music.el.muted = muted; muteBtn.innerHTML = '&#9834; sound: ' + (muted ? 'off' : 'on'); });
function blip(freq, dur, type, gain, when = 0, to) { if (!audioOn || muted) return; const t0 = actx.currentTime + when, o = actx.createOscillator(), g = actx.createGain(); o.type = type || 'sine'; o.frequency.setValueAtTime(freq, t0); if (to) o.frequency.exponentialRampToValueAtTime(to, t0 + dur); g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(gain || 0.15, t0 + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur); o.connect(g); g.connect(master); o.start(t0); o.stop(t0 + dur + 0.05); }
const bootSound = () => { blip(90, 0.6, 'sine', 0.22, 0, 180); blip(520, 0.5, 'triangle', 0.07, 0.04); [1.0, 1.38, 1.76, 2.14, 2.62].forEach(s => blip(1300, 0.03, 'square', 0.035, s)); };
const accessSound = () => { blip(70, 0.7, 'sine', 0.3); blip(140, 0.5, 'sine', 0.15, 0.02); };
const welcomeSound = () => { blip(330, 0.4, 'sine', 0.1); blip(495, 0.4, 'sine', 0.06, 0.06); };
const flipSound = () => { if (!audioOn || muted || !actx.noise) return; const t0 = actx.currentTime, s = actx.createBufferSource(); s.buffer = actx.noise; const f = actx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.setValueAtTime(1800, t0); f.frequency.linearRampToValueAtTime(4200, t0 + 0.25); f.Q.value = 0.7; const g = actx.createGain(); g.gain.setValueAtTime(0.0001, t0); g.gain.linearRampToValueAtTime(0.09, t0 + 0.08); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.32); s.connect(f); f.connect(g); g.connect(master); s.start(t0, Math.random()); s.stop(t0 + 0.4); };
const squeakSound = () => { blip(620, 0.12, 'sine', 0.05, 0, 1400); blip(1400, 0.14, 'sine', 0.035, 0.1, 700); };
const petSound = () => { blip(880, 0.09, 'sine', 0.05, 0, 1250); blip(1250, 0.1, 'sine', 0.04, 0.08, 990); };
const fireA = { next: 0, burst: 0 };
function crack(t, amp, low) {
  const s = actx.createBufferSource(); s.buffer = actx.noise; const dur = low ? rnd(0.02, 0.05) : rnd(0.002, 0.014);
  const fl = actx.createBiquadFilter(); fl.type = low ? 'lowpass' : 'bandpass'; fl.frequency.value = low ? rnd(500, 1100) : rnd(1400, 6500); fl.Q.value = low ? 0.7 : rnd(0.8, 3);
  const g = actx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(amp, t + 0.0007); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  s.connect(fl); fl.connect(g); g.connect(fireA.bus); s.start(t, Math.random() * 1.5); s.stop(t + dur + 0.02);
}
function fireTick(alive, now) {
  const zoomK = mode === 'zoom' ? 0.45 : 1, roarMod = 0.75 + Math.sin(now * 0.7) * 0.12 + Math.sin(now * 1.9) * 0.08 + Math.random() * 0.05;
  fireA.roar.gain.setTargetAtTime(0.32 * alive * roarMod * zoomK * (1 + fireA.burst * 0.8), now, 0.15);
  fireA.hiss.gain.setTargetAtTime(0.012 * alive * zoomK * (0.8 + Math.random() * 0.4), now, 0.1);
  fireA.burst = Math.max(0, fireA.burst - 0.02);
  if (alive < 0.02) { fireA.next = now + 0.2; return; }
  if (fireA.next < now) fireA.next = now;
  while (fireA.next < now + 0.15) {
    const t = fireA.next, big = Math.random() < 0.06;
    crack(t, rnd(0.03, 0.22) * alive * zoomK * (1 + fireA.burst), false);
    if (big) crack(t + 0.004, rnd(0.15, 0.35) * alive * zoomK, true);
    if (Math.random() < 0.18) { const n = 2 + Math.floor(Math.random() * 5); for (let i = 1; i <= n; i++) crack(t + i * rnd(0.012, 0.045), rnd(0.02, 0.14) * alive * zoomK, false); }
    fireA.next += -Math.log(1 - Math.random()) * (0.16 / (1 + fireA.burst * 3));
  }
}
function stokeSound() { if (!audioOn || muted) return; fireA.burst = 1; const t = actx.currentTime; for (let i = 0; i < 14; i++) crack(t + i * rnd(0.01, 0.05), rnd(0.08, 0.3), Math.random() < 0.3); }
function radioTick(now) {
  let stat = 0, mus = 0, amb = 0;
  if (RAD.on) {
    const f = RAD.f[RAD.band];
    if (RAD.band === 'FM') { let best = FM_ST[0], bd = 99; FM_ST.forEach(s2 => { const d = Math.abs(s2.f - f); if (d < bd) { bd = d; best = s2; } });
      const clar = 1 - smooth(0.05, 0.4, bd); stat = 0.008 + 0.045 * (1 - clar); if (best.kind === 'music') mus = clar; if (best.kind === 'ambient') amb = clar; if (best.kind === 'dead') stat += 0.01 * clar; }
    else { const d = Math.abs(f - SECRET), prox = 1 - smooth(0.0, 0.9, d); stat = 0.05 - prox * 0.025;
      if (!RAD.triggered && prox > 0.05 && now > RAD.nextBleed) { RAD.nextBleed = now + rnd(2.5, 4.5); [0, 0.3].forEach(dl => blip(1000, 0.14, 'sine', 0.05 * prox, dl)); if (prox > 0.6 && Math.random() < 0.4 && 'speechSynthesis' in window) { try { const u = new SpeechSynthesisUtterance('four... seven'); u.rate = 0.7; u.pitch = 0.3; u.volume = 0.12 * prox; speechSynthesis.speak(u); } catch (e) { } } }
      if (RAD.triggered && mood > 0.5 && now > radioNext) { radioNext = now + rnd(24, 34); radioNumbers(); } }
  }
  radioG.gain.setTargetAtTime(stat * (0.75 + Math.random() * 0.5), now, 0.02);
  music.radio = mus > 0.05; setMusicWant();
  cleanG.gain.setTargetAtTime(music.boom ? 1 : 0, now, 0.05); radioMusicG.gain.setTargetAtTime(mus * 1.4, now, 0.08); ambientG.gain.setTargetAtTime(amb * 0.09, now, 0.3);
}
function radioLockStep(dt) {
  if (!RAD.on || RAD.band !== 'SW' || RAD.triggered) { RAD.lock = 0; return; }
  if (Math.abs(RAD.f.SW - SECRET) < 0.05) { RAD.lock += dt; if (RAD.lock > 2.5) { RAD.triggered = true; if (audioOn) { radioNumbers(); radioNext = actx.currentTime + 30; } setTimeout(() => { if (RAD.triggered) moodT = 1; }, 3800); } } else RAD.lock = 0;
}
function creak() { const t = actx.currentTime, o = actx.createOscillator(), g = actx.createGain(); o.type = 'sawtooth'; o.frequency.setValueAtTime(rnd(70, 110), t); o.frequency.linearRampToValueAtTime(rnd(45, 60), t + 0.5);
  const fl = actx.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = 320; g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.05, t + 0.08); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.6); o.connect(fl); fl.connect(g); g.connect(master); o.start(t); o.stop(t + 0.65); }
function radioNumbers() { [0, 0.35, 0.7].forEach(d => blip(1000, 0.18, 'sine', 0.05, d)); if (!('speechSynthesis' in window) || muted) return;
  setTimeout(() => { try { const u = new SpeechSynthesisUtterance(T.radioNumbers); u.rate = 0.72; u.pitch = 0.3; u.volume = 0.35; speechSynthesis.speak(u); } catch (e) { } }, 1300); }
function audioTick(mood) { if (!audioOn || muted) return; const now = actx.currentTime, alive = 1 - smooth(0.2, 0.55, mood), cold = smooth(0.3, 0.9, mood);
  fireTick(alive, now);
  windG.gain.setTargetAtTime(0.035 + cold * 0.1, now, 0.5); droneG.gain.setTargetAtTime(cold * 0.05, now, 0.8);
  radioTick(now);
  if (mood > 0.45 && Math.random() < 0.0015) creak();
  mrate = 1 - cold * 0.24; musicFilter.frequency.setTargetAtTime(600 + 17400 * (1 - cold), now, 0.3);
  if (music.el) { music.el.preservesPitch = false; music.el.playbackRate = mrate; } }

const music = { boom: false, radio: false, playing: false, el: null, an: null, idx: 0, next: 0, step: 0, lastKick: -9, data: null };
const BPM = 172, S16 = 60 / BPM / 4, mtof = m => 440 * Math.pow(2, (m - 69) / 12);
function kick(t) { const o = actx.createOscillator(), g = actx.createGain(); o.frequency.setValueAtTime(155 * mrate, t); o.frequency.exponentialRampToValueAtTime(42 * mrate, t + 0.12); g.gain.setValueAtTime(0.9, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.3); o.connect(g); g.connect(musicGain); o.start(t); o.stop(t + 0.32); music.lastKick = t; }
function nz(t, type, f, dur, gain) { const s = actx.createBufferSource(); s.buffer = actx.noise; const fl = actx.createBiquadFilter(); fl.type = type; fl.frequency.value = f; const g = actx.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur); s.connect(fl); fl.connect(g); g.connect(musicGain); s.start(t, Math.random()); s.stop(t + dur + 0.02); }
function snare(t) { nz(t, 'bandpass', 1900, 0.17, 0.5); const o = actx.createOscillator(), g = actx.createGain(); o.frequency.value = 190; g.gain.setValueAtTime(0.25, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.1); o.connect(g); g.connect(musicGain); o.start(t); o.stop(t + 0.12); }
function reese(t, note, dur) {
  const fl = actx.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.setValueAtTime(260, t); fl.frequency.linearRampToValueAtTime(520, t + dur * 0.5); fl.frequency.linearRampToValueAtTime(240, t + dur); fl.Q.value = 6;
  const g = actx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.16, t + 0.02); g.gain.setValueAtTime(0.16, t + dur - 0.05); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  for (const det of [-9, 9]) { const o = actx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = mtof(note) * mrate; o.detune.value = det; o.connect(fl); o.start(t); o.stop(t + dur + 0.02); }
  fl.connect(g); g.connect(musicGain);
}
function synthTick() { if (music.next < actx.currentTime) music.next = actx.currentTime; while (music.next < actx.currentTime + 0.12) { const s = music.step, b = s % 16, t = music.next;
  if (b === 0 || b === 10) kick(t); if (b === 4 || b === 12) snare(t); if (b === 7 && Math.random() < 0.5) nz(t, 'bandpass', 1900, 0.08, 0.18);
  if (b % 2 === 0) nz(t, 'highpass', 7500, 0.03, b % 4 === 2 ? 0.09 : 0.05);
  if (b === 0) reese(t, [31, 31, 29, 34][Math.floor(s / 16) % 4], S16 * 14);
  music.next += S16 / mrate; music.step = (music.step + 1) % 64; } }
function startMusic() {
  initAudio(); if (!audioOn) return; if (actx.state === 'suspended') actx.resume();
  const tracks = CFG.music || [];
  if (tracks.length) {
    if (!music.el) { music.el = new Audio(tracks[0]); music.el.crossOrigin = 'anonymous'; music.el.muted = muted; const src = actx.createMediaElementSource(music.el); music.an = actx.createAnalyser(); music.an.fftSize = 256; music.data = new Uint8Array(music.an.frequencyBinCount); src.connect(music.an); music.an.connect(musicGain);
      music.el.addEventListener('ended', () => { music.idx = (music.idx + 1) % tracks.length; music.el.src = tracks[music.idx]; music.el.play(); }); }
    music.el.play().catch(() => { });
  } else { music.next = actx.currentTime + 0.05; music.step = 0; }
  music.playing = true;
}
function stopMusic() { music.playing = false; if (music.el) music.el.pause(); }
function setMusicWant() { const want = music.boom || music.radio; if (want && !music.playing) startMusic(); else if (!want && music.playing) stopMusic(); }
function musicPulse() { if (!music.playing || !audioOn) return 0; if (music.an) { music.an.getByteFrequencyData(music.data); return (music.data[1] + music.data[2]) / 510; } return Math.exp(-(actx.currentTime - music.lastKick) * 9); }

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const camRoom = { pos: V(0.4, 1.5, 3.05), tgt: V(-0.55, 1.0, -1.3) };
const scrCenter = V(MON.x, DESK.top + 0.23, MON.z + 0.033);
const camZoom = { pos: V(), tgt: scrCenter.clone() };
const camWin = { pos: V(WIN.x + 0.05, WIN.y - 0.02, R.z0 + 0.95), tgt: V(WIN.x - 1.2, WIN.y + 0.1, -10) };
function computeZoom() { const vf = THREE.MathUtils.degToRad(camera.fov), tv = Math.tan(vf / 2), asp = camera.aspect; const dH = (0.268 / 2) / tv / 0.84, dW = (0.352 / 2) / (tv * asp) / 0.9; camZoom.pos.set(scrCenter.x, scrCenter.y, scrCenter.z + Math.max(dH, dW, 0.24)); }
const cam = { pos: camRoom.pos.clone(), tgt: camRoom.tgt.clone(), anim: null };
let mode = 'room', yaw = 0, pitch = 0, yawT = 0, pitchT = 0;
function tween(to, after, dur = 1.25) { const fp = cam.pos.clone(), ft = cam.tgt.clone(); let t = 0; mode = 'busy';
  cam.anim = { step(dt) { t = Math.min(1, t + dt / dur); const e = t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; cam.pos.lerpVectors(fp, to.pos, e); cam.tgt.lerpVectors(ft, to.tgt, e); if (t >= 1) { cam.anim = null; after && after(); } } }; }
const tmpV = V(0, 0, 0), right = V(0, 0, 0), upV = V(0, 1, 0);
function applyCamera(time) {
  let sx = 0, sy = 0; if (!REDUCED) { sx = Math.sin(time * 0.6) * 0.012 + Math.sin(time * 0.27) * 0.008; sy = Math.cos(time * 0.45) * 0.008; }
  const k = mode === 'room' ? 1 : 0;
  camera.position.copy(cam.pos); camera.position.x += sx * k; camera.position.y += sy * k;
  tmpV.copy(cam.tgt).sub(cam.pos); const dist = tmpV.length(); right.crossVectors(tmpV, upV).normalize();
  tmpV.copy(cam.tgt).addScaledVector(right, Math.tan(yaw) * dist).addScaledVector(upV, Math.tan(pitch) * dist);
  camera.lookAt(tmpV);
  if (mode === 'room' && !REDUCED) camera.rotateZ(Math.sin(time * 0.5) * 0.004);
}

const prompt = $('prompt'), backBtn = $('back'), moodEl = $('mood'), slider = $('slider'), secretEl = $('secret'), cursorEl = $('cursor'), cursorLab = cursorEl.querySelector('.lab'), hintEl = $('hint');
let moodT = 0, mood = 0, secretTimer = 0, voidHit = false, flareT = 0, foxPokeT = 0, slugPokeT = 0, plushPokeT = 0, screenOn = 0, screenOnT = 0;
slider.addEventListener('input', e => { moodT = e.target.value / 100; });
function showSecret(t) { secretEl.textContent = t; secretEl.style.opacity = '1'; secretTimer = performance.now() + 3600; }
const fragments = T.fragments;
function noteFound(g) { const first = !g.userData.found; g.userData.found = true; openNote(T.fragments[g.userData.pid % T.fragments.length]); blip(320, 0.12, 'triangle', 0.04);
  if (first && foundCount() >= notes.length) setTimeout(() => showSecret(T.allFound), 400); }
const noteEl = $('note');
function openNote(text) { noteEl.querySelector('.txt').textContent = text; noteEl.classList.add('on'); }
noteEl.addEventListener('click', () => noteEl.classList.remove('on'));
function setUI() {
  document.body.classList.toggle('zoomed', mode === 'zoom');
  prompt.classList.toggle('hide', mode !== 'room' && mode !== 'radio' && mode !== 'book'); moodEl.classList.toggle('hide', mode !== 'room'); backBtn.classList.toggle('on', mode === 'zoom' || mode === 'window' || mode === 'radio' || mode === 'book');
  prompt.textContent = mode === 'radio' ? (IS_TOUCH ? T.radioHelpTouch : T.radioHelp) : mode === 'book' ? (IS_TOUCH ? T.bookHelpTouch : T.bookHelp) : T.prompt;
}
function enterScreen() {
  if (mode !== 'room') return; if (screenMode === 'idle') screenMode = 'off'; computeZoom(); setUI(); prompt.classList.add('hide'); moodEl.classList.add('hide');
  if (!booted) { document.body.classList.add('cine'); }
  tween(camZoom, () => { mode = 'zoom'; setUI(); screenOnT = 1;
    if (!booted) { screenMode = 'boot'; bootStart = performance.now(); bootAuthed = false; bootSound(); } else { screenMode = 'welcome'; welcomeStart = performance.now(); welcomeSound(); } });
}
function exitScreen() { if (mode !== 'zoom') return; kbBlur(); document.body.classList.remove('cine'); screenOnT = 0; screenMode = 'off'; drawOff(); blip(220, 0.25, 'sine', 0.06, 0, 60); tween(camRoom, () => { mode = 'room'; setUI(); }); setUI(); }
const camRadio = { pos: V(0, 0, 0), tgt: V(0, 0, 0) };
function computeRadioCam() { const c = V(2.18, 1.876 + 0.09, -2.3), fwd = V(Math.sin(-0.2), 0, Math.cos(-0.2)), vf = THREE.MathUtils.degToRad(camera.fov), asp = camera.aspect;
  const d = Math.max(0.42, (0.2) / (Math.tan(vf / 2) * asp), 0.14 / Math.tan(vf / 2)); camRadio.tgt.copy(c); camRadio.pos.copy(c).addScaledVector(fwd, d).add(V(0, 0.03, 0)); }
function enterRadio() { if (mode !== 'room') return; computeRadioCam(); tween(camRadio, () => { mode = 'radio'; setUI(); }, 1.1); setUI(); prompt.classList.add('hide'); }
function exitRadio() { if (mode !== 'radio') return; tween(camRoom, () => { mode = 'room'; setUI(); }, 1.1); setUI(); }
function radioAction(part) { blip(part === 'power' ? 520 : 900, 0.05, 'square', 0.03);
  if (part === 'power' || !RAD.on) { RAD.on = !RAD.on; if (!RAD.on) { RAD.triggered = false; moodT = 0; } }
  else if (part === 'band') { RAD.band = RAD.band === 'FM' ? 'SW' : 'FM'; RAD.lock = 0; }
  else if (part === 'station') { if (RAD.band === 'FM') { const i = FM_ST.findIndex(s2 => s2.f > RAD.f.FM + 0.05); RAD.f.FM = (i < 0 ? FM_ST[0] : FM_ST[i]).f; } }
  drawRadio(); }
const camBook = { pos: V(0, 0, 0), tgt: V(0, 0, 0) };
function computeBookCam() { const c = BOOK.pos.clone().add(V(0, 0.015, 0)), fwd = V(Math.sin(BOOK.rot), 0, Math.cos(BOOK.rot)), tv = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2), asp = camera.aspect;
  const d = Math.max(0.3, (BOOK.W + 0.03) / (tv * asp) / 0.92, (BOOK.H / 2 + 0.02) / tv / 0.68); camBook.tgt.copy(c); camBook.pos.copy(c).addScaledVector(fwd, d * 0.34).add(V(0, d * 0.94, 0)); }
function enterBook() { if (mode !== 'room') return; computeBookCam(); tween(camBook, () => { mode = 'book'; setUI(); }, 1.2); setUI(); prompt.classList.add('hide'); }
function exitBook() { if (mode !== 'book') return; tween(camRoom, () => { mode = 'room'; setUI(); }, 1.2); setUI(); }
function enterWindow() { if (mode !== 'room') return; tween(camWin, () => { mode = 'window'; setUI(); }, 1.6); setUI(); }
function exitWindow() { if (mode !== 'window') return; tween(camRoom, () => { mode = 'room'; setUI(); }, 1.4); setUI(); }
backBtn.addEventListener('click', e => { e.stopPropagation();
  if (mode === 'window') return exitWindow();
  if (mode === 'radio') return exitRadio();
  if (mode === 'book') return exitBook();
  if (mode === 'zoom' && ['terminal', 'about', 'void', 'credits'].includes(screenMode)) return toDesktop();
  exitScreen(); });

const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
function pick(px, py) { ndc.set(px / innerWidth * 2 - 1, -(py / innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera); const hits = ray.intersectObjects(interactives, false); for (const h of hits) { let o = h.object, vis = true; while (o) { if (!o.visible) { vis = false; break; } o = o.parent; } if (vis) return h; } return null; }
function barrel(u, v) { const cx = u - 0.5, cy = v - 0.5, r2 = cx * cx + cy * cy, k = 1 + 0.09 * r2; return [0.5 + cx * k, 0.5 + cy * k]; }
function screenPoint(px, py) {
  ndc.set(px / innerWidth * 2 - 1, -(py / innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera); const h = ray.intersectObject(screenMesh, false)[0];
  if (!h || !h.uv) return null; const [u, v] = barrel(h.uv.x, h.uv.y); return { x: u * SW, y: (1 - v) * SH };
}
function tap(px, py) {
  initAudio(); if (actx && actx.state === 'suspended') actx.resume();
  if (mode === 'window') return exitWindow();
  if (mode === 'book') { const h = pick(px, py), part = h && h.object.userData.kind === 'book' ? h.object.userData.part : null; if (part === 'right') flipBook(1); else if (part === 'left') flipBook(-1); else exitBook(); return; }
  if (mode === 'radio') { const h = pick(px, py); if (h && h.object.userData.kind === 'radio') radioAction(h.object.userData.part || 'power'); else exitRadio(); return; }
  if (mode === 'zoom') {
    if (screenMode === 'boot') { if (!bootAuthed) { bootAuthed = true; const el = performance.now() - bootStart - 320; if (el < TPAUSE) bootStart = performance.now() - 320 - TPAUSE; accessSound(); } return; }
    if (screenMode === 'welcome') return toDesktop();
    if (screenMode === 'about' || screenMode === 'void' || screenMode === 'credits') return toDesktop();
    if (screenMode === 'terminal') { kbFocus(); return; }
    const p = screenPoint(px, py); if (!p) return exitScreen();
    const y = p.y + scrollY;
    if (bizRect && p.x >= bizRect.x && p.x <= bizRect.x + bizRect.w && y >= bizRect.y && y <= bizRect.y + bizRect.h) { copyText(CFG.business); showSecret('email copied'); blip(880, 0.06, 'sine', 0.05); return; }
    const l = linkRects.find(r => p.x >= r.x && p.x <= r.x + r.w && y >= r.y && y <= r.y + r.h); if (l) return openLink(l.link);
    const d = dockRects.find(r => p.x >= r.x && p.x <= r.x + r.w && y >= r.y && y <= r.y + r.h); if (d) return openDock(d.id);
    return;
  }
  if (mode !== 'room') return;
  const h = pick(px, py); if (!h) return; const k = h.object.userData.kind, o = h.object; if (k === 'note' && mood < 0.55) return;
  if (k === 'screen') enterScreen();
  else if (k === 'note') { if (mood > 0.55) noteFound(o.userData.root); }
  else if (k === 'radio') enterRadio();
  else if (k === 'fire') { flareT = performance.now() + 700; stokeSound(); }
  else if (k === 'fox') { foxPokeT = performance.now() + 650; petSound(); }
  else if (k === 'slug') { slugPokeT = performance.now() + 650; petSound(); }
  else if (k === 'book') enterBook();
  else if (k === 'plush') { plushPokeT = performance.now() + 550; squeakSound(); }
  else if (k === 'boombox') { initAudio(); music.boom = !music.boom; setMusicWant(); blip(1200, 0.04, 'square', 0.04); }
  else if (k === 'window') enterWindow();
}
const LABELS = { note: o => T.labels.note, radio: o => { const p = o.userData.part || 'power', tag2 = RAD.on ? '  ' + RAD.band + ' ' + RAD.f[RAD.band].toFixed(1) : ''; if (!RAD.on) return T.labels.radioOn; if (p === 'band') return 'band' + tag2; if (p === 'station') return (RAD.band === 'FM' ? 'next station' : 'fm only') + tag2; return T.labels.radioOff + tag2; }, screen: () => booted ? T.labels.screenOn : T.labels.screenOff, pearl: o => o.userData.found ? '\u00b7\u00b7\u00b7' : T.labels.pearl, fire: () => T.labels.fire, fox: () => T.labels.fox, slug: () => T.labels.slug, plush: () => T.labels.plush || 'squeeze', book: o => mode === 'book' ? (o.userData.part === 'right' ? T.labels.bookNext : T.labels.bookPrev) : T.labels.book, boombox: () => music.boom ? T.labels.stop : T.labels.play, window: () => T.labels.window };
const HCOL = { note: 0xe9e0c9, radio: 0xffa040, screen: 0x9a7acf, pearl: 0x3fd6c4, fire: 0xff8a30, fox: 0xd9823f, slug: 0xe9e3d6, plush: 0xb8c4d0, book: 0xe6dcc6, boombox: 0x7fe0a0, window: 0x9fc0e8 };
let mouseX = innerWidth / 2, mouseY = innerHeight / 2, hoverKind = null;
const hbox = new THREE.Box3(), hc = V(0, 0, 0), hs = V(0, 0, 0);
function updateHover() {
  if (IS_TOUCH || (mode !== 'room' && mode !== 'radio' && mode !== 'book') || cam.anim) { halos.hover.visible = false; cursorEl.classList.remove('act'); hoverKind = null; return; }
  let h = pick(mouseX, mouseY); if (mode === 'radio' && h && h.object.userData.kind !== 'radio') h = null; if (mode === 'book' && h && !(h.object.userData.kind === 'book' && (h.object.userData.part === 'left' || h.object.userData.part === 'right'))) h = null;
  if (h && !(h.object.userData.kind === 'note' && mood < 0.55)) { const k = h.object.userData.kind, root = h.object.userData.root; hoverKind = k;
    hbox.setFromObject(root); hbox.getCenter(hc); hbox.getSize(hs); halos.hover.position.copy(hc); halos.hover.scale.setScalar(Math.min(1.6, Math.max(0.28, hs.length() * 1.1)));
    halos.hover.material.color.set(HCOL[k] || 0xffffff); halos.hover.material.opacity = k === 'window' ? 0.12 : 0.35; halos.hover.visible = true;
    cursorEl.classList.add('act'); cursorEl.style.borderColor = '#' + new THREE.Color(HCOL[k]).getHexString(); cursorLab.textContent = (mode === 'room' && k === 'radio') ? T.labels.radio : LABELS[k](h.object); if (mode === 'radio' || mode === 'book') halos.hover.visible = false; }
  else { halos.hover.visible = false; cursorEl.classList.remove('act'); cursorEl.style.borderColor = ''; hoverKind = null; }
}

let down = null;
canvas.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, yaw: yawT, scroll: scrollY, moved: 0, radio: false, f0: 0 }; if (mode === 'radio' && RAD.on) { const h = pick(e.clientX, e.clientY); if (h && h.object.userData.kind === 'radio') { down.radio = true; down.f0 = RAD.f[RAD.band]; } } canvas.setPointerCapture?.(e.pointerId); });
canvas.addEventListener('pointermove', e => {
  mouseX = e.clientX; mouseY = e.clientY; cursorEl.style.left = mouseX + 'px'; cursorEl.style.top = mouseY + 'px';
  if (!IS_TOUCH && e.pointerType === 'mouse' && mode === 'room') { yawT = (mouseX / innerWidth - 0.5) * 0.5; pitchT = -(mouseY / innerHeight - 0.5) * 0.18; }
  if (down) { const dx = e.clientX - down.sx, dy = e.clientY - down.sy; down.moved = Math.max(down.moved, Math.hypot(dx, dy));
    if (down.radio) { if (down.moved > 6) { const want = Math.round((down.f0 + Math.round(dx / 14) * 0.1) * 10) / 10; if (want !== RAD.f[RAD.band]) { tune(want - RAD.f[RAD.band]); blip(1500, 0.015, 'square', 0.015); } } }
    else if (e.pointerType !== 'mouse' && mode === 'room') yawT = THREE.MathUtils.clamp(down.yaw - dx / innerWidth * 1.6, -0.75, 0.75);
    if (mode === 'zoom' && screenMode === 'desktop' && e.pointerType !== 'mouse') { scrollY = THREE.MathUtils.clamp(down.scroll - dy * (SH / (innerHeight * 0.8)), 0, Math.max(0, contentH - SH)); drawDesktop(); } }
});
canvas.addEventListener('pointerup', e => { if (down && down.moved < 8) tap(e.clientX, e.clientY); down = null; });
canvas.addEventListener('pointercancel', () => { down = null; });
addEventListener('wheel', e => { if (mode === 'radio' && RAD.on) { e.preventDefault(); tune(e.deltaY > 0 ? -0.1 : 0.1); blip(1500, 0.015, 'square', 0.015); return; } if (mode !== 'zoom' || screenMode !== 'desktop') return; e.preventDefault(); scrollY = THREE.MathUtils.clamp(scrollY + e.deltaY * 0.8, 0, Math.max(0, contentH - SH)); drawDesktop(); }, { passive: false });
const kb = $('kb');
function kbFocus() { if (IS_TOUCH) { kb.value = ''; kb.focus(); } }
function kbBlur() { kb.blur(); }
kb.addEventListener('input', () => { if (screenMode !== 'terminal') return; termInput = (termInput + kb.value).slice(0, 80); kb.value = ''; drawTerminal(true); });
addEventListener('keydown', e => {
  if (e.key === 'Escape' && mode === 'radio') { exitRadio(); return; }
  if (e.key === 'Escape' && mode === 'book') { exitBook(); return; }
  if (mode === 'book' && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) { flipBook(e.key === 'ArrowRight' ? 1 : -1); return; }
  if (e.key === 'Escape') { if (mode === 'zoom' && ['terminal', 'about', 'void', 'credits'].includes(screenMode)) toDesktop(); else if (mode === 'zoom') exitScreen(); else if (mode === 'window') exitWindow(); return; }
  if (mode !== 'zoom' || screenMode !== 'terminal') return;
  if (e.key === 'Enter') { const v = termInput; termInput = ''; processCmd(v); e.preventDefault(); }
  else if (e.key === 'Backspace') { termInput = termInput.slice(0, -1); e.preventDefault(); drawTerminal(true); }
  else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && document.activeElement !== kb) { termInput = (termInput + e.key).slice(0, 80); drawTerminal(true); }
});

const enterEl = $('enter'), liteEl = $('lite'), liteLink = $('litelink');
let entered = false, lite = QS.has('lite');
function applyTexts() {
  const set = (sel, v) => { const e = document.querySelector(sel); if (e && v != null) e.textContent = v; };
  set('#enter .big', T.enterTitle); set('#enter .sub', T.enterSub); set('#litelink', T.liteLink); set('#lite-back', T.liteBack); set('#prompt', T.prompt); set('#mood .l', T.sliderLeft); set('#mood .r', T.sliderRight);
  const cr = document.querySelector('#lite .cred'); if (cr) { cr.innerHTML = '';
    const p1 = document.createElement('div'); p1.textContent = '3D models: ' + CREDITS.map(c => c[0] + ' by ' + c[1] + ' (' + c[2] + ')').join(' \u00b7 ') + '.'; cr.appendChild(p1);
    const p2 = document.createElement('div'); p2.append('Licenses: '); const a1 = document.createElement('a'); a1.href = LICENSE_URL; a1.target = '_blank'; a1.rel = 'noopener'; a1.textContent = 'CC BY 4.0'; p2.append(a1, ' \u00b7 via '); const a2 = document.createElement('a'); a2.href = SOURCE_URL; a2.target = '_blank'; a2.rel = 'noopener'; a2.textContent = 'Khronos glTF Sample Assets'; p2.append(a2, '. Compressed for web (modified).'); cr.appendChild(p2); }
}
function copyText(t, btn) { const done = () => { if (btn) { const o = btn.textContent; btn.textContent = 'copied'; setTimeout(() => btn.textContent = o, 1400); } };
  try { navigator.clipboard.writeText(t).then(done, () => { selectFallback(t); done(); }); } catch (e) { selectFallback(t); done(); } }
function selectFallback(t) { const ta = document.createElement('textarea'); ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) { } ta.remove(); }
['biz', 'lite-biz'].forEach(id => { const el = $(id); if (!el) return; if (!CFG.business) { el.hidden = true; return; }
  el.querySelector('.mail').textContent = CFG.business; el.addEventListener('click', e => e.stopPropagation());
  el.querySelector('.copy').addEventListener('click', e => { e.stopPropagation(); copyText(CFG.business, e.currentTarget); }); });
function buildWork() {
  const W = CFG.work, el = $('work'), lk = $('worklink'); if (!W) { if (lk) lk.hidden = true; return; }
  $('work-title').textContent = W.title || 'work with me'; $('work-sub').textContent = W.subtitle || ''; $('work-status').textContent = W.status || ''; $('work-status').hidden = !W.status;
  const fill = (id, arr) => { const ul = $(id); ul.innerHTML = ''; (arr || []).forEach(t => { const li = document.createElement('li'); li.textContent = t; ul.appendChild(li); }); ul.parentElement.hidden = !(arr && arr.length); };
  fill('work-take', W.take); fill('work-made', W.made); $('work-bigger').textContent = W.bigger || ''; $('work-price').textContent = W.price || '';
  const bt = $('work-btns'); bt.innerHTML = ''; (W.buttons || []).filter(b => b.url).forEach(b => { const a = document.createElement('a'); a.href = b.url; a.target = '_blank'; a.rel = 'noopener'; a.textContent = b.label; bt.appendChild(a); });
  if (W.label && lk) lk.innerHTML = '', lk.append(W.label);
  lk.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); el.classList.add('show'); });
  $('work-back').addEventListener('click', e => { e.stopPropagation(); el.classList.remove('show'); });
  el.addEventListener('click', e => e.stopPropagation());
}
buildWork();
applyTexts();
function buildLite() {
  $('lite-name').textContent = CFG.name || 'Schurik'; $('lite-hd').textContent = [CFG.handle, CFG.pronouns, '\ud83e\udd8a'].filter(Boolean).join(' \u00b7 '); $('lite-tag').textContent = CFG.tagline || '';
  const box2 = $('lite-links'); box2.innerHTML = '';
  LINKS.forEach(l => { const a = document.createElement('a'); a.href = l.url; a.target = '_blank'; a.rel = 'noopener'; a.innerHTML = `<i style="background:${l.color || '#888'}"></i>${l.label}<span>\u2197</span>`; box2.appendChild(a); });
}
buildLite();
function showLite() { lite = true; liteEl.classList.add('show'); enterEl.style.display = 'none'; $('load').classList.add('gone'); }
if (lite) showLite();
setTimeout(() => liteLink.classList.add('show'), 3200);
liteLink.addEventListener('click', e => { e.stopPropagation(); showLite(); });
$('lite-back').addEventListener('click', () => { liteEl.classList.remove('show'); lite = false; enterEl.style.display = 'flex'; last = performance.now(); if (window.__ready && !looping) { looping = true; requestAnimationFrame(loop); } });
function doEnter() { if (entered) return; entered = true; initAudio(); enterEl.classList.add('gone'); setTimeout(() => enterEl.style.display = 'none', 1000);
  hintEl.textContent = IS_TOUCH ? T.hintTouch : T.hintDesktop; setTimeout(() => hintEl.classList.add('on'), 1200); setTimeout(() => hintEl.classList.remove('on'), 7000); setUI(); }
enterEl.addEventListener('click', doEnter);

const TOWER = (() => { const seq = []; [4, 7, 2].forEach((n, gi) => { for (let i = 0; i < n; i++) { seq.push([1, 0.42]); seq.push([0, i < n - 1 ? 0.38 : (gi < 2 ? 1.7 : 4.2)]); } }); const total = seq.reduce((a, b) => a + b[1], 0); return { seq, total }; })();
function towerBlink(t) { let x = t % TOWER.total; for (const [on, d] of TOWER.seq) { if (x < d) return !!on; x -= d; } return false; }
function applyMood(m, t) {
  const den = 1 - smooth(0.12, 0.55, m), cold = smooth(0.3, 0.9, m);
  applyAge(m);
  renderer.toneMappingExposure = 1.12 - cold * 0.27; scene.environmentIntensity = 0.06 * (1 - cold) + 0.012;
  L.amb.intensity = 0.35 * (1 - cold) + 0.03; L.amb.color.setRGB(0.165 - cold * 0.06, 0.141 - cold * 0.03, 0.251 + cold * 0.05);
  L.sconce.intensity = 4.5 * den; if (L.table) { L.table.intensity = 1.5 * den; L.tableShade.material.emissiveIntensity = 0.35 * den + 0.02; L.tableBulb.material.emissiveIntensity = 3 * den + 0.05; L.sill.intensity = 0.35 * den * (0.9 + Math.sin(t * 7) * 0.08); }
  L.fairy.intensity = 0.9 * den; L.candle.intensity = 0.6 * den * (0.9 + Math.sin(t * 9) * 0.06);
  if (sconceBulb) sconceBulb.material.emissiveIntensity = 6 * den + 0.02;
  if (fairyBulbs) fairyBulbs.material.emissiveIntensity = (4 + Math.sin(t * 1.1) * 0.6) * den + 0.02;
  if (candleFlame) candleFlame.material.uniforms.uInt.value = 1.2 * den;
  const fl = smooth(0.45, 0.7, m), flick = Math.random() < 0.08 ? 0 : (Math.sin(t * 23) > -0.2 ? 1 : 0.3);
  flickerBulb.material.emissiveIntensity = fl * flick * 4; L.flicker.intensity = fl * flick * 0.35;
  L.moon.intensity = LOW ? 0.12 * (1 - cold * 0.7) : 0.55 * (1 + cold * 0.2);
  if (garlandBulbs) garlandBulbs.material.emissiveIntensity = (3.5 + Math.sin(t * 1.4) * 0.5) * den + 0.02; if (L.chest) L.chest.intensity = 0.35 * den * (0.9 + Math.sin(t * 8) * 0.06);
  if (mode === 'room') { const want = m > 0.5 ? T.lateHint : T.prompt; if (prompt.textContent !== want) prompt.textContent = want; }
  scene.fog.color.setRGB(0.039 * (1 - cold) + 0.018 * cold, 0.027 * (1 - cold) + 0.024 * cold, 0.024 * (1 - cold) + 0.045 * cold); scene.fog.density = 0.045 + cold * 0.02;
  flashlight.intensity = (mode === "room" ? 1 : 0) * smooth(0.4, 0.7, m) * 26;
  radioDial.material.emissiveIntensity = RAD.on ? 1.2 : 0; if (L.radioFill) L.radioFill.intensity += ((mode === 'radio' ? 0.35 : 0) - L.radioFill.intensity) * 0.08;
  towerLight.visible = towerBlink(t); towerLight.material.color.setRGB(1, 0.08, 0.05).multiplyScalar(1.5 + cold * 2.5);
  if (bloom) bloom.strength = 0.55 + cold * 0.15;
  if (finalPass) { finalPass.uniforms.uVoid.value = cold * 0.75; finalPass.uniforms.uGlitch.value = m > 0.94 ? (m - 0.94) / 0.06 * (0.3 + Math.random() * 0.4) : 0; }
  if (m > 0.85 && !voidHit) { voidHit = true; showSecret(voidUnlocked() ? T.signalFull : T.signalPartial); }
  if (m < 0.7) voidHit = false;
}

function onResize() {
  const w = innerWidth, h = innerHeight; camera.aspect = w / h;
  camera.fov = w / h < 0.8 ? 68 : 52; camera.updateProjectionMatrix();
  renderer.setSize(w, h); if (composer) { composer.setSize(w, h); finalPass.uniforms.uRes.value.set(w, h); }
  const nS = (w < 700 || w / h < 0.9) ? 1.8 : 1; if (nS !== S) { S = nS; redrawScreen(); }
  computeZoom(); if (mode === 'zoom' && !cam.anim) { cam.pos.copy(camZoom.pos); cam.tgt.copy(camZoom.tgt); }
  computeRadioCam(); if (mode === 'radio' && !cam.anim) { cam.pos.copy(camRadio.pos); cam.tgt.copy(camRadio.tgt); }
  computeBookCam(); if (mode === 'book' && !cam.anim) { cam.pos.copy(camBook.pos); cam.tgt.copy(camBook.tgt); }
}
function redrawScreen() { if (screenMode === 'desktop') drawDesktop(); else if (screenMode === 'terminal') drawTerminal(true); else if (screenMode === 'about') drawAbout(); else if (screenMode === 'void') drawVoid(); else if (screenMode === 'credits') drawCredits(); }
addEventListener('resize', onResize);

const clock = new THREE.Clock(); let last = performance.now(), frames = 0, fpsT = 0, lowered = false, lastClockMin = -1;
let looping = false;
function loop(now) {
  if (lite) { looping = false; return; } looping = true; requestAnimationFrame(loop);
  const dt = Math.min(0.05, clock.getDelta()), t = clock.elapsedTime;
  mood += (moodT - mood) * Math.min(1, dt * (moodT > mood ? 0.45 : 0.9)); if (Math.abs(moodT - mood) < 0.002) mood = moodT; const den = 1 - mood;
  radioLockStep(dt);
  applyMood(mood, t); audioTick(mood);
  if (cam.anim) cam.anim.step(dt);
  bookStep(dt); if (BOOK.light) BOOK.light.intensity += ((mode === 'book' ? 0.5 + mood * 0.4 : 0) - BOOK.light.intensity) * Math.min(1, dt * 3);
  yaw += (yawT * (mode === 'room' ? 1 : 0) - yaw) * Math.min(1, dt * 4); pitch += (pitchT * (mode === 'room' ? 1 : 0) - pitch) * Math.min(1, dt * 4);
  applyCamera(t);
  const flare = now < flareT ? (flareT - now) / 700 : 0;
  const fk = 0.82 + Math.sin(t * 3.1) * 0.06 + Math.sin(t * 7.7) * 0.04 + Math.sin(t * 13.3) * 0.025;
  const alive = 1 - smooth(0.2, 0.55, mood), flr = flare * alive;
  L.fire.intensity = (9 * fk + flr * 14) * alive; L.fireFill.intensity = 2.2 * fk * alive;
  flames.forEach(f => { f.visible = alive > 0.01; f.material.uniforms.uTime.value = t; f.material.uniforms.uInt.value = (1 + flr * 0.9) * alive; f.scale.y = (1 + flr * 0.45) * (0.4 + alive * 0.6); });
  coalMat.uniforms.uTime.value = t; coalMat.uniforms.uInt.value = (0.5 + 0.5 * alive + flr) * Math.max(alive, 0.0);
  if (candleFlame) { candleFlame.material.uniforms.uTime.value = t * 1.3; candleFlame.lookAt(camera.position.x, candleFlame.position.y, camera.position.z); }
  candleFlames.forEach((f, i) => { f.visible = den > 0.02; f.material.uniforms.uTime.value = t * 1.3 + i; f.material.uniforms.uInt.value = 1.2 * (1 - smooth(0.12, 0.55, mood)); f.lookAt(camera.position.x, f.position.y, camera.position.z); });
  if (clockHands && mood > 0.5) { clockHands.s.rotation.z = -0.24 * Math.PI * 2; clockHands.m.rotation.z = -(14 / 60) * Math.PI * 2; clockHands.h.rotation.z = -(3.23 / 12) * Math.PI * 2; }
  else if (clockHands) { const d = new Date(), sec = d.getSeconds() + d.getMilliseconds() / 1000, mi = d.getMinutes() + sec / 60, hr = (d.getHours() % 12) + mi / 60; clockHands.s.rotation.z = -sec / 60 * Math.PI * 2; clockHands.m.rotation.z = -mi / 60 * Math.PI * 2; clockHands.h.rotation.z = -hr / 12 * Math.PI * 2; }
  if (auroraMat) auroraMat.uniforms.uTime.value = t;
  if (dustGeo) { const d = dustGeo.attributes.position.array; for (let i = 0; i < dustV.length; i++) { d[i * 3 + 1] += dustV[i] * dt * (Math.sin(t * 0.3 + i) > 0 ? 1 : -0.6); d[i * 3] += Math.sin(t * 0.21 + i * 1.7) * dt * 0.012; if (d[i * 3 + 1] > 2.7) d[i * 3 + 1] = 0.3; if (d[i * 3 + 1] < 0.2) d[i * 3 + 1] = 2.6; } dustGeo.attributes.position.needsUpdate = true; }
  const ea = emberGeo.attributes.position.array; for (let i = 0; i < emberV.length; i++) { ea[i * 3 + 1] += emberV[i] * dt * (1 + flare * 2); ea[i * 3] += Math.sin(t * 2 + i) * dt * 0.03; if (ea[i * 3 + 1] > 0.86) { ea[i * 3 + 1] = 0.18; ea[i * 3] = FIRE.x + rnd(-0.15, 0.15); } } emberGeo.attributes.position.needsUpdate = true;
  const sp = snowOutGeo.attributes.position.array, wind = 0.25 + mood * 1.8, fall = 1 + mood * 1.4;
  for (let i = 0; i < snowV.length; i++) { sp[i * 3 + 1] -= snowV[i] * dt * fall; sp[i * 3] += (Math.sin(t * 0.7 + i) * 0.08 + wind * 0.3) * dt; if (sp[i * 3 + 1] < -0.35) { sp[i * 3 + 1] = 7; sp[i * 3] = rnd(-14, 6); } if (sp[i * 3] > 6) sp[i * 3] = -14; }
  snowOutGeo.attributes.position.needsUpdate = true;
  if (snowIn.visible) { const a = snowInGeo.attributes.position.array; for (let i = 0; i < snowInV.length; i++) { a[i * 3 + 1] -= snowInV[i] * dt; a[i * 3 + 2] += dt * 0.25; a[i * 3] += Math.sin(t + i) * dt * 0.05; if (a[i * 3 + 1] < 0.02) { a[i * 3 + 1] = WIN.y - 0.25 + rnd(0, 0.3); a[i * 3 + 2] = R.z0 + 0.12; a[i * 3] = WIN.x - 0.35 + rnd(-0.2, 0.25); } } snowInGeo.attributes.position.needsUpdate = true; }
  if (flashlight.intensity > 0) { ndc.set(mouseX / innerWidth * 2 - 1, -(mouseY / innerHeight) * 2 + 1); if (IS_TOUCH) ndc.set(0, -0.1); ray.setFromCamera(ndc, camera);
    flashlight.position.copy(camera.position).addScaledVector(right, 0.12).addScaledVector(upV, -0.1); flashlight.target.position.copy(camera.position).addScaledVector(ray.ray.direction, 4); flashlight.target.updateMatrixWorld(); }
  if (steam.geo) { steam.points.visible = mood < 0.4; const s = steam.geo.attributes.position.array; for (let i = 0; i < steam.v.length; i++) { s[i * 3 + 1] += steam.v[i] * dt; s[i * 3] += Math.sin(t * 1.5 + i) * dt * 0.01; if (s[i * 3 + 1] > DESK.top + 0.36) { s[i * 3 + 1] = DESK.top + 0.07; s[i * 3] = CUP.x + rnd(-0.02, 0.02); } } steam.geo.attributes.position.needsUpdate = true; }
  if (foxMixer) foxMixer.update(dt);
  if (fox) { const k = now < foxPokeT ? Math.sin((1 - (foxPokeT - now) / 650) * Math.PI) : 0; fox.position.y = foxBaseY + k * 0.05; fox.scale.setScalar(0.0042 * (1 + k * 0.04)); }
  if (plush) { const k = now < plushPokeT ? Math.sin((1 - (plushPokeT - now) / 550) * Math.PI) : 0; plush.scale.set(plushBase * (1 + k * 0.14), plushBase * (1 - k * 0.16), plushBase * (1 + k * 0.14)); plush.position.y = plushBaseY - 1.857 * plushBase * k * 0.16; }
  if (slug) { const k = now < slugPokeT ? Math.sin((1 - (slugPokeT - now) / 650) * Math.PI) : 0; const br = 1 + Math.sin(t * 1.6) * 0.025; slug.scale.set(1.15 * (1 + k * 0.12), 1.15 * (br - k * 0.1), 1.15 * (1 + k * 0.12)); }
  if (music.playing && audioOn && !music.el) synthTick();
  const pulse = musicPulse(); boomPanelMats.forEach(m => m.emissiveIntensity = 0.15 * (1 - smooth(0.3, 0.6, mood)) + (music.boom ? 0.8 + pulse * 2.5 : 0));
  if (mode === 'room' && !cam.anim) { if (mood > 0.55 && screenMode === 'off') { screenMode = 'idle'; screenOnT = 1; } else if (mood < 0.5 && screenMode === 'idle') { screenMode = 'off'; screenOnT = 0; drawOff(); } }
  if (screenMode === 'idle' && Math.floor(now / 600) !== Math.floor((now - dt * 1000) / 600)) drawIdle(Math.floor(now / 600) % 2 === 0);
  screenOn += (screenOnT - screenOn) * Math.min(1, dt * (screenOnT ? 3 : 6));
  screenMat.uniforms.uOn.value = screenOn; screenMat.uniforms.uTime.value = t; screenMat.uniforms.uBright.value = 1.15 * (1 + mood * 0.25);
  ledMat.emissive.set(screenOnT ? 0x40ff70 : 0xff3020); ledMat.emissiveIntensity = screenOnT ? 2.5 : 0.6;
  L.screen.intensity = screenOn * 0.35 * (1 + mood);
  if (mode === 'zoom' && screenMode === 'boot') { const el = now - bootStart; if (!bootAuthed && el - 320 > TPAUSE) bootStart = now - 320 - TPAUSE; drawBoot(now - bootStart); if (bootAuthed && now - bootStart - 320 > TPAUSE + 2000) finishBoot(); }
  else if (mode === 'zoom' && screenMode === 'welcome') { const el = now - welcomeStart; drawWelcome(el); if (el > 1900) toDesktop(); }
  else if (screenMode === 'terminal' && Math.floor(now / 500) !== Math.floor((now - dt * 1000) / 500)) drawTerminal(Math.floor(now / 500) % 2 === 0);
  else if (screenMode === 'desktop') { const mn = new Date().getMinutes(); if (mn !== lastClockMin) { lastClockMin = mn; drawDesktop(); } }
  if (screenDirty) { screenMat.uniforms.map.value.needsUpdate = true; screenDirty = false; }
  if (secretTimer && now > secretTimer) { secretEl.style.opacity = '0'; secretTimer = 0; }
  updateHover();
  finalPass.uniforms.uTime.value = t; finalPass.uniforms.uVig.value = mode === 'zoom' ? 0.85 : 0.6;
  composer.render(dt);
  frames++; fpsT += dt; if (fpsT > 4 && !lowered && !QS.has('shot')) { const fps = frames / fpsT; if (fps < 32) { lowered = true; if (gtao) gtao.enabled = false; PR = Math.max(1, PR * 0.75); renderer.setPixelRatio(PR); composer.setPixelRatio(PR); onResize(); } frames = 0; fpsT = 0; }
}

async function init() {
  buildRoom(); buildWindow(); buildLights(); buildFireplace(); buildDesk(); buildDecor(); buildCozy(); buildDecor2(); buildSlugcat(); buildSmallLights(); buildAbandoned(); buildHalos();
  drawOff();
  await loadModels();
  try { await Promise.race([Promise.all([document.fonts.load('400 22px "JetBrains Mono"'), document.fonts.load('700 22px "JetBrains Mono"'), document.fonts.load('700 40px "Space Grotesk"'), document.fonts.load('34px "Caveat"')]), new Promise(r => setTimeout(r, 2500))]); } catch (e) { }
  buildPlush(); buildSketchbook(); buildChairSheet(); collectFrost(); buildNotes(); applyAge(0);
  buildPost(); onResize(); camera.position.copy(cam.pos);
  renderer.compile(scene, camera);
  $('load').classList.add('gone');
  window.__ready = true;
  console.log("\n-----------------------------------------------"
    +"\nSnowie_Site has successfully loaded!"
    +"\nVersion: "+Version
    +"\n-----------------------------------------------");
  if (QS.has('shot')) { entered = true; enterEl.style.display = 'none'; $('load').style.display = 'none'; setUI(); }
  if (!lite && !looping) { looping = true; requestAnimationFrame(loop); }
}
if (QS.has('debug')) window.__app = { bookNow: () => { computeBookCam(); cam.anim = null; cam.pos.copy(camBook.pos); cam.tgt.copy(camBook.tgt); mode = 'book'; setUI(); }, flipBook, radioNow: () => { computeRadioCam(); cam.anim = null; cam.pos.copy(camRadio.pos); cam.tgt.copy(camRadio.tgt); mode = 'radio'; setUI(); }, zoomNow: () => { computeZoom(); cam.anim = null; cam.pos.copy(camZoom.pos); cam.tgt.copy(camZoom.tgt); mode = 'zoom'; setUI(); screenOnT = 1; screenOn = 1; booted = true; toDesktop(); }, enterScreen, exitScreen, enterWindow, exitWindow, tap, setMood: v => { moodT = v; mood = v; }, login: () => { bootAuthed = true; bootStart = performance.now() - 320 - TPAUSE; },
  skipBoot: () => finishBoot(), openDock, type: s => { termInput = s; }, run: () => { const v = termInput; termInput = ''; processCmd(v); }, findAll: () => notes.forEach(g => { g.userData.found = true; }), startMusic: () => { music.boom = true; setMusicWant(); }, stopMusic: () => { music.boom = false; setMusicWant(); }, radio: RAD, tune, cam, camera, scene, setYaw: v => { yawT = yaw = v; } };

//// Init
init();
