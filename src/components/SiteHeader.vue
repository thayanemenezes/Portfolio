<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { X } from '@lucide/vue'
import { contact, portfolioText } from '../data/portfolio.js'

const props = defineProps({
  language: {
    type: String,
    default: 'en',
  },
})

const emit = defineEmits(['set-language'])
const isMenuOpen = ref(false)
const activeSection = ref('inicio')
const text = computed(() => portfolioText[props.language] ?? portfolioText.en)
const currentContact = computed(() => contact[props.language] ?? contact.en)
const links = computed(() => text.value.header.links)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

watch(isMenuOpen, (open) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeSection.value = entry.target.id
      })
    },
    { rootMargin: '-40% 0px -52% 0px', threshold: 0 },
  )

  document.querySelectorAll('main > section[id]').forEach((section) => observer.observe(section))
})

onUnmounted(() => {
  observer?.disconnect()
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <header class="site-header">
    <!-- Only the Hamburger Button on the top right, no logo, no glass bar -->
    <div class="burger-anchor">
      <button
        class="hamburger-btn"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-label="Abrir menu de navegação"
        @click="toggleMenu"
      >
        <span class="burger-line"></span>
        <span class="burger-line short"></span>
      </button>
    </div>

    <!-- Fullscreen Menu Overlay (100vw x 100vh) -->
    <Transition name="overlay">
      <div v-if="isMenuOpen" class="fullscreen-menu-overlay" role="dialog" aria-modal="true">
        <div class="menu-ambient-glow" aria-hidden="true"></div>

        <!-- Top row inside overlay with Language Switch and Close Button -->
        <div class="overlay-top page-container">
          <!-- Language Switch inside the menu -->
          <div class="overlay-lang-switch" aria-label="Seletor de idioma">
            <button
              type="button"
              :class="['lang-btn', { 'is-active': language === 'en' }]"
              @click="emit('set-language', 'en')"
            >
              EN
            </button>
            <span class="lang-sep">/</span>
            <button
              type="button"
              :class="['lang-btn', { 'is-active': language === 'pt-BR' }]"
              @click="emit('set-language', 'pt-BR')"
            >
              PT-BR
            </button>
          </div>

          <!-- Close Button -->
          <button
            class="close-btn"
            type="button"
            aria-label="Fechar menu"
            @click="closeMenu"
          >
            <X :size="24" aria-hidden="true" />
          </button>
        </div>

        <!-- Central Menu Navigation with Large Responsive Typography -->
        <nav class="overlay-nav page-container">
          <ul class="menu-list">
            <li
              v-for="(link, index) in links"
              :key="link.id"
              class="menu-item"
            >
              <a
                :href="link.href"
                :class="['menu-link', { 'is-active': activeSection === link.id }]"
                @click="closeMenu"
              >
                <span class="link-text">{{ link.label }}</span>
                <span class="link-arrow" aria-hidden="true">→</span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- Bottom details inside overlay -->
        <div class="overlay-footer page-container">
          <div class="overlay-social">
            <a :href="currentContact.github" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span>/</span>
            <a :href="currentContact.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span>/</span>
            <a :href="`mailto:${currentContact.email}`">E-mail</a>
          </div>

          <div class="overlay-location">
            <span>BRASIL // UTC-3</span>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  background: transparent;
  border: none;
}

.burger-anchor {
  display: flex;
  justify-content: flex-end;
  padding: clamp(20px, 3.5vw, 36px) clamp(20px, 4vw, 48px);
  pointer-events: none;
}

/* Floating Hamburger Button */
.hamburger-btn {
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 6px;
  width: 48px;
  height: 48px;
  padding: 12px;
  background: rgba(7, 8, 16, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 4px;
  cursor: pointer;
  transition: all 220ms ease;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.hamburger-btn:hover {
  background: rgba(35, 38, 44, 0.15);
}

.burger-line {
  display: block;
  width: 22px;
  height: 2px;
  background-color: #ffffff;
  transition: width 200ms ease;
}

.burger-line.short {
  width: 14px;
}

.hamburger-btn:hover .burger-line.short {
  width: 22px;
}

/* Fullscreen Menu Overlay (100vw x 100vh) */
.fullscreen-menu-overlay {
  pointer-events: auto;
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(3, 3, 5, 0.98);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 0 32px;
}

.menu-ambient-glow {
  position: absolute;
  top: 15%;
  right: 15%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 71, 255, 0.18) 0%, transparent 70%);
  filter: blur(100px);
  pointer-events: none;
}

.overlay-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

/* Language switch inside fullscreen menu */
.overlay-lang-switch {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-family: var(--font-mono);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
}

.lang-btn {
  background: transparent;
  border: none;
  color: var(--color-text-dim);
  cursor: pointer;
  padding: 2px 4px;
  font-weight: 600;
  transition: all 180ms ease;
}

.lang-sep {
  color: rgba(255, 255, 255, 0.2);
}

.lang-btn.is-active {
  color: var(--color-orange);
  font-weight: 700;
}

.lang-btn:hover:not(.is-active) {
  color: #ffffff;
}

.close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  transition: all 180ms ease;
}

.close-btn:hover {
  background: var(--color-orange);
  border-color: var(--color-orange);
}

/* Nav List & Large Responsive Fonts */
.overlay-nav {
  display: flex;
  align-items: center;
  padding: 30px 0;
}

.menu-list {
  display: flex;
  flex-direction: column;
  gap: clamp(14px, 2.8vh, 32px);
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.menu-item {
  width: 100%;
}

.menu-link {
  display: inline-flex;
  align-items: baseline;
  gap: clamp(16px, 3vw, 36px);
  color: #94a3b8;
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.05;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  transition: all 220ms cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

.link-number {
  font-family: var(--font-mono);
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: var(--color-orange);
  font-weight: 600;
  opacity: 0.8;
}

.link-arrow {
  font-family: var(--font-mono);
  font-size: clamp(1.4rem, 3vw, 2.4rem);
  color: var(--color-orange);
  opacity: 0;
  transform: translateX(-12px);
  transition: all 220ms ease;
}

.menu-link:hover,
.menu-link.is-active {
  color: #ffffff;
  transform: translateX(10px);
}

.menu-link:hover .link-arrow,
.menu-link.is-active .link-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* Overlay Footer */
.overlay-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  color: var(--color-text-dim);
}

.overlay-social {
  display: flex;
  align-items: center;
  gap: 12px;
}

.overlay-social a {
  color: #cbd5e1;
  transition: color 180ms ease;
}

.overlay-social a:hover {
  color: var(--color-orange);
}

/* Transition */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 280ms ease, transform 280ms ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>
