<script setup>
import { computed, ref } from 'vue'
import { BriefcaseBusiness, CodeXml, Mail, Send } from '@lucide/vue'
import { contact, portfolioText } from '../data/portfolio.js'

const props = defineProps({
  language: {
    type: String,
    default: 'en',
  },
})

const text = computed(() => portfolioText[props.language] ?? portfolioText.en)
const currentContact = computed(() => contact[props.language] ?? contact.en)
const name = ref('')
const email = ref('')
const message = ref('')
const formStatus = ref('')

function submitContact() {
  const subject = encodeURIComponent(`${text.value.contact.emailSubject} ${name.value.trim()}`)
  const body = encodeURIComponent(
    `${message.value.trim()}\n\n${text.value.contact.labels.name}: ${name.value.trim()}\n${text.value.contact.labels.email}: ${email.value.trim()}`,
  )
  formStatus.value = text.value.contact.formStatus
  window.location.href = `mailto:${currentContact.value.email}?subject=${subject}&body=${body}`
}
</script>

<template>
  <section id="contato" class="contact-section section-space">
    <div class="page-container">
      <!-- Section Header -->

      <div class="contact-grid">
        <!-- Left: Copy & Channels -->
        <div class="contact-copy reveal-on-scroll">
          <h2 class="contact-title">{{ text.contact.title }}</h2>
          <p class="contact-intro">{{ text.contact.intro }}</p>

          <div class="channels-list">
            <a :href="`mailto:${currentContact.email}`" class="channel-card reveal-on-scroll reveal-delay-1">
              <Mail :size="20" class="channel-icon" />
              <div class="channel-info">
                <span class="channel-label">E-mail</span>
                <span class="channel-value">{{ currentContact.email }}</span>
              </div>
            </a>

            <a :href="currentContact.linkedin" target="_blank" rel="noopener noreferrer" class="channel-card reveal-on-scroll reveal-delay-2">
              <BriefcaseBusiness :size="20" class="channel-icon" />
              <div class="channel-info">
                <span class="channel-label">LinkedIn</span>
                <span class="channel-value">Thayane Nascimento</span>
              </div>
            </a>

            <a :href="currentContact.github" target="_blank" rel="noopener noreferrer" class="channel-card reveal-on-scroll reveal-delay-3">
              <CodeXml :size="20" class="channel-icon" />
              <div class="channel-info">
                <span class="channel-label">GitHub</span>
                <span class="channel-value">@thayanemenezes</span>
              </div>
            </a>
          </div>
        </div>

        <!-- Right: Clean Form -->
        <div class="form-wrapper reveal-on-scroll reveal-delay-2">
          <form class="contact-form" @submit.prevent="submitContact">
            <div class="form-field">
              <label for="contact-name">{{ text.contact.labels.name }}</label>
              <input
                id="contact-name"
                v-model="name"
                autocomplete="name"
                name="name"
                :placeholder="text.contact.placeholders.name"
                required
                class="clean-input"
              />
            </div>

            <div class="form-field">
              <label for="contact-email">{{ text.contact.labels.email }}</label>
              <input
                id="contact-email"
                v-model="email"
                autocomplete="email"
                name="email"
                :placeholder="text.contact.placeholders.email"
                required
                type="email"
                class="clean-input"
              />
            </div>

            <div class="form-field">
              <label for="contact-message">{{ text.contact.labels.message }}</label>
              <textarea
                id="contact-message"
                v-model="message"
                name="message"
                :placeholder="text.contact.placeholders.message"
                required
                rows="4"
                class="clean-input clean-textarea"
              ></textarea>
            </div>

            <button class="cyber-btn submit-btn" type="submit">
              <span>{{ text.contact.submit }}</span>
              <Send :size="16" aria-hidden="true" />
            </button>

            <p v-if="formStatus" class="form-status" aria-live="polite">{{ formStatus }}</p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  position: relative;
   background:
    linear-gradient(
      to bottom,
      #000000 0%,
      #210f00 20%,
      #592400 45%,
      rgb(184, 74, 0) 70%,
      #ff5e00 90%,
      #ff7300 100%
    );
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

.contact-grid {
  display: grid;
  align-items: start;
  gap: clamp(40px, 6vw, 72px);
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}

.contact-copy {
  display: flex;
  flex-direction: column;
}

.contact-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.6vw, 2.8rem);
  font-weight: 700;
  line-height: 1.15;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.contact-intro {
  margin-top: 16px;
  color: var(--color-text-muted);
  font-size: 1.05rem;
  line-height: 1.7;
}

.channels-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 32px;
}

.channel-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  border-radius: 4px;
  background: rgba(7, 8, 16, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.07);
  transition: all 200ms ease;
}

.channel-card:hover {
  background: rgba(10, 12, 24, 0.9);
  border-color: rgba(0, 71, 255, 0.3);
  transform: translateX(4px);
}

.channel-icon {
  color: var(--color-cobalt-bright);
}

.channel-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.channel-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-dim);
}

.channel-value {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: #ffffff;
  font-weight: 500;
}

/* Form */
.form-wrapper {
  padding: 32px;
  border-radius: 4px;
  background: rgba(7, 8, 16, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.07);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-field label {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #94a3b8;
}

.clean-input {
  width: 100%;
  padding: 13px 16px;
  border-radius: 2px;
  background: rgba(3, 3, 5, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-family: inherit;
  font-size: 0.95rem;
  transition: all 180ms ease;
}

.clean-input::placeholder {
  color: #475569;
}

.clean-input:focus {
  outline: none;
  border-color: var(--color-cobalt-bright);
  box-shadow: 0 0 12px var(--color-cobalt-glow);
}

.clean-textarea {
  resize: vertical;
  min-height: 110px;
}

.submit-btn {
  width: 100%;
  margin-top: 6px;
}

.form-status {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: #93c5fd;
  margin-top: 4px;
}

@media (max-width: 860px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .form-wrapper {
    padding: 24px;
  }
}
</style>
