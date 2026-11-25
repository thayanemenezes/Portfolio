<script setup>
import { onMounted, onUnmounted, ref, reactive } from 'vue'

const sections = [
  {
    id: 'inicio',
    code: 'SYS_01',
    label: 'HERO_CORE',
    status: 'ONLINE',
    coord: '23°33\'S 46°38\'W',
    index: '01',
  },
  {
    id: 'projetos',
    code: 'SYS_02',
    label: 'FEATURED_PROJECTS',
    status: 'BUILD // PROD',
    coord: 'NODE // LAT.02',
    index: '02',
  },
  {
    id: 'apresentacao',
    code: 'SYS_03',
    label: 'PROFILE_SPEC',
    status: 'DATA // VERIFIED',
    coord: 'BIO // PASS',
    index: '03',
  },
  {
    id: 'experiencias',
    code: 'SYS_04',
    label: 'CAREER_TIMELINE',
    status: 'EXP // 06+ YRS',
    coord: 'LOGS // COMPILED',
    index: '04',
  },
  {
    id: 'tecnologias',
    code: 'SYS_05',
    label: 'CORE_STACK',
    status: 'RUNTIME // MODERN_TS',
    coord: 'SYS // OPTIMIZED',
    index: '05',
  },
  {
    id: 'contato',
    code: 'SYS_06',
    label: 'TRANSMISSION_COMM',
    status: 'CHANNEL // READY',
    coord: 'LINK // OPEN',
    index: '06',
  },
]

const availableSections = ref([])
const activeSectionId = ref('inicio')
const isMounted = ref(false)

const sectionMouseStates = reactive({})
const revealedSections = reactive({ inicio: true })

let observer = null
let prefersReducedMotion = false

function initIntersectionObserver() {
  if (typeof IntersectionObserver === 'undefined') return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSectionId.value = entry.target.id
          revealedSections[entry.target.id] = true
        }
      })
    },
    {
      rootMargin: '-15% 0px -22% 0px',
      threshold: 0.15,
    }
  )

  sections.forEach((sec) => {
    const el = document.getElementById(sec.id)
    if (el) {
      observer.observe(el)
    }
  })
}

function handleMouseMove(e) {
  if (prefersReducedMotion) return

  const clientX = e.clientX
  const clientY = e.clientY

  availableSections.value.forEach((sec) => {
    const el = document.getElementById(sec.id)
    if (!el) return

    const rect = el.getBoundingClientRect()
    const margin = 100
    if (
      clientX >= rect.left - margin &&
      clientX <= rect.right + margin &&
      clientY >= rect.top - margin &&
      clientY <= rect.bottom + margin
    ) {
      const xPct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
      const yPct = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100))

      sectionMouseStates[sec.id] = {
        x: xPct.toFixed(1) + '%',
        y: yPct.toFixed(1) + '%',
        active: true,
      }
    } else {
      if (sectionMouseStates[sec.id]?.active) {
        sectionMouseStates[sec.id].active = false
      }
    }
  })
}

onMounted(() => {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Detect which sections exist in DOM
  availableSections.value = sections.filter((sec) => !!document.getElementById(sec.id))

  sections.forEach((sec) => {
    sectionMouseStates[sec.id] = { x: '50%', y: '50%', active: false }
  })

  initIntersectionObserver()

  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  isMounted.value = true
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <!-- Global base background atmosphere (deep black + subtle cyber scanlines) -->
  <div class="cyber-ambient-overlay" aria-hidden="true">
    <div class="ambient-grid"></div>
    <div class="ambient-vignette"></div>
  </div>

  <!-- Teleported Cyber Bounding Boxes for each section -->
  <Teleport
    v-for="sec in availableSections"
    :key="sec.id"
    :to="`#${sec.id}`"
  >
    <div
      :class="[
        'cyber-section-frame',
        `frame-${sec.id}`,
        {
          'is-active': activeSectionId === sec.id,
          'is-revealed': revealedSections[sec.id] || sec.id === 'inicio',
          'has-mouse': sectionMouseStates[sec.id]?.active,
        },
      ]"
      :style="{
        '--mouse-x': sectionMouseStates[sec.id]?.x || '50%',
        '--mouse-y': sectionMouseStates[sec.id]?.y || '50%',
      }"
      aria-hidden="true"
    >
      <!-- Perimeter Bounding Box with Cyber Glow -->
      <div class="frame-box">
        <!-- Dynamic Mouse Spotlight along the frame border -->
        <div class="frame-mouse-glow"></div>

        <!-- Animated Traveling Laser Beam around the Perimeter -->
        <svg class="frame-laser-svg" preserveAspectRatio="none">
          <defs>
            <linearGradient :id="`laser-grad-${sec.id}`" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#475569" stop-opacity="0" />
              <stop offset="40%" stop-color="#94a3b8" stop-opacity="0.12" />
              <stop offset="50%" stop-color="#e2e8f0" stop-opacity="0.32" />
              <stop offset="60%" stop-color="#94a3b8" stop-opacity="0.12" />
              <stop offset="100%" stop-color="#475569" stop-opacity="0" />
            </linearGradient>
          </defs>
          <rect
            class="laser-rect"
            x="0.5"
            y="0.5"
            width="calc(100% - 1px)"
            height="calc(100% - 1px)"
            :stroke="`url(#laser-grad-${sec.id})`"
            vector-effect="non-scaling-stroke"
          />
        </svg>

        <!-- 4 Cyber Corner Brackets [ ┌ ┐ └ ┘ ] with Crosshairs [+] -->
        <div class="corner-bracket corner-tl">
          <span class="corner-cross">+</span>
        </div>
        <div class="corner-bracket corner-tr">
          <span class="corner-cross">+</span>
        </div>
        <div class="corner-bracket corner-bl">
          <span class="corner-cross">+</span>
        </div>
        <div class="corner-bracket corner-br">
          <span class="corner-cross">+</span>
        </div>

        <!-- Top HUD Elements -->
        <div class="frame-hud top-hud">
          <div class="hud-tag">
            <span class="hud-bracket">[</span>
            <span class="hud-code">{{ sec.code }}</span>
            <span class="hud-sep">//</span>
            <span class="hud-label">{{ sec.label }}</span>
            <span class="hud-bracket">]</span>
          </div>

          <div class="hud-status">
            <span
              class="status-led"
              :class="{ 'is-pulsing': activeSectionId === sec.id }"
            ></span>
            <span class="status-text">
              {{ activeSectionId === sec.id ? 'FOCUS // ACTIVE' : sec.status }}
            </span>
          </div>
        </div>

        <!-- Side Ruler Tick Marks (Technical Blueprint) -->
        <div class="frame-ruler ruler-left" aria-hidden="true">
          <span class="tick"></span>
          <span class="tick major"></span>
          <span class="tick"></span>
          <span class="tick-label">25%</span>
          <span class="tick"></span>
          <span class="tick major"></span>
          <span class="tick"></span>
          <span class="tick-label">50%</span>
          <span class="tick"></span>
          <span class="tick major"></span>
          <span class="tick"></span>
          <span class="tick-label">75%</span>
          <span class="tick"></span>
        </div>

        <div class="frame-ruler ruler-right" aria-hidden="true">
          <span class="tick"></span>
          <span class="tick major"></span>
          <span class="tick"></span>
          <span class="tick-label">SYS</span>
          <span class="tick"></span>
          <span class="tick major"></span>
          <span class="tick"></span>
          <span class="tick-label">HUD</span>
          <span class="tick"></span>
        </div>

        <!-- Bottom HUD Elements -->
        <div class="frame-hud bottom-hud">
          <div class="hud-coord">
            <span class="coord-prefix">LOC //</span>
            <span class="coord-val">{{ sec.coord }}</span>
          </div>

          <div class="hud-counter">
            <span class="counter-curr">{{ sec.index }}</span>
            <span class="counter-sep">/</span>
            <span class="counter-total">06</span>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
/* 1. Global Ambient Layer */
.cyber-ambient-overlay {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  background-color: #030305;
}

.ambient-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(circle at 50% 50%, black 30%, transparent 85%);
  -webkit-mask-image: radial-gradient(circle at 50% 50%, black 30%, transparent 85%);
}

.ambient-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 40%,
    rgba(3, 3, 5, 0.2) 0%,
    rgba(3, 3, 5, 0.8) 65%,
    rgba(3, 3, 5, 0.98) 100%
  );
}

/* 2. Cyber Section Bounding Box - 20px da borda total com animação de reveal */
:global(.cyber-section-frame) {
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 20px;
  right: 20px;
  width: calc(100% - 40px);
  transform: translateY(36px) scale(0.99);
  opacity: 0;
  pointer-events: none;
  z-index: 3;
  transition:
    opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1),
    transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
}

:global(.cyber-section-frame.is-revealed),
:global(.hero-section .cyber-section-frame) {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Hero Section adjustments to frame the full viewport contents neatly */
:global(.hero-section .cyber-section-frame) {
  top: 20px;
  bottom: 20px;
  left: 20px;
  right: 20px;
  width: calc(100% - 40px);
  transform: none;
  opacity: 1;
}

@media (max-width: 768px) {
  :global(.cyber-section-frame),
  :global(.hero-section .cyber-section-frame) {
    top: 14px;
    bottom: 14px;
    left: 14px;
    right: 14px;
    width: calc(100% - 28px);
  }
}

@media (max-width: 480px) {
  :global(.cyber-section-frame),
  :global(.hero-section .cyber-section-frame) {
    top: 10px;
    bottom: 10px;
    left: 10px;
    right: 10px;
    width: calc(100% - 20px);
  }
}

/* Frame Box: sutil, acinzentado, sem brilho agressivo */
:global(.frame-box) {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(148, 163, 184, 0.16);
  box-shadow: none;
  transition:
    border-color 0.4s ease,
    box-shadow 0.4s ease;
}

:global(.cyber-section-frame.is-active .frame-box) {
  border-color: rgba(203, 213, 225, 0.28);
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.4);
}

/* Dynamic Interactive Mouse Glow: sutil reflexo de aço */
:global(.frame-mouse-glow) {
  position: absolute;
  inset: -1px;
  pointer-events: none;
  border: 1px solid transparent;
  mask-image: radial-gradient(circle 240px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 25%, transparent 85%);
  -webkit-mask-image: radial-gradient(circle 100px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 25%, transparent 85%);
  background: linear-gradient(135deg, rgba(148, 163, 184, 0.2) 0%, rgba(226, 232, 240, 0.35) 50%, rgba(148, 163, 184, 0.15) 100%);
  opacity: 0;
  transition: opacity 0.35s ease;
}

:global(.cyber-section-frame.has-mouse .frame-mouse-glow) {
  opacity: 1;
}

/* Animated Traveling Laser Beam: sutil filamento acinzentado */
:global(.frame-laser-svg) {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: visible;
}

:global(.laser-rect) {
  fill: none;
  stroke-width: 1;
  stroke-dasharray: 80 440;
  animation: laserTravel 14s linear infinite;
}

:global(.cyber-section-frame.is-active .laser-rect) {
  stroke-width: 1.2;
  stroke-dasharray: 100 420;
  animation-duration: 9s;
}

@keyframes laserTravel {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -1040;
  }
}

/* Corner Brackets [ ┌ ┐ └ ┘ ]: discretas cantoneiras cinza grafite */
:global(.corner-bracket) {
  position: absolute;
  width: 12px;
  height: 12px;
  pointer-events: none;
  border-color: rgba(148, 163, 184, 0.35);
  transition:
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.3s ease;
}

:global(.corner-tl) {
  top: -1px;
  left: -1px;
  border-top: 1.5px solid rgba(148, 163, 184, 0.35);
  border-left: 1.5px solid rgba(148, 163, 184, 0.35);
}

:global(.corner-tr) {
  top: -1px;
  right: -1px;
  border-top: 1.5px solid rgba(148, 163, 184, 0.35);
  border-right: 1.5px solid rgba(148, 163, 184, 0.35);
}

:global(.corner-bl) {
  bottom: -1px;
  left: -1px;
  border-bottom: 1.5px solid rgba(148, 163, 184, 0.35);
  border-left: 1.5px solid rgba(148, 163, 184, 0.35);
}

:global(.corner-br) {
  bottom: -1px;
  right: -1px;
  border-bottom: 1.5px solid rgba(148, 163, 184, 0.35);
  border-right: 1.5px solid rgba(148, 163, 184, 0.35);
}

:global(.cyber-section-frame.is-active .corner-bracket),
:global(.cyber-section-frame.has-mouse .corner-bracket) {
  border-color: rgba(226, 232, 240, 0.6);
  box-shadow: none;
}

:global(.corner-cross) {
  position: absolute;
  font-family: var(--font-mono, monospace);
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
  color: rgba(148, 163, 184, 0.4);
  user-select: none;
}

:global(.corner-tl .corner-cross) {
  top: -6px;
  left: -6px;
}
:global(.corner-tr .corner-cross) {
  top: -6px;
  right: -6px;
}
:global(.corner-bl .corner-cross) {
  bottom: -6px;
  left: -6px;
}
:global(.corner-br .corner-cross) {
  bottom: -6px;
  right: -6px;
}

/* Top HUD Elements: elegante e minimalista */
:global(.frame-hud.top-hud) {
  position: absolute;
  top: -11px;
  left: 20px;
  right: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
}

:global(.hud-tag) {
  background: #06070a;
  padding: 1px 8px;
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 2px;
  font-family: var(--font-mono, monospace);
  font-size: 0.66rem;
  letter-spacing: 0.12em;
  color: rgba(148, 163, 184, 0.7);
  display: inline-flex;
  align-items: center;
  gap: 5px;
  user-select: none;
}

:global(.hud-bracket) {
  color: rgba(148, 163, 184, 0.3);
}

:global(.hud-sep) {
  color: rgba(148, 163, 184, 0.35);
}

:global(.hud-label) {
  color: rgba(226, 232, 240, 0.75);
  font-weight: 500;
}

:global(.hud-status) {
  background: #06070a;
  padding: 1px 8px;
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: 2px;
  font-family: var(--font-mono, monospace);
  font-size: 0.64rem;
  letter-spacing: 0.1em;
  color: rgba(148, 163, 184, 0.55);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  user-select: none;
}

:global(.status-led) {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #64748b;
  box-shadow: none;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

:global(.status-led.is-pulsing) {
  background: #94a3b8;
  box-shadow: 0 0 5px rgba(148, 163, 184, 0.45);
  animation: ledPulse 2.4s ease-in-out infinite;
}

:global(.cyber-section-frame.is-active .status-text) {
  color: rgba(226, 232, 240, 0.85);
  font-weight: 600;
}

@keyframes ledPulse {
  0%, 100% {
    opacity: 0.85;
    transform: scale(1);
  }
  50% {
    opacity: 0.35;
    transform: scale(0.85);
  }
}

/* Bottom HUD Elements */
:global(.frame-hud.bottom-hud) {
  position: absolute;
  bottom: -11px;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
}

:global(.hud-coord) {
  background: #06070a;
  padding: 1px 8px;
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: 2px;
  font-family: var(--font-mono, monospace);
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  color: rgba(148, 163, 184, 0.5);
  user-select: none;
}

:global(.coord-prefix) {
  color: rgba(148, 163, 184, 0.35);
  margin-right: 4px;
}

:global(.hud-counter) {
  background: #06070a;
  padding: 1px 8px;
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: 2px;
  font-family: var(--font-mono, monospace);
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  color: rgba(203, 213, 225, 0.65);
  user-select: none;
}

:global(.counter-curr) {
  color: rgba(226, 232, 240, 0.85);
  font-weight: 600;
}

:global(.counter-sep) {
  color: rgba(148, 163, 184, 0.25);
  margin-inline: 2px;
}

/* Side Ruler Ticks: sutis marcações monocromáticas */
:global(.frame-ruler) {
  position: absolute;
  top: 15%;
  bottom: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  user-select: none;
}

:global(.ruler-left) {
  left: -5px;
}

:global(.ruler-right) {
  right: -5px;
}

:global(.tick) {
  width: 5px;
  height: 1px;
  background: rgba(148, 163, 184, 0.18);
}

:global(.tick.major) {
  width: 8px;
  height: 1px;
  background: rgba(148, 163, 184, 0.32);
}

:global(.tick-label) {
  font-family: var(--font-mono, monospace);
  font-size: 0.55rem;
  letter-spacing: 0.06em;
  color: rgba(148, 163, 184, 0.35);
  transform: rotate(-90deg);
  white-space: nowrap;
}

@media (max-width: 768px) {
  :global(.frame-ruler),
  :global(.frame-hud) {
    display: none !important;
  }
}
</style>
