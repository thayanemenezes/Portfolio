<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const canvasContainer = ref(null)

let THREE
let renderer
let animationFrame
let scene
let camera
let gridLines
let particles
let prefersReducedMotion = false
let isUnmounted = false
let mouseX = 0
let mouseY = 0
let targetMouseX = 0
let targetMouseY = 0

function initThree() {
  if (!canvasContainer.value || typeof window === 'undefined') return

  const width = window.innerWidth
  const height = window.innerHeight

  scene = new THREE.Scene()
  scene.background = new THREE.Color('#030305')
  scene.fog = new THREE.FogExp2('#030305', 0.004)

  camera = new THREE.PerspectiveCamera(65, width / height, 1, 1200)
  camera.position.set(0, 15, 60)
  camera.rotation.x = -0.18

  renderer = new THREE.WebGLRenderer({
    powerPreference: 'high-performance',
    antialias: false,
    alpha: false,
    stencil: false,
    depth: true,
  })

  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  canvasContainer.value.appendChild(renderer.domElement)

  // 1. Perspective Cyber Grid Floor
  createCyberGrid()

  // 2. Floating Cyber Data Particles
  createCyberParticles()

  window.addEventListener('resize', handleResize, { passive: true })
  window.addEventListener('mousemove', handleMouseMove, { passive: true })

  animate(0)
}

function createCyberGrid() {
  const size = 300
  const divisions = 40
  const step = size / divisions
  const half = size / 2

  const positions = []
  const colors = []

  const cobaltColor = new THREE.Color('#0047FF')
  const purpleColor = new THREE.Color('#8B5CF6')
  const darkFade = new THREE.Color('#030305')

  // Generate grid lines
  for (let i = 0; i <= divisions; i++) {
    const coord = -half + i * step
    // Lines along Z (perspective lines)
    positions.push(coord, -10, -half, coord, -10, half)
    // Alternate cobalt and purple
    const baseColor = i % 2 === 0 ? cobaltColor : purpleColor
    colors.push(baseColor.r * 0.4, baseColor.g * 0.4, baseColor.b * 0.4)
    colors.push(baseColor.r, baseColor.g, baseColor.b)

    // Lines along X (horizontal cross lines)
    positions.push(-half, -10, coord, half, -10, coord)
    const zRatio = (coord + half) / size
    const crossColor = cobaltColor.clone().lerp(darkFade, 1 - zRatio)
    colors.push(crossColor.r * 0.6, crossColor.g * 0.6, crossColor.b * 0.6)
    colors.push(crossColor.r * 0.6, crossColor.g * 0.6, crossColor.b * 0.6)
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

  const material = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
  })

  gridLines = new THREE.LineSegments(geometry, material)
  scene.add(gridLines)
}

function createCyberParticles() {
  const count = window.innerWidth < 768 ? 160 : 360
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  const cobalt = new THREE.Color('#0052FF')
  const purple = new THREE.Color('#A855F7')
  const cyan = new THREE.Color('#00D2FF')
  const palette = [cobalt, purple, cyan]

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 160
    positions[i3 + 1] = Math.random() * 80 - 15
    positions[i3 + 2] = (Math.random() - 0.5) * 160

    const col = palette[Math.floor(Math.random() * palette.length)]
    colors[i3] = col.r
    colors[i3 + 1] = col.g
    colors[i3 + 2] = col.b
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  // Soft circle particle texture
  const canvas = document.createElement('canvas')
  canvas.width = 16
  canvas.height = 16
  const ctx = canvas.getContext('2d')
  if (ctx) {
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8)
    grad.addColorStop(0, 'rgba(255,255,255,1)')
    grad.addColorStop(0.35, 'rgba(255,255,255,0.7)')
    grad.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 16, 16)
  }
  const texture = new THREE.CanvasTexture(canvas)

  const material = new THREE.PointsMaterial({
    size: 2.2,
    map: texture,
    vertexColors: true,
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })

  particles = new THREE.Points(geometry, material)
  scene.add(particles)
}

function handleMouseMove(e) {
  targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2
  targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2
}

function handleResize() {
  if (!renderer || !camera) return
  const width = window.innerWidth
  const height = window.innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
}

let lastTime = 0
function animate(time) {
  if (isUnmounted) return
  animationFrame = requestAnimationFrame(animate)

  const delta = (time - lastTime) * 0.001
  lastTime = time

  // Smooth mouse lerp
  mouseX += (targetMouseX - mouseX) * 0.05
  mouseY += (targetMouseY - mouseY) * 0.05

  if (camera) {
    camera.position.x = mouseX * 6
    camera.position.y = 15 - mouseY * 4
    camera.lookAt(0, 0, -40)
  }

  // Animate grid moving forward subtly
  if (gridLines && !prefersReducedMotion) {
    gridLines.position.z = (gridLines.position.z + delta * 8) % (300 / 40)
  }

  // Animate particles drifting
  if (particles && !prefersReducedMotion) {
    const pos = particles.geometry.attributes.position.array
    for (let i = 1; i < pos.length; i += 3) {
      pos[i] += delta * 3
      if (pos[i] > 65) pos[i] = -15
    }
    particles.geometry.attributes.position.needsUpdate = true
    particles.rotation.y += delta * 0.02
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera)
  }
}

onMounted(async () => {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  THREE = await import('three')
  initThree()
})

onUnmounted(() => {
  isUnmounted = true
  cancelAnimationFrame(animationFrame)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouseMove)

  if (renderer) {
    renderer.dispose()
    if (renderer.domElement && renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  }
  if (gridLines) {
    gridLines.geometry.dispose()
    gridLines.material.dispose()
  }
  if (particles) {
    particles.geometry.dispose()
    particles.material.dispose()
  }
})
</script>

<template>
  <div class="cyber-background-container" aria-hidden="true">
    <div ref="canvasContainer" class="canvas-layer"></div>
    <div class="vignette-overlay"></div>
    <div class="cyber-grid-overlay"></div>
  </div>
</template>

<style scoped>
.cyber-background-container {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  background-color: #030305;
}

/* .canvas-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
} */

/* .canvas-layer :deep(canvas) {
  display: block;
  width: 100% !important;
  height: 100% !important;
} */

/* Deep cyberpunk vignette focusing the eye on the center/content */
/* .vignette-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 35%,
    rgba(3, 3, 5, 0.2) 0%,
    rgba(3, 3, 5, 0.75) 60%,
    rgba(3, 3, 5, 0.96) 100%
  );
  pointer-events: none;
} */

/* Subtle digital scanline / cyber texture */
.cyber-grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(0, 71, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 71, 255, 0.03) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(circle at 50% 40%, black 20%, transparent 80%);
  pointer-events: none;
}
</style>
