<script setup>
import { computed } from 'vue'
import { ArrowLeft, ArrowUpRight, Globe } from '@lucide/vue'
import { portfolioText } from '../data/portfolio.js'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  language: {
    type: String,
    default: 'en',
  },
})

defineEmits(['back'])

const text = computed(() => portfolioText[props.language] ?? portfolioText.en)
</script>

<template>
  <div class="case-study page-container" :aria-label="`Case study: ${project.title}`">
    <!-- Back Button -->
    <button class="back-btn" type="button" @click="$emit('back')">
      <ArrowLeft :size="16" aria-hidden="true" />
      <span>{{ text.projectCaseStudy.back }}</span>
    </button>

    <article class="case-panel">
      <!-- Cover -->
      <div class="case-cover-wrap">
        <img class="case-cover" :src="project.detailImage" :alt="project.imageAlt" />
        <div class="cover-gradient"></div>
      </div>

      <div class="case-content">
        <!-- Main Case Content -->
        <div class="case-main">
          <span class="case-cat-label">{{ project.categoryLabel }}</span>
          <h1 class="case-title">{{ project.title }}</h1>
          <p class="case-context">{{ project.context }}</p>

          <div class="case-section-block">
            <h2 class="block-title">{{ text.projectCaseStudy.process }}</h2>
            <p class="block-body">{{ project.process }}</p>
          </div>
        </div>

        <!-- Meta Sidebar -->
        <aside class="case-meta-aside">
          <div class="meta-block">
            <h3 class="meta-label">{{ text.projectCaseStudy.role }}</h3>
            <p class="meta-value">{{ project.role }}</p>
          </div>

          <div class="meta-block">
            <h3 class="meta-label">Stack</h3>
            <p class="meta-value font-mono">{{ project.stack }}</p>
          </div>

          <div class="meta-block">
            <h3 class="meta-label">{{ text.projectCaseStudy.result }}</h3>
            <p class="meta-value">{{ project.result }}</p>
          </div>

          <a
            v-if="project.link"
            class="cyber-btn live-link-btn"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe :size="16" aria-hidden="true" />
            <span>{{ text.projectCaseStudy.link }}</span>
            <ArrowUpRight :size="16" aria-hidden="true" />
          </a>
        </aside>
      </div>
    </article>
  </div>
</template>

<style scoped>
.case-study {
  padding-top: 16px;
  margin-bottom: 60px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 40px;
  padding: 0 16px;
  margin-bottom: 24px;
  border-radius: 4px;
  background: rgba(10, 12, 22, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #cbd5e1;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 180ms ease;
}

.back-btn:hover {
  background: rgba(0, 71, 255, 0.12);
  border-color: var(--color-cobalt-border);
  color: #ffffff;
}

.case-panel {
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(7, 8, 16, 0.85);
  overflow: hidden;
}

.case-cover-wrap {
  position: relative;
  width: 100%;
  height: clamp(260px, 34vw, 420px);
  overflow: hidden;
  background: #020204;
}

.case-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  opacity: 0.88;
}

.cover-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(7, 8, 16, 0.98) 100%);
  pointer-events: none;
}

.case-content {
  display: grid;
  gap: 48px;
  grid-template-columns: minmax(0, 1.35fr) minmax(260px, 0.75fr);
  padding: clamp(28px, 5vw, 52px);
}

.case-main {
  display: flex;
  flex-direction: column;
}

.case-cat-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-cobalt-bright);
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 8px;
}

.case-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 700;
  line-height: 1.15;
  color: #ffffff;
}

.case-context {
  margin-top: 18px;
  color: #cbd5e1;
  font-size: 1.05rem;
  line-height: 1.75;
}

.case-section-block {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.block-title {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
}

.block-body {
  margin-top: 14px;
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.75;
}

.case-meta-aside {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  border-radius: 4px;
  background: rgba(10, 12, 24, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.07);
  height: fit-content;
}

.meta-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.meta-block:last-of-type {
  border-bottom: none;
  padding-bottom: 0;
}

.meta-label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--color-cobalt-bright);
  text-transform: uppercase;
}

.meta-value {
  color: #e2e8f0;
  font-size: 0.95rem;
  line-height: 1.6;
}

.meta-value.font-mono {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: #94a3b8;
}

.live-link-btn {
  margin-top: 8px;
  width: 100%;
}

@media (max-width: 860px) {
  .case-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
