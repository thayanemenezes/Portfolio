<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { Menu, X } from '@lucide/vue'
import { portfolioText } from '../data/portfolio.js'

const props = defineProps({
  language: {
    type: String,
    default: 'en',
  },
})

const emit = defineEmits(['set-language'])
const isMenuOpen = ref(false)
const activeSection = ref('inicio')
const baseUrl = import.meta.env.BASE_URL
const text = computed(() => portfolioText[props.language] ?? portfolioText.en)
const links = computed(() => text.value.header.links)

let observer

function closeMenu() {
  isMenuOpen.value = false
}

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

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <header class="site-header">
    <nav class="site-nav page-container" :aria-label="text.header.ariaLabel">
      <a class="brand" href="#inicio" @click="closeMenu">
        <img :src="`${baseUrl}logo.png`" alt="Logo" class="brand-image" />
        <span>Thayane Nascimento</span>
      </a>

      <div class="desktop-nav">
        <a
          v-for="link in links"
          :key="link.id"
          :href="link.href"
          :class="['nav-link', { 'is-active': activeSection === link.id }]"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="header-actions">
        <div class="language-switch" aria-label="Language selector">
          <button
            type="button"
            :class="['lang-button', { 'is-active': language === 'en' }]"
            @click="emit('set-language', 'en')"
          >
            EN
          </button>
          <button
            type="button"
            :class="['lang-button', { 'is-active': language === 'pt-BR' }]"
            @click="emit('set-language', 'pt-BR')"
          >
            PT-BR
          </button>
        </div>

        <button
          class="mobile-toggle icon-button"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          :aria-label="isMenuOpen ? text.header.menuClose : text.header.menuOpen"
          @click="isMenuOpen = !isMenuOpen"
        >
          <X v-if="isMenuOpen" :size="21" aria-hidden="true" />
          <Menu v-else :size="21" aria-hidden="true" />
        </button>
      </div>
    </nav>

    <div v-if="isMenuOpen" id="mobile-menu" class="mobile-menu">
      <a
        v-for="link in links"
        :key="link.id"
        :href="link.href"
        :class="['mobile-nav-link', { 'is-active': activeSection === link.id }]"
        @click="closeMenu"
      >
        {{ link.label }}
      </a>
    </div>
  </header>
</template>

<style scoped>
.brand-image{
  width: 40px;
  height: 40px;
}

.site-header {
  position: fixed;
  z-index: 50;
  top: 3px;
  width: 100%;
  background: var(--color-background);
  backdrop-filter: blur(18px);
}

.site-nav {
  display: flex;
  min-height: 76px;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--color-text);
  font-size: 0.93rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.brand-mark {
  display: grid;
  width: 38px;
  aspect-ratio: 1;
  place-items: center;
  border: 1px solid rgb(255 216 77 / 45%);
  border-radius: 50%;
  color: var(--color-signal);
  font-size: 1.1rem;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: clamp(20px, 3vw, 38px);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.language-switch {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px;
  border: 1px solid rgb(172 184 255 / 20%);
  border-radius: 999px;
  background: rgb(19 23 35 / 85%);
}

.lang-button {
  min-width: 46px;
  min-height: 30px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--color-muted);
  cursor: pointer;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  transition: all 180ms ease;
}

.lang-button.is-active {
  background: var(--color-violet);
  color: white;
}

.nav-link,
.mobile-nav-link {
  color: var(--color-muted);
  font-size: 0.92rem;
  transition: color 180ms ease;
}

.nav-link:hover,
.nav-link.is-active,
.mobile-nav-link:hover,
.mobile-nav-link.is-active {
  color: var(--color-text);
}

.nav-link.is-active::after {
  display: block;
  height: 2px;
  margin-top: 6px;
  background: var(--color-signal);
  content: '';
}

.mobile-toggle,
.mobile-menu {
  display: none;
}

.mobile-menu {
  background: transparent;
}

@media (max-width: 760px) {
  .site-header {
    background: transparent;
  }

  .site-nav {
    min-height: 68px;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-toggle {
    display: grid;
    border: 0;
    background: transparent;
    color: #fff;
  }

  .mobile-menu {
    display: grid;
    gap: 4px;
    padding: 12px 20px 18px;
    border-top: 1px solid var(--color-line);
  }

  .mobile-nav-link {
    padding: 10px 12px;
  }
  span{
    display: none;
  }
}
</style>
