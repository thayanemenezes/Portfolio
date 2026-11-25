<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { portfolioText } from './data/portfolio.js'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import CyberBackground from './components/CyberBackground.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
import TechnologySection from './components/TechnologySection.vue'
import PortfolioSplash from './components/PortfolioSplash.vue'

const LANGUAGE_KEY = 'portfolio-language'
const scrollProgress = ref(0)
const currentLanguage = ref(readLanguagePreference())

function readLanguagePreference() {
  try {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_KEY)
    return savedLanguage && portfolioText[savedLanguage] ? savedLanguage : 'en'
  } catch (error) {
    console.error('Unable to read the selected language.', error)
    return 'en'
  }
}

function setLanguage(language) {
  if (!portfolioText[language]) return
  currentLanguage.value = language
}

watch(
  currentLanguage,
  (language) => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
    }

    try {
      window.localStorage.setItem(LANGUAGE_KEY, language)
    } catch (error) {
      console.error('Unable to save the selected language.', error)
    }
  },
  { immediate: true },
)

function updateScrollProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0
}

let revealObserver = null

function initScrollReveal() {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return

  revealObserver?.disconnect()

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-scale')

  if (prefersReduced) {
    elements.forEach((el) => el.classList.add('is-revealed'))
    return
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
        }
      })
    },
    {
      rootMargin: '0px 0px -20% 0px',
      threshold: 0.15,
    }
  )

  elements.forEach((el) => {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.45 && rect.bottom > 0) {
      el.classList.add('is-revealed')
    } else {
      revealObserver.observe(el)
    }
  })
}

watch(currentLanguage, () => {
  nextTick(() => {
    setTimeout(initScrollReveal, 120)
  })
})

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress, { passive: true })
  updateScrollProgress()
  nextTick(() => {
    setTimeout(initScrollReveal, 150)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
  revealObserver?.disconnect()
})
</script>

<template>
  <PortfolioSplash
    :subtitle="currentLanguage === 'en' ? 'Software Engineer' : 'Engenheira de Software'"

  >
        <CyberBackground />
    <div class="page-shell">


      <div class="scroll-progress" aria-hidden="true">
        <div
          class="scroll-progress-value"
          :style="{ width: `${scrollProgress}%` }"
        ></div>
      </div>

      <SiteHeader :language="currentLanguage" @set-language="setLanguage" />

      <main>
        <HeroSection :language="currentLanguage" />
        <ProjectsSection :language="currentLanguage" />
        <AboutSection :language="currentLanguage" />
        <ExperienceSection :language="currentLanguage" />
        <TechnologySection :language="currentLanguage" />
        <ContactSection :language="currentLanguage" />
      </main>

      <SiteFooter :language="currentLanguage" />
    </div>
  </PortfolioSplash>
</template>

<style>
.page-shell {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: var(--color-bg-base);
  min-height: 100vh;
}

main {
  position: relative;
  z-index: 1;
}

.scroll-progress {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.05);
}

.scroll-progress-value {
  height: 100%;
  background: linear-gradient(90deg, var(--color-cobalt), var(--color-purple-bright));
  box-shadow: 0 0 12px var(--color-cobalt-glow);
  transition: width 80ms linear;
}
</style>