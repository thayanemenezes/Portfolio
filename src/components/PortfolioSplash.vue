<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const SPLASH_SESSION_KEY = 'portfolio-splash-seen'

defineProps({
  skipLabel: { type: String, default: 'Pular abertura' },
})
const emit = defineEmits(['finished'])

const active = ref(false)
const overlay = ref(null)
const artwork = ref(null)
let motion
let frame
let fallbackTimer

function cleanup() {
  cancelAnimationFrame(frame)
  clearTimeout(fallbackTimer)
  overlay.value?.close()
}

function finish() {
  if (!active.value) return
  cleanup()
  active.value = false
  emit('finished')
}

// Each symbol uses four strokes. The same strokes become four parts of the chip.
const symbols = [
  [ // Robot
    [[-27,-14],[-20,-21],[20,-21],[27,-14],[27,18],[20,24],[-20,24],[-27,18],[-27,-14]],
    [[0,-21],[0,-34],[9,-34]],
    [[-16,-3],[-8,-3]],
    [[8,-3],[16,-3]],
  ],
  [ // Heart
    [[0,26],[-21,9],[-29,-4],[-28,-15],[-20,-23],[-10,-24],[0,-15],[10,-24],[20,-23],[28,-15],[29,-4],[21,9],[0,26]],
    [[-21,0],[-10,0],[-5,-8],[2,9],[8,0],[21,0]],
    [[-15,-15],[-12,-17]],
    [[13,-16],[16,-15]],
  ],
  [ // Brain
    [[0,25],[-10,28],[-20,21],[-20,14],[-29,8],[-29,-4],[-23,-10],[-21,-20],[-11,-27],[0,-24],[11,-27],[21,-20],[23,-10],[29,-4],[29,8],[20,14],[20,21],[10,28],[0,25]],
    [[0,-24],[0,25]],
    [[-9,-15],[-15,-11],[-15,-4],[-8,1],[-9,10],[-16,13]],
    [[9,-15],[15,-11],[15,-4],[8,1],[9,10],[16,13]],
  ],
  [ // Code tag
    [[-10,-16],[-29,0],[-10,16]],
    [[10,-16],[29,0],[10,16]],
    [[7,-25],[-7,25]],
    [[-5,0],[5,0]],
  ],
]

const chip = [
  [[[-31,0],[-31,-23],[-23,-31],[0,-31]], [[-46,-17],[-31,-17]], [[-46,-6],[-31,-6]], [[-16,-46],[-16,-31]]],
  [[[0,-31],[23,-31],[31,-23],[31,0]], [[31,-17],[46,-17]], [[31,-6],[46,-6]], [[16,-46],[16,-31]]],
  [[[-31,0],[-31,23],[-23,31],[0,31]], [[-46,17],[-31,17]], [[-46,6],[-31,6]], [[-16,31],[-16,46]]],
  [[[0,31],[23,31],[31,23],[31,0]], [[31,17],[46,17]], [[31,6],[46,6]], [[16,31],[16,46]]],
]

function sampleStroke(points) {
  const distances = [0]
  for (let i = 1; i < points.length; i++) {
    distances.push(distances[i - 1] + Math.hypot(
      points[i][0] - points[i - 1][0],
      points[i][1] - points[i - 1][1],
    ))
  }
  let segment = 1
  return Array.from({ length: 65 }, (_, index) => {
    const target = distances.at(-1) * index / 64
    while (segment < points.length - 1 && distances[segment] < target) segment++
    const fraction = (target - distances[segment - 1]) /
      (distances[segment] - distances[segment - 1])
    return points[segment - 1].map((value, axis) =>
      value + (points[segment][axis] - value) * fraction,
    )
  })
}

const clamp = (value) => Math.min(1, Math.max(0, value))
const ease = (value) => value * value * (3 - 2 * value)

function animate() {
  if (!active.value) return
  const dialog = overlay.value
  const canvas = artwork.value
  const ctx = canvas?.getContext('2d')
  if (!ctx) {
    finish()
    return
  }

  const glyphs = symbols.map((symbol) => symbol.map(sampleStroke))
  const chipParts = chip.map((part) => part.map(sampleStroke))
  const start = performance.now()
  const colors = ['#6cf1ff', '#ed96ff', '#a7a4ff', '#77bcff']

  function draw(now) {
    const seconds = (now - start) / 1000
    if (seconds >= 5) {
      finish()
      return
    }
    // Fade the artwork to black, hold briefly, then reveal the site.
    canvas.style.opacity = String(1 - ease(clamp((seconds - 3.55) / 0.7)))
    dialog.style.opacity = String(1 - ease(clamp((seconds - 4.3) / 0.7)))

    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const ratio = Math.min(window.devicePixelRatio || 1, 2)
    const pixelsWide = Math.round(width * ratio)
    const pixelsHigh = Math.round(height * ratio)
    if (canvas.width !== pixelsWide || canvas.height !== pixelsHigh) {
      canvas.width = pixelsWide
      canvas.height = pixelsHigh
    }
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    ctx.clearRect(0, 0, width, height)
    ctx.translate(width / 2, height / 2)
    const scale = Math.min(width / 370, height / 280, 1.75)
    ctx.scale(scale, scale)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.lineWidth = 2.6
    ctx.shadowBlur = 10

    const convergence = ease(clamp((seconds - 2.65) / 0.65))
    const steps = Math.min(2, Math.floor(Math.max(0, seconds - .7) / .9))
    const morph = ease(clamp((seconds - .7 - steps * .9) / .42))
    const swap = seconds < .7 || steps === 2 ? 0 : morph

    for (let index = 0; index < glyphs.length; index++) {
      const from = glyphs[(index + steps) % glyphs.length]
      const to = glyphs[(index + steps + 1) % glyphs.length]
      const x = (index % 2 ? 1 : -1) * 57 * (1 - convergence)
      const y = (index < 2 ? -1 : 1) * 50 * (1 - convergence)
      ctx.globalAlpha = .25 + .75 * ease(clamp((seconds - index * .095) / .32))
      ctx.strokeStyle = colors[index]
      ctx.shadowColor = colors[index]

      for (let stroke = 0; stroke < from.length; stroke++) {
        ctx.beginPath()
        for (let indexOfPoint = 0; indexOfPoint < from[stroke].length; indexOfPoint++) {
          const [ax, ay] = from[stroke][indexOfPoint]
          const [bx, by] = to[stroke][indexOfPoint]
          const [cx, cy] = chipParts[index][stroke][indexOfPoint]
          const px = x + (ax + (bx - ax) * swap) * (1 - convergence) + cx * convergence
          const py = y + (ay + (by - ay) * swap) * (1 - convergence) + cy * convergence
          if (indexOfPoint === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.stroke()
      }
    }

    ctx.globalAlpha = convergence
    ctx.strokeStyle = '#e5d9ff'
    ctx.shadowColor = '#aa72ff'
    ctx.beginPath()
    ctx.moveTo(0, -13)
    ctx.lineTo(13, 0)
    ctx.lineTo(0, 13)
    ctx.lineTo(-13, 0)
    ctx.closePath()
    ctx.stroke()
    frame = requestAnimationFrame(renderFrame)
  }

  function renderFrame(now) {
    try {
      draw(now)
    } catch (error) {
      console.error('Unable to draw the portfolio splash.', error)
      finish()
    }
  }

  if (!canvas.clientWidth || !canvas.clientHeight) {
    finish()
    return
  }

  draw(start)
}

function handleMotion(event) {
  if (event.matches) finish()
}

onMounted(async () => {
  motion = window.matchMedia('(prefers-reduced-motion: reduce)')

  if (motion.matches) {
    emit('finished')
    return
  }

  try {
    if (window.sessionStorage.getItem(SPLASH_SESSION_KEY)) {
      emit('finished')
      return
    }

    window.sessionStorage.setItem(SPLASH_SESSION_KEY, '1')
  } catch {
    // Se o armazenamento estiver indisponível, segue com a abertura.
  }

  motion.addEventListener('change', handleMotion)
  active.value = true
  fallbackTimer = window.setTimeout(finish, 5400)

  await nextTick()
  if (!active.value || !overlay.value) return

  try {
    overlay.value.showModal()
    animate()
  } catch (error) {
    console.error('Unable to start the portfolio splash.', error)
    finish()
  }
})

onBeforeUnmount(() => {
  cleanup()
  motion?.removeEventListener('change', handleMotion)
})
</script>

<template>
  <slot />

  <Teleport to="body">
    <dialog
      v-if="active"
      ref="overlay"
      class="portfolio-splash"
      style="position: fixed; inset: 0; width: 100%; height: 100%; max-width: none; max-height: none; margin: 0; padding: 0; border: 0; overflow: hidden; background: #000; transition: none"
      aria-label="Portfolio"
      @cancel.prevent="finish"
    >
      <canvas
        ref="artwork"
        style="position: absolute; inset: 0; display: block; width: 100%; height: 100%; background: radial-gradient(ellipse at 50% 50%, #21123d, #080810 60%); transition: none"
        aria-hidden="true"
      ></canvas>
    </dialog>
  </Teleport>
</template>

<style scoped>
.portfolio-splash::backdrop {
  background: transparent;
}
</style>
