<script setup>
import { computed } from 'vue'
import { ArrowUp } from '@lucide/vue'
import { contact, portfolioText } from '../data/portfolio.js'

const props = defineProps({
  language: {
    type: String,
    default: 'en',
  },
})

const text = computed(() => portfolioText[props.language] ?? portfolioText.en)
const currentContact = computed(() => contact[props.language] ?? contact.en)
</script>

<template>
  <footer class="site-footer">
    <div class="page-container footer-content">
      <div class="footer-left">
        <p class="copyright">© {{ new Date().getFullYear() }} Thayane Nascimento</p>
      </div>

      <div class="footer-links">
        <a :href="currentContact.github" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span class="sep">/</span>
        <a :href="currentContact.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span class="sep">/</span>
        <a :href="`mailto:${currentContact.email}`">Email</a>
      </div>

      <a href="#inicio" class="back-top" :aria-label="text.footer.backToTop">
        <span>{{ text.footer.backToTop }}</span>
        <ArrowUp :size="14" aria-hidden="true" />
      </a>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  z-index: 2;
  padding: 32px 0;
   background:
    linear-gradient(
      to top,
      rgb(184, 74, 0) 0%,
      #ff5e00 50%,
      #ff7300 100%
    );
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
}


.footer-links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-links a {
  transition: color 180ms ease;
}

.footer-links a:hover {
  color: var(--color-cobalt-bright);
}

.sep {
  color: rgba(255, 255, 255, 0.15);
}

.back-top {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.74rem;
  transition: color 180ms ease;
}

.back-top:hover {
  color: var(--color-cobalt-bright);
}

@media (max-width: 680px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
