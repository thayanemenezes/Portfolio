<script setup>
import { computed } from 'vue'
import { portfolioText } from '../data/portfolio.js'

const props = defineProps({
  language: {
    type: String,
    default: 'en',
  },
})

const text = computed(() => portfolioText[props.language] ?? portfolioText.en)

const stackCategories = computed(() => [
  {
    title: 'Frontend & UI',
    skills: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'JavaScript', 'TailwindCSS'],
  },
  {
    title: 'Backend & Data',
    skills: ['NestJS', 'Node.js', 'Prisma ORM', 'PostgreSQL', 'RESTful APIs'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Docker', 'AWS', 'Azure DevOps', 'CI/CD', 'Git & GitHub'],
  },
  {
    title: props.language === 'pt-BR' ? 'Especialidades' : 'Specialties',
    skills: ['Multi-tenant SaaS', 'Workflows com IA', 'Edição Multimídia', 'Migrações'],
  },
])

const technologies = [
  { id: 'react', name: 'React' },
  { id: 'nextjs', name: 'Next.js' },
  { id: 'typescript', name: 'TypeScript', mark: 'TS' },
  { id: 'javascript', name: 'JavaScript', mark: 'JS' },
  { id: 'nestjs', name: 'NestJS' },
  { id: 'vue', name: 'Vue.js' },
  { id: 'docker', name: 'Docker' },
  { id: 'aws', name: 'AWS' },
  { id: 'azure-devops', name: 'Azure DevOps' },
  { id: 'python', name: 'Python' },
  { id: 'html', name: 'HTML5', mark: '5' },
  { id: 'css', name: 'CSS3', mark: '3' },
  { id: 'cpp', name: 'C++', mark: 'C++' },
]
</script>

<template>
  <section id="tecnologias" class="technology-section section-space" :aria-label="text.technologies.title">
    <div class="page-container">
      <!-- Section Header -->

      <div class="section-title-wrap">
        <h2 class="section-title">{{ text.technologies.title }}</h2>
      </div>

      <!-- Clean Stack Categories Grid -->
      <div class="stack-categories-grid">
        <div
          v-for="(cat, idx) in stackCategories"
          :key="idx"
          class="stack-block"
        >
          <h3 class="cat-title">{{ cat.title }}</h3>
          <div class="skills-list">
            <span
              v-for="skill in cat.skills"
              :key="skill"
              class="skill-tag"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Infinite Marquee -->
      <div class="technology-marquee-wrap">
        <div class="marquee-track">
          <ul
            v-for="(isDuplicate, groupIndex) in [false, true]"
            :key="groupIndex"
            class="marquee-group"
            :aria-hidden="isDuplicate ? 'true' : null"
          >
            <li
              v-for="tech in technologies"
              :key="`${groupIndex}-${tech.id}`"
              class="marquee-item"
            >
              <span class="tech-name">{{ tech.name }}</span>
              <span class="tech-dot">·</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.technology-section {
  position: relative;
  background-color: var(--color-bg-base);
  border-bottom: 1px solid var(--color-line-cyber);
  overflow: hidden;
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

.section-title-wrap {
  margin-bottom: 40px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.8vw, 3rem);
  font-weight: 700;
  color: #ffffff;
}

/* Categories Grid */
.stack-categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 48px;
}

.stack-block {
  padding: 24px;
  border-radius: 4px;
  background: rgba(7, 8, 16, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.07);
  transition: all 200ms ease;
}

.stack-block:hover {
  background: rgba(10, 12, 24, 0.9);
  border-color: rgba(0, 71, 255, 0.25);
}

.cat-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  display: inline-flex;
  padding: 6px 12px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  font-family: var(--font-mono);
  font-size: 0.76rem;
  color: #cbd5e1;
}

/* Marquee */
.technology-marquee-wrap {
  position: relative;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(4, 5, 10, 0.6);
  mask-image: linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%);
}

.marquee-track {
  display: flex;
  overflow: hidden;
  user-select: none;
}

.marquee-group {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 0 16px;
  list-style: none;
  margin: 0;
  flex-shrink: 0;
  animation: scroll-marquee 28s linear infinite;
}

.marquee-item {
  display: flex;
  align-items: center;
  gap: 32px;
  color: var(--color-text-muted);
}

.tech-name {
  font-family: var(--font-mono);
  font-size: 0.88rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #94a3b8;
  white-space: nowrap;
}

.tech-dot {
  color: var(--color-cobalt-bright);
}

@keyframes scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-group {
    animation: none;
  }
}
</style>
