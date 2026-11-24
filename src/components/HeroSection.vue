<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'    
import { ArrowRight } from '@lucide/vue'
import { portfolioText } from '../data/portfolio.js'
import Cursor from './Cursor.vue';

const props = defineProps({
  presentation: {
    type: Boolean,
    default: false,
  },
  language: {
    type: String,
    default: 'en',
  },
})

const baseUrl = import.meta.env.BASE_URL
const text = computed(() => portfolioText[props.language] ?? portfolioText.en)
const heroTitleLines = computed(() => text.value.hero.title.split(' '))

defineEmits(['continue'])

const scrollY = ref(0)
const isDocked = computed(() => scrollY.value > 70)

function handleScroll() {
  scrollY.value = window.scrollY
}

function handleTitleClick() {
  if (isDocked.value) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const subtitles = computed(() => {
  const subtitle = text.value.hero.subtitle

  return (Array.isArray(subtitle) ? subtitle : [subtitle])
    .filter((role) => typeof role === 'string' && role.trim())
})

const typedSubtitle = ref('')
const showTypewriterCaret = ref(false)
let typingTimer

function startTypewriter() {
  window.clearTimeout(typingTimer)

  const roles = subtitles.value
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  showTypewriterCaret.value = roles.length > 0 && !reducedMotion

  if (reducedMotion || roles.length === 0) {
    typedSubtitle.value = roles[0] ?? ''
    return
  }

  let roleIndex = 0

  function typeRole() {
    const characters = Array.from(roles[roleIndex])
    let length = 0

    function typeNextCharacter() {
      length += 1
      typedSubtitle.value = characters.slice(0, length).join('')

      if (length < characters.length) {
        typingTimer = window.setTimeout(typeNextCharacter, 32)
      } else if (roles.length > 1) {
        typingTimer = window.setTimeout(eraseNextCharacter, 1000)
      }
    }

    function eraseNextCharacter() {
      length -= 1
      typedSubtitle.value = characters.slice(0, length).join('')

      if (length > 0) {
        typingTimer = window.setTimeout(eraseNextCharacter, 20)
      } else {
        roleIndex = (roleIndex + 1) % roles.length
        typingTimer = window.setTimeout(typeRole, 100)
      }
    }

    typeNextCharacter()
  }

  typeRole()
}

watch(subtitles, startTypewriter)

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
  startTypewriter()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.clearTimeout(typingTimer)
})


</script>

<template>
  <section id="inicio" :class="['hero-section', { 'is-presentation': presentation }]">
    <Cursor />
    <!-- Fullscreen Portrait Background -->
    <div class="hero-bg-layer" aria-hidden="true">
      <img
        :src="`${baseUrl}retrato.png`"
        alt="Thayane Nascimento"
        class="hero-bg-img"
        loading="eager"
      />
      <!-- Contrast & Vignette Gradient Overlay -->
      <!-- <div class="hero-overlay-gradient"></div> -->
    </div>

    <!-- Main Container -->
    <div class="hero-container">
      <!-- Top: Docking Title that morphs into the fixed header logo upon scrolling -->
      <div class="hero-top-wrap">
        <!-- Invisible placeholder to preserve layout flow and prevent layout jumps -->
        <div class="hero-title-placeholder" aria-hidden="true">
          {{ heroTitleLines[0] }}<br />{{ heroTitleLines.slice(1).join(' ') }}
        </div>

        <!-- The animated docking title / fixed menu logo -->
        <Teleport to="body">
          <a
            href="#inicio"
            :class="['hero-docking-title', { 'is-docked': isDocked }]"
            :title="isDocked ? (language === 'pt-BR' ? 'Voltar ao topo' : 'Back to top') : undefined"
            @click.prevent="handleTitleClick"
          >
            <span class="docking-text">
              {{ heroTitleLines[0] }}<br />{{ heroTitleLines.slice(1).join(' ') }}
            </span>
          </a>
        </Teleport>
      </div>

      <!-- Bottom: Space-between bar with bold text on left and regular text on right -->
      <div class="hero-bottom-bar">
        <!-- Left: Text below title, bold, with left and bottom margins -->
        <div class="hero-bottom-left">
          <p class="bottom-bold-text">
            {{ language === 'pt-BR'
              ? 'Engenharia de software com foco em arquiteturas escaláveis, plataformas SaaS multi-tenant e interfaces modernas com IA.'
              : 'Software engineering focused on scalable architectures, multi-tenant SaaS platforms, and modern AI-driven interfaces.' }}
          </p>
        </div>

        <!-- Right: Another text, regular (without bold) -->
        <div class="hero-bottom-right">
        <p class="bottom-regular-text typewriter">
        <span class="typewriter-full">{{ text.hero.subtitle }}</span>
        <span class="typewriter-animated" aria-hidden="true">{{ typedSubtitle }}<span
          v-if="typedSubtitle !== text.hero.subtitle"
          class="typewriter-caret"
        ></span></span>
        </p>

          <button
            v-if="presentation"
            class="cyber-btn presentation-btn"
            type="button"
            @click="$emit('continue')"
          >
            <span>{{ text.hero.continue }}</span>
            <ArrowRight :size="16" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.typewriter {
  display: grid;
}

.typewriter-full,
.typewriter-animated {
  grid-area: 1 / 1;
}

.typewriter-full {
  opacity: 0;
  pointer-events: none;
  user-select: none;
}

.typewriter-caret {
  position: relative;
  display: inline-block;
  width: 0;
  height: 0.9em;
  vertical-align: -0.1em;
}

.typewriter-caret::after {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 2px;
  background: currentColor;
  animation: typewriter-blink 700ms step-end infinite;
}

.hero-section {
  position: relative;
  display: flex;
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;
  background-color: var(--color-bg-base);
  isolation: isolate;
  padding: 0;
  cursor: none;
}

.hero-section.is-presentation {
  height: 100vh;
  min-height: 100vh;
}

/* Fullscreen Background Layer */
.hero-bg-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  filter: contrast(1.08) brightness(0.92);
}

/* Hero Container */
.hero-container {
  position: relative;
  z-index: 5;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  min-height: 100svh;
}

/* Top Area & Placeholder */
.hero-top-wrap {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: clamp(28px, 5vh, 52px) clamp(20px, 4vw, 48px) 0;
}

.hero-title-placeholder {
  visibility: hidden;
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6.5vw, 6rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  text-align: center;
  pointer-events: none;
  user-select: none;
}

/* Docking Title Effect:
   - Initial state (scrollY <= 50): Large, centered horizontally at top of the image
   - Docked state (scrollY > 50): Small logo docked at top-left, vertically aligned with hamburger button
*/
.hero-docking-title {
  position: fixed;
  z-index: 49;
  pointer-events: auto;
  text-decoration: none;

  /* Initial centered position at top of hero */
  top: clamp(28px, 5vh, 52px);
  left: 3%;


  font-family: var(--font-display);
  font-size: clamp(2.4rem, 6.2vw, 5.8rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.025em;
  color: #ffffff;
  text-transform: uppercase;
  text-align: left;

  transition:
    top 900ms cubic-bezier(0.19, 1, 0.8, 1),
    left 900ms cubic-bezier(0.19, 1, 0.8, 1),
    transform 900ms cubic-bezier(0.19, 1, 0.8, 1),
    font-size 900ms cubic-bezier(0.19, 1, 0.8, 1),
    letter-spacing 900ms cubic-bezier(0.19, 1, 0.8, 1),
    color 600ms ease;
}

/* Docked State: Top-Left Logo aligned with burger */
.hero-docking-title.is-docked {
  /* Aligned horizontally with the hamburger button center */
  top: calc(clamp(20px, 3.5vw, 36px) + 24px);
  left: clamp(24px, 5vw, 64px);
  transform: translate(0, -50%);

  font-size: clamp(0.95rem, 1.25vw, 1.15rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  cursor: pointer;
}

.hero-docking-title.is-docked:hover {
  color: var(--color-cobalt-bright);
}

.docking-text {
  display: inline-block;
}

/* Bottom Bar: Space Between */
.hero-bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: clamp(24px, 4vw, 64px);
  width: 100%;
  padding-left: clamp(24px, 5vw, 64px);
  padding-right: clamp(24px, 5vw, 64px);
  padding-bottom: clamp(28px, 5vh, 52px);
  align-items: baseline;
}

/* Left Text: Bold with Left and Bottom Margins */
.hero-bottom-left {
  max-width: 540px;
}

.bottom-bold-text {
  font-family: var(--font-sans);
  font-size: clamp(1rem, 1.25vw, 1.25rem);
  font-weight: 700;
  line-height: 1.6;
  color: #ffffff;
}

/* Right Text: Another text, Regular (without bold) */
.hero-bottom-right {
  max-width: 440px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
}

.bottom-regular-text {
  font-family: var(--font-mono);
  font-size: clamp(0.9rem, 1.15vw, 1.12rem);
  font-weight: 400;
  line-height: 1.6;
  color: #c4d0ec;
  text-align: right;
}

.presentation-btn {
  margin-top: 8px;
}


@keyframes typewriter-blink {
  50% {
    opacity: 0;
  }
}

@media (max-width: 767px) {
  .hero-docking-title:not(.is-docked) {
    font-size: clamp(1.25rem, 7.5vw, 2.25rem);
    max-width: 94vw;
  }
}

@media (max-width: 860px) {
  .hero-bottom-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 32px;
  }

  .hero-bottom-right {
    align-items: flex-start;
    text-align: left;
    max-width: 100%;
  }

  .bottom-regular-text {
    text-align: left;
  }
}
</style>
