<script setup>
import { computed } from 'vue'
import { Download } from '@lucide/vue'
import { experiences, portfolioText } from '../data/portfolio.js'

const props = defineProps({
  language: {
    type: String,
    default: 'en',
  },
})

const baseUrl = import.meta.env.BASE_URL
const text = computed(() => portfolioText[props.language] ?? portfolioText.en)
const experienceList = computed(() => experiences[props.language] ?? experiences.en)
</script>

<template>
  <section id="experiencias" class="experience-section section-space">
    <div class="page-container">
      <!-- Section Header -->

      <div class="section-header-row">
        <div class="section-title-wrap">
          <h2 class="section-title">{{ text.experience.title }}</h2>
          <p class="section-intro">{{ text.experience.intro }}</p>
        </div>

        <a
          class="cyber-btn cyber-btn-secondary download-btn"
          :href="`${baseUrl}THAYANE%20-%20RESUME.pdf`"
          download="Thayane-Nascimento-Curriculo.pdf"
        >
          <Download :size="16" aria-hidden="true" />
          <span>{{ text.experience.download }}</span>
        </a>
      </div>

      <!-- Experience List -->
      <div class="experience-timeline">
        <article
          v-for="(experience, index) in experienceList"
          :key="`${experience.company}-${index}`"
          class="experience-card"
        >
          <div class="card-left">
            <span class="period-text">{{ experience.period }}</span>
            <span class="company-name">{{ experience.company }}</span>
          </div>

          <div class="card-right">
            <h3 class="role-title">{{ experience.role }}</h3>
            <p class="role-desc">{{ experience.description }}</p>
            <div class="result-box">
              <span class="result-label">{{ language === 'pt-BR' ? 'Impacto:' : 'Impact:' }}</span>
              <span class="result-text">{{ experience.result }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  position: relative;
  background-color: var(--color-bg-base);
  border-bottom: 1px solid var(--color-line-cyber);
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
  margin-bottom: 32px;
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

.section-header-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 44px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.8vw, 3rem);
  font-weight: 700;
  line-height: 1.1;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.section-intro {
  margin-top: 14px;
  color: var(--color-text-muted);
  font-size: 1.05rem;
  line-height: 1.65;
}

.download-btn {
  flex-shrink: 0;
}

/* Timeline Cards */
.experience-timeline {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.experience-card {
  display: grid;
  grid-template-columns: minmax(200px, 0.7fr) minmax(0, 1.6fr);
  gap: 36px;
  padding: clamp(24px, 3.5vw, 36px);
  border-radius: 4px;
  background: rgba(7, 8, 16, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.07);
  transition: all 220ms ease;
}

.experience-card:hover {
  background: rgba(10, 12, 24, 0.9);
  border-color: rgba(0, 71, 255, 0.25);
}

.card-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.period-text {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-cobalt-bright);
  font-weight: 600;
}

.company-name {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: #ffffff;
  font-weight: 600;
}

.card-right {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.role-title {
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 1.8vw, 1.5rem);
  font-weight: 700;
  color: #ffffff;
}

.role-desc {
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.7;
}

.result-box {
  margin-top: 4px;
  display: flex;
  gap: 8px;
  font-size: 0.95rem;
  line-height: 1.6;
}

.result-label {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-cobalt-bright);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  flex-shrink: 0;
  padding-top: 2px;
}

.result-text {
  color: #d1d9ec;
}

@media (max-width: 860px) {
  .section-header-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .experience-card {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
