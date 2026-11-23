<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ArrowDown } from '@lucide/vue';

const x = ref(-100); // Começa fora da tela para não piscar no canto
const y = ref(-100);
const isVisible = ref(false);
const cursorElement = ref(null);
let heroSection;

const atualizarPosicao = (e) => {
  if (!isVisible.value) isVisible.value = true;
  x.value = e.clientX;
  y.value = e.clientY;
};

const esconderCursor = () => {
  isVisible.value = false;
};

onMounted(() => {
  heroSection = cursorElement.value?.parentElement;
  heroSection?.addEventListener('mousemove', atualizarPosicao);
  heroSection?.addEventListener('mouseleave', esconderCursor);
});

onUnmounted(() => {
  heroSection?.removeEventListener('mousemove', atualizarPosicao);
  heroSection?.removeEventListener('mouseleave', esconderCursor);
});
</script>

<template>
  <div
    ref="cursorElement"
    v-show="isVisible"
    class="custom-cursor"
    :style="{
      transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
    }"
  >
    <span class="cursor-text">[ SCROLL</span> 
    <ArrowDown class="cursor-arrow" :size="14" aria-hidden="true" /> ]
  </div>
</template>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none; /* Essencial para permitir cliques através dele */
  z-index: 9999;
  gap: 4px;
  /* Estilo visual (ajuste como preferir) */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;

}

.cursor-arrow {
  font-size: 14px;
  margin-top: 2px;

}

/* Animação sutil na setinha */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(3px); }
}
</style>
