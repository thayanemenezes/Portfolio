<script setup>
import { computed } from 'vue'
import { ArrowRight } from '@lucide/vue'
import { portfolioText } from '../data/portfolio.js'

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

const text = computed(() => portfolioText[props.language] ?? portfolioText.en)

defineEmits(['continue'])
</script>

<template>
  <section
    id="apresentacao"
    :class="['about-section']"
  >
    <div class="page-container">
      <!-- Section Header -->

      <div class="about-grid">
        <!-- Visual Column -->
        <div class="about-visual reveal-on-scroll reveal-scale">
          <div class="image-wrapper">
            <img
              class="about-image"
              src="../assets/thayane.png"
              alt="Thayane Nascimento working at development setup"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Copy Column -->
        <div class="about-copy reveal-on-scroll reveal-delay-2">
          <h2 class="about-heading">{{ text.about.title }}</h2>

          <div class="paragraphs-wrap">
            <p
              v-for="(paragraph, index) in text.about.paragraphs"
              :key="`${paragraph}-${index}`"
              class="about-p"
            >
              {{ paragraph }}
            </p>
          </div>

          <!-- Clean Tech Pills -->
          <div class="tech-chips-row">
            <span class="tech-chip">React / Next.js</span>
            <span class="tech-chip">TypeScript</span>
            <span class="tech-chip">NestJS</span>
            <span class="tech-chip">Multi-tenant SaaS</span>
            <span class="tech-chip">AI Integration</span>
          </div>

          <div v-if="presentation" class="presentation-action">
            <button class="cyber-btn" type="button" @click="$emit('continue')">
              <span>{{ text.about.continue }}</span>
              <ArrowRight :size="16" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
  background:
    linear-gradient(
      to top,
    #000000 0%,
      #150021 20%,
      #400059 45%,
      #8400b8 70%,
      #c300ff 90%,
      #cc00ff 100%
    );
  padding: 140px 0;
}

.about-section.is-presentation {
  min-height: 100vh;
}

.section-top-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
  margin-bottom: 36px;
}

.label-number {
  color: var(--color-cobalt-bright);
  font-weight: 700;
}

.label-divider {
  color: rgba(255, 255, 255, 0.2);
}

.label-title {
  color: #cbd5e1;
}

.about-grid {
  display: grid;
  align-items: start;
  gap: clamp(40px, 5vw, 72px);
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
}

/* Image */
.about-visual {
  width: 100%;
}

.image-wrapper {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  background: rgba(7, 8, 16, 0.8);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
}

.about-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: contrast(1.04);
  transition: transform 300ms ease;
}

.image-wrapper:hover .about-image {
  transform: scale(1.02);
}

/* Copy */
.about-copy {
  display: flex;
  flex-direction: column;
}

.about-heading {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
  font-weight: 700;
  line-height: 1.15;
  color: #ffffff;
  letter-spacing: -0.01em;
  margin-bottom: 24px;
}

.paragraphs-wrap {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.about-p {
  font-size: 1.02rem;
  line-height: 1.75;
}

.tech-chips-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 28px;
}

.tech-chip {
  display: inline-flex;
  padding: 6px 14px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-family: var(--font-mono);
  font-size: 0.76rem;
  color: #cbd5e1;
}

.presentation-action {
  margin-top: 28px;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .about-image {
    height: 380px;
  }
}
</style>
