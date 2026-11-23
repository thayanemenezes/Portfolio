<script setup>
import { computed, ref } from 'vue'
import { ArrowUpRight, ArrowRight } from '@lucide/vue'
import { portfolioText, projects } from '../data/portfolio.js'
import ProjectCaseStudy from './ProjectCaseStudy.vue'

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

defineEmits(['continue'])

const text = computed(() => portfolioText[props.language] ?? portfolioText.en)
const projectList = computed(() => projects[props.language] ?? projects.en)

const selectedProject = ref(null)

function openProject(project) {
  selectedProject.value = project
  window.requestAnimationFrame(() => {
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

function closeProject() {
  selectedProject.value = null
}
</script>

<template>
  <section id="projetos" class="projects-section section-space">
    <!-- Case Study View -->
    <ProjectCaseStudy
      v-if="selectedProject"
      :project="selectedProject"
      :language="language"
      @back="closeProject"
    />

    <!-- Main Grid View -->
    <div v-else class="page-container">
      <!-- Section Header -->

      <div class="projects-header-row">
        <div class="section-title-wrap">
          <h2 class="section-title">{{ text.projects.title }}</h2>
          <p class="section-intro">{{ text.projects.intro }}</p>
        </div>
      </div>

      <!-- Project Cards Grid -->
      <div class="project-grid" aria-live="polite">
        <article
          v-for="project in projectList"
          :key="project.id"
          class="project-card"
          @click="openProject(project)"
        >
          <!-- Image -->
          <div class="card-image-wrap">
            <img :src="project.image" :alt="project.imageAlt" loading="lazy" class="project-img" />
            <div class="image-gradient-shade"></div>
          </div>

          <!-- Card Content -->
          <div class="card-content">
            <div class="card-meta">
              <span class="project-category">{{ project.categoryLabel }}</span>
              <span class="project-role">{{ project.role }}</span>
            </div>

            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-summary">{{ project.summary }}</p>

            <div class="card-stack">
              <span>Stack: {{ project.stack }}</span>
            </div>

            <div class="card-footer-action">
              <span class="action-text">{{ text.projects.viewProject }}</span>
              <ArrowUpRight :size="16" aria-hidden="true" class="action-icon" />
            </div>
          </div>
        </article>
      </div>

      <div v-if="presentation" class="projects-continue">
        <button class="cyber-btn" type="button" @click="$emit('continue')">
          <span>{{ text.projects.continue }}</span>
          <ArrowRight :size="17" aria-hidden="true" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  position: relative;
  background-color: var(--color-bg-base);
  border-bottom: 1px solid var(--color-line-cyber);
  scroll-margin-top: 80px;
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

.projects-header-row {
  margin-bottom: 44px;
}

.section-title-wrap {
  max-width: 680px;
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

/* Project Grid */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 28px;
}

.project-card {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background: rgba(7, 8, 16, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.07);
  cursor: pointer;
  overflow: hidden;
  transition: all 220ms ease;
}

.project-card:hover {
  transform: translateY(-3px);
  background: rgba(10, 12, 24, 0.9);
  border-color: rgba(0, 71, 255, 0.3);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
}

.card-image-wrap {
  position: relative;
  width: 100%;
  height: 230px;
  overflow: hidden;
  background: #020204;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  opacity: 0.85;
  transition: transform 300ms ease, opacity 300ms ease;
}

.project-card:hover .project-img {
  transform: scale(1.03);
  opacity: 0.95;
}

.image-gradient-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(7, 8, 16, 0.95) 100%);
  pointer-events: none;
}

.card-content {
  display: flex;
  flex-direction: column;
  padding: 24px;
  flex: 1;
}

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.project-category {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--color-cobalt-bright);
  text-transform: uppercase;
  font-weight: 600;
}

.project-role {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-text-dim);
}

.card-title {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.25;
}

.card-summary {
  margin-top: 10px;
  color: var(--color-text-muted);
  font-size: 0.94rem;
  line-height: 1.65;
  flex: 1;
}

.card-stack {
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #94a3b8;
  line-height: 1.5;
}

.card-footer-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.action-text {
  font-size: 0.84rem;
  font-weight: 600;
  color: #e2e8f0;
  transition: color 180ms ease;
}

.action-icon {
  color: var(--color-cobalt-bright);
  transition: transform 180ms ease;
}

.project-card:hover .action-text {
  color: var(--color-cobalt-bright);
}

.project-card:hover .action-icon {
  transform: translate(2px, -2px);
}

.projects-continue {
  display: flex;
  justify-content: center;
  margin-top: 44px;
}
</style>
