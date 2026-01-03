<template>
  <div class="iframe-wrapper">
    <!-- <div v-if="!isLoaded" class="iframe-placeholder"></div> -->
    <iframe
      :src="src"
      :title="title"
      :allow="allow"
      loading="lazy"
      class="iframe"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  src: string;
  title: string;
  allow?: string;
  height?: string;
}

withDefaults(defineProps<Props>(), {
  allow: "",
  height: "600px",
});

const isLoaded = ref(false);
</script>

<style scoped>
.iframe-wrapper {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  background: var(--card-bg);
  transition: all 0.3s ease;
}

[data-theme="dark"] .iframe-wrapper {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.iframe-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: v-bind(height);
  background: #e5e7eb;
  display: block;
  z-index: 1;
}

[data-theme="dark"] .iframe-placeholder {
  background: #374151;
}

.iframe {
  width: 100%;
  height: v-bind(height);
  border: none;
  display: block;
  background: var(--bg-primary);
  opacity: 0;
  animation: fadeIn 0.3s ease-in forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .iframe-placeholder,
  .iframe {
    height: 500px;
  }
}
</style>
