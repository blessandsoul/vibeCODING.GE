'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import * as THREE from 'three';
import {
  BloomEffect,
  EffectComposer,
  EffectPass,
  RenderPass,
  SMAAEffect,
  SMAAPreset,
} from 'postprocessing';

/* ─── Types ──────────────────────────────────────────────── */

interface HyperspeedColors {
  roadColor: number;
  islandColor: number;
  background: number;
  shoulderLines: number;
  brokenLines: number;
  leftCars: number[];
  rightCars: number[];
  sticks: number;
}

interface EffectOptions {
  onSpeedUp?: (ev?: Event) => void;
  onSlowDown?: (ev?: Event) => void;
  distortion: string;
  length: number;
  roadWidth: number;
  islandWidth: number;
  lanesPerRoad: number;
  fov: number;
  fovSpeedUp: number;
  speedUp: number;
  carLightsFade: number;
  totalSideLightSticks: number;
  lightPairsPerRoadWay: number;
  shoulderLinesWidthPercentage: number;
  brokenLinesWidthPercentage: number;
  brokenLinesLengthPercentage: number;
  lightStickWidth: [number, number];
  lightStickHeight: [number, number];
  movingAwaySpeed: [number, number];
  movingCloserSpeed: [number, number];
  carLightsLength: [number, number];
  carLightsRadius: [number, number];
  carWidthPercentage: [number, number];
  carShiftX: [number, number];
  carFloorSeparation: [number, number];
  colors: HyperspeedColors;
}

/* ─── Theme presets ──────────────────────────────────────── */

const LIGHT_COLORS: HyperspeedColors = {
  roadColor: 0xf0f0f0,
  islandColor: 0xe8e8e8,
  background: 0xffffff,
  shoulderLines: 0xcccccc,
  brokenLines: 0xcccccc,
  leftCars: [0x7c3aed, 0x8b5cf6, 0xa78bfa],
  rightCars: [0x06b6d4, 0x0ea5e9, 0x38bdf8],
  sticks: 0x8b5cf6,
};

const DARK_COLORS: HyperspeedColors = {
  roadColor: 0x080808,
  islandColor: 0x0a0a0a,
  background: 0x000000,
  shoulderLines: 0x131313,
  brokenLines: 0x131313,
  leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
  rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
  sticks: 0x03b3c3,
};

function getOptions(isDark: boolean): EffectOptions {
  const colors = isDark ? DARK_COLORS : LIGHT_COLORS;
  return {
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors,
  };
}

/* ─── Helpers ────────────────────────────────────────────── */

const random = (base: number | [number, number]) => {
  if (Array.isArray(base)) return Math.random() * (base[1] - base[0]) + base[0];
  return Math.random() * base;
};

const pickRandom = <T,>(arr: T | T[]): T => {
  if (Array.isArray(arr)) return arr[Math.floor(Math.random() * arr.length)];
  return arr;
};

function lerp(current: number, target: number, speed = 0.1, limit = 0.001) {
  let change = (target - current) * speed;
  if (Math.abs(change) < limit) {
    change = target - current;
  }
  return change;
}

function resizeRendererToDisplaySize(
  renderer: THREE.WebGLRenderer,
  setSize: (w: number, h: number, u: boolean) => void,
) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) setSize(width, height, false);
  return needResize;
}

/* ─── Distortions ────────────────────────────────────────── */

const nsin = (val: number) => Math.sin(val) * 0.5 + 0.5;

const turbulentUniforms = {
  uFreq: { value: new THREE.Vector4(4, 8, 8, 1) },
  uAmp: { value: new THREE.Vector4(25, 5, 10, 10) },
};

const distortions: Record<string, {
  uniforms: Record<string, { value: THREE.Vector2 | THREE.Vector3 | THREE.Vector4 }>;
  getDistortion: string;
  getJS?: (progress: number, time: number) => THREE.Vector3;
}> = {
  turbulentDistortion: {
    uniforms: turbulentUniforms,
    getDistortion: `
      uniform vec4 uFreq;
      uniform vec4 uAmp;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      #define PI 3.14159265358979
      float getDistortionX(float progress){
        return (
          cos(PI * progress * uFreq.r + uTime) * uAmp.r +
          pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
        );
      }
      float getDistortionY(float progress){
        return (
          -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
          -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
        );
      }
      vec3 getDistortion(float progress){
        return vec3(
          getDistortionX(progress) - getDistortionX(0.0125),
          getDistortionY(progress) - getDistortionY(0.0125),
          0.
        );
      }
    `,
    getJS: (progress: number, time: number) => {
      const uFreq = turbulentUniforms.uFreq.value;
      const uAmp = turbulentUniforms.uAmp.value;

      const getX = (p: number) =>
        Math.cos(Math.PI * p * uFreq.x + time) * uAmp.x +
        Math.pow(Math.cos(Math.PI * p * uFreq.y + time * (uFreq.y / uFreq.x)), 2) * uAmp.y;

      const getY = (p: number) =>
        -nsin(Math.PI * p * uFreq.z + time) * uAmp.z -
        Math.pow(nsin(Math.PI * p * uFreq.w + time / (uFreq.z / uFreq.w)), 5) * uAmp.w;

      const distortion = new THREE.Vector3(
        getX(progress) - getX(progress + 0.007),
        getY(progress) - getY(progress + 0.007),
        0,
      );
      const lookAtAmp = new THREE.Vector3(-2, -5, 0);
      const lookAtOffset = new THREE.Vector3(0, 0, -10);
      return distortion.multiply(lookAtAmp).add(lookAtOffset);
    },
  },
};

/* ─── Shader fragments ───────────────────────────────────── */

const carLightsFragment = `
  #define USE_FOG;
  ${THREE.ShaderChunk['fog_pars_fragment']}
  varying vec3 vColor;
  varying vec2 vUv;
  uniform vec2 uFade;
  void main() {
    vec3 color = vec3(vColor);
    float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
    gl_FragColor = vec4(color, alpha);
    if (gl_FragColor.a < 0.0001) discard;
    ${THREE.ShaderChunk['fog_fragment']}
  }
`;

const carLightsVertex = `
  #define USE_FOG;
  ${THREE.ShaderChunk['fog_pars_vertex']}
  attribute vec3 aOffset;
  attribute vec3 aMetrics;
  attribute vec3 aColor;
  uniform float uTravelLength;
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vColor;
  #include <getDistortion_vertex>
  void main() {
    vec3 transformed = position.xyz;
    float radius = aMetrics.r;
    float myLength = aMetrics.g;
    float speed = aMetrics.b;
    transformed.xy *= radius;
    transformed.z *= myLength;
    transformed.z += myLength - mod(uTime * speed + aOffset.z, uTravelLength);
    transformed.xy += aOffset.xy;
    float progress = abs(transformed.z / uTravelLength);
    transformed.xyz += getDistortion(progress);
    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    vColor = aColor;
    ${THREE.ShaderChunk['fog_vertex']}
  }
`;

const sideSticksVertex = `
  #define USE_FOG;
  ${THREE.ShaderChunk['fog_pars_vertex']}
  attribute float aOffset;
  attribute vec3 aColor;
  attribute vec2 aMetrics;
  uniform float uTravelLength;
  uniform float uTime;
  varying vec3 vColor;
  mat4 rotationY( in float angle ) {
    return mat4(cos(angle),0,sin(angle),0,
                0,1.0,0,0,
                -sin(angle),0,cos(angle),0,
                0,0,0,1);
  }
  #include <getDistortion_vertex>
  void main(){
    vec3 transformed = position.xyz;
    float width = aMetrics.x;
    float height = aMetrics.y;
    transformed.xy *= vec2(width, height);
    float time = mod(uTime * 60. * 2. + aOffset, uTravelLength);
    transformed = (rotationY(3.14/2.) * vec4(transformed,1.)).xyz;
    transformed.z += - uTravelLength + time;
    float progress = abs(transformed.z / uTravelLength);
    transformed.xyz += getDistortion(progress);
    transformed.y += height / 2.;
    transformed.x += -width / 2.;
    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
    gl_Position = projectionMatrix * mvPosition;
    vColor = aColor;
    ${THREE.ShaderChunk['fog_vertex']}
  }
`;

const sideSticksFragment = `
  #define USE_FOG;
  ${THREE.ShaderChunk['fog_pars_fragment']}
  varying vec3 vColor;
  void main(){
    vec3 color = vec3(vColor);
    gl_FragColor = vec4(color,1.);
    ${THREE.ShaderChunk['fog_fragment']}
  }
`;

const roadMarkings_vars = `
  uniform float uLanes;
  uniform vec3 uBrokenLinesColor;
  uniform vec3 uShoulderLinesColor;
  uniform float uShoulderLinesWidthPercentage;
  uniform float uBrokenLinesWidthPercentage;
  uniform float uBrokenLinesLengthPercentage;
  highp float random(vec2 co) {
    highp float a = 12.9898;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt = dot(co.xy, vec2(a, b));
    highp float sn = mod(dt, 3.14);
    return fract(sin(sn) * c);
  }
`;

const roadMarkings_fragment = `
  uv.y = mod(uv.y + uTime * 0.05, 1.);
  float laneWidth = 1.0 / uLanes;
  float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
  float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;
  float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));
  float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x);
  brokenLines = mix(brokenLines, sideLines, uv.x);
`;

const roadBaseFragment = `
  #define USE_FOG;
  varying vec2 vUv;
  uniform vec3 uColor;
  uniform float uTime;
  #include <roadMarkings_vars>
  ${THREE.ShaderChunk['fog_pars_fragment']}
  void main() {
    vec2 uv = vUv;
    vec3 color = vec3(uColor);
    #include <roadMarkings_fragment>
    gl_FragColor = vec4(color, 1.);
    ${THREE.ShaderChunk['fog_fragment']}
  }
`;

const islandFragment = roadBaseFragment
  .replace('#include <roadMarkings_fragment>', '')
  .replace('#include <roadMarkings_vars>', '');

const roadFragment = roadBaseFragment
  .replace('#include <roadMarkings_fragment>', roadMarkings_fragment)
  .replace('#include <roadMarkings_vars>', roadMarkings_vars);

const roadVertex = `
  #define USE_FOG;
  uniform float uTime;
  ${THREE.ShaderChunk['fog_pars_vertex']}
  uniform float uTravelLength;
  varying vec2 vUv;
  #include <getDistortion_vertex>
  void main() {
    vec3 transformed = position.xyz;
    vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
    transformed.x += distortion.x;
    transformed.z += distortion.y;
    transformed.y += -1. * distortion.z;
    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    ${THREE.ShaderChunk['fog_vertex']}
  }
`;

/* ─── Three.js Scene Classes ─────────────────────────────── */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyOptions = any;

class CarLights {
  webgl: App;
  options: AnyOptions;
  colors: number | number[];
  speed: [number, number];
  fade: THREE.Vector2;
  mesh!: THREE.Mesh;

  constructor(webgl: App, options: AnyOptions, colors: number | number[], speed: [number, number], fade: THREE.Vector2) {
    this.webgl = webgl;
    this.options = options;
    this.colors = colors;
    this.speed = speed;
    this.fade = fade;
  }

  init() {
    const options = this.options;
    const curve = new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1));
    const geometry = new THREE.TubeGeometry(curve, 40, 1, 8, false);
    const instanced = new THREE.InstancedBufferGeometry().copy(geometry as unknown as THREE.InstancedBufferGeometry);
    instanced.instanceCount = options.lightPairsPerRoadWay * 2;

    const laneWidth = options.roadWidth / options.lanesPerRoad;
    const aOffset: number[] = [];
    const aMetrics: number[] = [];
    const aColor: number[] = [];

    let colors: THREE.Color | THREE.Color[];
    if (Array.isArray(this.colors)) {
      colors = this.colors.map((c: number) => new THREE.Color(c));
    } else {
      colors = new THREE.Color(this.colors);
    }

    for (let i = 0; i < options.lightPairsPerRoadWay; i++) {
      const radius = random(options.carLightsRadius);
      const length = random(options.carLightsLength);
      const speed = random(this.speed);

      const carLane = i % options.lanesPerRoad;
      let laneX = carLane * laneWidth - options.roadWidth / 2 + laneWidth / 2;
      const carWidth = random(options.carWidthPercentage) * laneWidth;
      const carShiftX = random(options.carShiftX) * laneWidth;
      laneX += carShiftX;

      const offsetY = random(options.carFloorSeparation) + radius * 1.3;
      const offsetZ = -random(options.length);

      aOffset.push(laneX - carWidth / 2, offsetY, offsetZ);
      aOffset.push(laneX + carWidth / 2, offsetY, offsetZ);

      aMetrics.push(radius, length, speed);
      aMetrics.push(radius, length, speed);

      const color = pickRandom(colors);
      const c = color instanceof THREE.Color ? color : color;
      aColor.push(c.r, c.g, c.b);
      aColor.push(c.r, c.g, c.b);
    }

    instanced.setAttribute('aOffset', new THREE.InstancedBufferAttribute(new Float32Array(aOffset), 3, false));
    instanced.setAttribute('aMetrics', new THREE.InstancedBufferAttribute(new Float32Array(aMetrics), 3, false));
    instanced.setAttribute('aColor', new THREE.InstancedBufferAttribute(new Float32Array(aColor), 3, false));

    const material = new THREE.ShaderMaterial({
      fragmentShader: carLightsFragment,
      vertexShader: carLightsVertex,
      transparent: true,
      uniforms: Object.assign(
        {
          uTime: { value: 0 },
          uTravelLength: { value: options.length },
          uFade: { value: this.fade },
        },
        this.webgl.fogUniforms,
        options.distortion.uniforms,
      ),
    });

    material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace(
        '#include <getDistortion_vertex>',
        options.distortion.getDistortion,
      );
    };

    const mesh = new THREE.Mesh(instanced, material);
    mesh.frustumCulled = false;
    this.webgl.scene.add(mesh);
    this.mesh = mesh;
  }

  update(time: number) {
    (this.mesh.material as THREE.ShaderMaterial).uniforms.uTime.value = time;
  }
}

class LightsSticks {
  webgl: App;
  options: AnyOptions;
  mesh!: THREE.Mesh;

  constructor(webgl: App, options: AnyOptions) {
    this.webgl = webgl;
    this.options = options;
  }

  init() {
    const options = this.options;
    const geometry = new THREE.PlaneGeometry(1, 1);
    const instanced = new THREE.InstancedBufferGeometry().copy(geometry as unknown as THREE.InstancedBufferGeometry);
    const totalSticks = options.totalSideLightSticks;
    instanced.instanceCount = totalSticks;

    const stickoffset = options.length / (totalSticks - 1);
    const aOffset: number[] = [];
    const aColor: number[] = [];
    const aMetrics: number[] = [];

    let colors: THREE.Color | THREE.Color[];
    if (Array.isArray(options.colors.sticks)) {
      colors = options.colors.sticks.map((c: number) => new THREE.Color(c));
    } else {
      colors = new THREE.Color(options.colors.sticks);
    }

    for (let i = 0; i < totalSticks; i++) {
      const width = random(options.lightStickWidth);
      const height = random(options.lightStickHeight);
      aOffset.push((i - 1) * stickoffset * 2 + stickoffset * Math.random());

      const color = pickRandom(colors);
      const c = color instanceof THREE.Color ? color : color;
      aColor.push(c.r, c.g, c.b);
      aMetrics.push(width, height);
    }

    instanced.setAttribute('aOffset', new THREE.InstancedBufferAttribute(new Float32Array(aOffset), 1, false));
    instanced.setAttribute('aColor', new THREE.InstancedBufferAttribute(new Float32Array(aColor), 3, false));
    instanced.setAttribute('aMetrics', new THREE.InstancedBufferAttribute(new Float32Array(aMetrics), 2, false));

    const material = new THREE.ShaderMaterial({
      fragmentShader: sideSticksFragment,
      vertexShader: sideSticksVertex,
      side: THREE.DoubleSide,
      uniforms: Object.assign(
        {
          uTravelLength: { value: options.length },
          uTime: { value: 0 },
        },
        this.webgl.fogUniforms,
        options.distortion.uniforms,
      ),
    });

    material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace(
        '#include <getDistortion_vertex>',
        options.distortion.getDistortion,
      );
    };

    const mesh = new THREE.Mesh(instanced, material);
    mesh.frustumCulled = false;
    this.webgl.scene.add(mesh);
    this.mesh = mesh;
  }

  update(time: number) {
    (this.mesh.material as THREE.ShaderMaterial).uniforms.uTime.value = time;
  }
}

class Road {
  webgl: App;
  options: AnyOptions;
  uTime = { value: 0 };

  constructor(webgl: App, options: AnyOptions) {
    this.webgl = webgl;
    this.options = options;
  }

  createPlane(side: number, _width: number, isRoad: boolean) {
    const options = this.options;
    const segments = 100;
    const geometry = new THREE.PlaneGeometry(
      isRoad ? options.roadWidth : options.islandWidth,
      options.length,
      20,
      segments,
    );

    let uniforms: Record<string, { value: unknown }> = {
      uTravelLength: { value: options.length },
      uColor: { value: new THREE.Color(isRoad ? options.colors.roadColor : options.colors.islandColor) },
      uTime: this.uTime,
    };

    if (isRoad) {
      uniforms = Object.assign(uniforms, {
        uLanes: { value: options.lanesPerRoad },
        uBrokenLinesColor: { value: new THREE.Color(options.colors.brokenLines) },
        uShoulderLinesColor: { value: new THREE.Color(options.colors.shoulderLines) },
        uShoulderLinesWidthPercentage: { value: options.shoulderLinesWidthPercentage },
        uBrokenLinesLengthPercentage: { value: options.brokenLinesLengthPercentage },
        uBrokenLinesWidthPercentage: { value: options.brokenLinesWidthPercentage },
      });
    }

    const material = new THREE.ShaderMaterial({
      fragmentShader: isRoad ? roadFragment : islandFragment,
      vertexShader: roadVertex,
      side: THREE.DoubleSide,
      uniforms: Object.assign(uniforms, this.webgl.fogUniforms, options.distortion.uniforms),
    });

    material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace(
        '#include <getDistortion_vertex>',
        options.distortion.getDistortion,
      );
    };

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.z = -options.length / 2;
    mesh.position.x += (options.islandWidth / 2 + options.roadWidth / 2) * side;
    this.webgl.scene.add(mesh);
    return mesh;
  }

  init() {
    this.createPlane(-1, this.options.roadWidth, true);
    this.createPlane(1, this.options.roadWidth, true);
    this.createPlane(0, this.options.islandWidth, false);
  }

  update(time: number) {
    this.uTime.value = time;
  }
}

class App {
  options: AnyOptions;
  container: HTMLElement;
  renderer: THREE.WebGLRenderer;
  composer: EffectComposer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  fogUniforms: Record<string, { value: unknown }>;
  clock: THREE.Clock;
  disposed = false;

  road: Road;
  leftCarLights: CarLights;
  rightCarLights: CarLights;
  leftSticks: LightsSticks;

  fovTarget: number;
  speedUpTarget = 0;
  speedUp = 0;
  timeOffset = 0;

  private boundResize: () => void;

  constructor(container: HTMLElement, options: AnyOptions) {
    this.options = options;
    this.container = container;

    this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(container.offsetWidth, container.offsetHeight);
    this.composer = new EffectComposer(this.renderer);
    container.append(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      options.fov,
      container.offsetWidth / container.offsetHeight,
      0.1,
      10000,
    );
    this.camera.position.set(0, 8, -5);

    this.scene = new THREE.Scene();
    this.scene.background = null;

    const fog = new THREE.Fog(options.colors.background, options.length * 0.2, options.length * 500);
    this.scene.fog = fog;
    this.fogUniforms = {
      fogColor: { value: fog.color },
      fogNear: { value: fog.near },
      fogFar: { value: fog.far },
    };

    this.clock = new THREE.Clock();
    this.road = new Road(this, options);
    this.leftCarLights = new CarLights(this, options, options.colors.leftCars, options.movingAwaySpeed, new THREE.Vector2(0, 1 - options.carLightsFade));
    this.rightCarLights = new CarLights(this, options, options.colors.rightCars, options.movingCloserSpeed, new THREE.Vector2(1, 0 + options.carLightsFade));
    this.leftSticks = new LightsSticks(this, options);
    this.fovTarget = options.fov;

    this.boundResize = this.onWindowResize.bind(this);
    window.addEventListener('resize', this.boundResize);
  }

  private onWindowResize() {
    const width = this.container.offsetWidth;
    const height = this.container.offsetHeight;
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.composer.setSize(width, height);
  }

  private initPasses() {
    const renderPass = new RenderPass(this.scene, this.camera);
    const bloomPass = new EffectPass(
      this.camera,
      new BloomEffect({ luminanceThreshold: 0.2, luminanceSmoothing: 0, resolutionScale: 1 }),
    );
    const smaaPass = new EffectPass(
      this.camera,
      new SMAAEffect({ preset: SMAAPreset.MEDIUM }),
    );
    renderPass.renderToScreen = false;
    bloomPass.renderToScreen = false;
    smaaPass.renderToScreen = true;
    this.composer.addPass(renderPass);
    this.composer.addPass(bloomPass);
    this.composer.addPass(smaaPass);
  }

  init() {
    this.initPasses();
    const options = this.options;
    this.road.init();
    this.leftCarLights.init();
    this.leftCarLights.mesh.position.setX(-options.roadWidth / 2 - options.islandWidth / 2);
    this.rightCarLights.init();
    this.rightCarLights.mesh.position.setX(options.roadWidth / 2 + options.islandWidth / 2);
    this.leftSticks.init();
    this.leftSticks.mesh.position.setX(-(options.roadWidth + options.islandWidth / 2));
    this.tick();
  }

  private update(delta: number) {
    const lerpPercentage = Math.exp(-(-60 * Math.log2(1 - 0.1)) * delta);
    this.speedUp += lerp(this.speedUp, this.speedUpTarget, lerpPercentage, 0.00001);
    this.timeOffset += this.speedUp * delta;

    const time = this.clock.elapsedTime + this.timeOffset;
    this.rightCarLights.update(time);
    this.leftCarLights.update(time);
    this.leftSticks.update(time);
    this.road.update(time);

    let updateCamera = false;
    const fovChange = lerp(this.camera.fov, this.fovTarget, lerpPercentage);
    if (fovChange !== 0) {
      this.camera.fov += fovChange * delta * 6;
      updateCamera = true;
    }

    if (this.options.distortion.getJS) {
      const dist = this.options.distortion.getJS(0.025, time);
      this.camera.lookAt(
        new THREE.Vector3(
          this.camera.position.x + dist.x,
          this.camera.position.y + dist.y,
          this.camera.position.z + dist.z,
        ),
      );
      updateCamera = true;
    }

    if (updateCamera) this.camera.updateProjectionMatrix();
  }

  private render(delta: number) {
    this.composer.render(delta);
  }

  paused = false;

  pause() {
    this.paused = true;
  }

  resume() {
    if (!this.paused || this.disposed) return;
    this.paused = false;
    this.clock.getDelta(); // flush stale delta
    this.tick();
  }

  dispose() {
    this.disposed = true;
    // Traverse scene and dispose all geometries + materials to free GPU buffers
    this.scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry?.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose());
        } else {
          (obj.material as THREE.Material)?.dispose();
        }
      }
    });
    this.renderer?.dispose();
    this.composer?.dispose();
    this.scene?.clear();
    window.removeEventListener('resize', this.boundResize);
  }

  setSize = (width: number, height: number, updateStyles: boolean) => {
    this.composer.setSize(width, height, updateStyles);
  };

  private tick = () => {
    if (this.disposed || this.paused) return;
    if (resizeRendererToDisplaySize(this.renderer, this.setSize)) {
      const canvas = this.renderer.domElement;
      this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      this.camera.updateProjectionMatrix();
    }
    const delta = this.clock.getDelta();
    this.render(delta);
    this.update(delta);
    requestAnimationFrame(this.tick);
  };
}

/* ─── React Component ────────────────────────────────────── */

export const Hyperspeed = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<App | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clean up previous instance
    if (appRef.current) {
      appRef.current.dispose();
      // Force-release WebGL context to avoid stale GPU state
      const gl = appRef.current.renderer?.domElement?.getContext('webgl2')
        || appRef.current.renderer?.domElement?.getContext('webgl');
      if (gl) {
        const ext = gl.getExtension('WEBGL_lose_context');
        ext?.loseContext();
      }
      appRef.current = null;
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }

    const isDark = resolvedTheme === 'dark';
    const effectOptions = getOptions(isDark);
    const opts = { ...effectOptions, distortion: distortions[effectOptions.distortion] };

    const app = new App(container, opts);
    appRef.current = app;
    app.init();

    // Pause when Hero scrolls out of viewport, free up GPU/CPU
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          app.resume();
        } else {
          app.pause();
        }
      },
      { threshold: 0 },
    );
    observer.observe(container);

    return () => {
      observer.disconnect();
      app.dispose();
      appRef.current = null;
    };
  }, [resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
};
