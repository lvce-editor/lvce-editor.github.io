<template>
  <div class="landing-page">
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <h1>Lvce Editor</h1>
          </div>
          <nav class="header-nav">
            <a
              href="https://lvce-editor.github.io/blog/"
              class="blog-link"
              aria-label="Blog"
            >
              Blog
            </a>
            <a
              href="https://github.com/lvce-editor/lvce-editor/"
              target="_blank"
              rel="noopener noreferrer"
              class="github-link"
              aria-label="View on GitHub"
            >
              <img src="/github-icon.svg" alt="GitHub" class="github-icon" />
            </a>
          </nav>
        </div>
      </div>
    </header>

    <main class="main">
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h2 class="hero-title">
              A Modern Code Editor
              <span class="accent-text">Built for Developers</span>
            </h2>
            <p class="hero-description">
              Experience a powerful, fast, and extensible code editor designed
              to enhance your development workflow.
            </p>
            <div class="download-section">
              <h3 class="download-title">Download for your platform</h3>
              <div class="download-buttons">
                <a
                  :href="downloadUrls.windows"
                  class="download-button windows"
                  rel="download"
                >
                  <svg
                    class="platform-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22L10 20.85v-6.7l10 .1z"
                    />
                  </svg>
                  <div class="button-content">
                    <span class="button-label">Windows</span>
                    <span class="button-subtitle">.exe</span>
                  </div>
                </a>
                <a
                  :href="downloadUrls.macos"
                  class="download-button macos"
                  rel="download"
                >
                  <svg
                    class="platform-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                    />
                  </svg>
                  <div class="button-content">
                    <span class="button-label">macOS</span>
                    <span class="button-subtitle">.dmg</span>
                  </div>
                </a>
                <a
                  :href="downloadUrls.linux"
                  class="download-button linux"
                  rel="download"
                >
                  <svg
                    class="platform-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.052-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.204-.45.486-.647.783-.787 1.166-1.689 2.499-1.689 4.494 0 2.723 2.216 4.931 4.94 4.931 2.724 0 4.94-2.208 4.94-4.931 0-1.995-.902-3.328-1.689-4.494-.197-.297-.387-.579-.647-.783a.424.424 0 00-.11-.135c.123-.805-.01-1.657-.287-2.489-.589-1.771-1.831-3.469-2.716-4.521-.75-1.067-1.044-1.928-1.05-3.02-.065-1.491 1.056-5.965-3.17-6.298-.165-.013-.325-.021-.48-.021zm.057 1.527c.12 0 .24.006.36.017 3.528.277 2.527 4.839 2.58 5.963.047.968.26 1.706.885 2.54.756.9 1.785 2.365 2.304 3.924.255.765.36 1.508.26 2.163.42.05.81.22 1.15.48.35.27.6.61.75 1 .3.78.3 1.62 0 2.4-.15.39-.4.73-.75 1-.34.26-.73.43-1.15.48.1.655-.005 1.398-.26 2.163-.519 1.559-1.548 3.024-2.304 3.924-.625.834-.838 1.572-.885 2.54-.053 1.124.948 5.686-2.58 5.963a5.13 5.13 0 01-.36.017c-.12 0-.24-.006-.36-.017-3.528-.277-2.527-4.839-2.58-5.963-.047-.968-.26-1.706-.885-2.54-.756-.9-1.785-2.365-2.304-3.924-.255-.765-.36-1.508-.26-2.163-.42-.05-.81-.22-1.15-.48-.35-.27-.6-.61-.75-1-.3-.78-.3-1.62 0-2.4.15-.39.4-.73.75-1 .34-.26.73-.43 1.15-.48-.1-.655.005-1.398.26-2.163.519-1.559 1.548-3.024 2.304-3.924.625-.834.838-1.572.885-2.54.053-1.124-.948-5.686 2.58-5.963a5.13 5.13 0 01.36-.017z"
                    />
                  </svg>
                  <div class="button-content">
                    <span class="button-label">Linux</span>
                    <span class="button-subtitle">.deb</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="features">
        <div class="container">
          <div class="features-grid">
            <div class="feature-card">
              <h3 class="feature-title">Lightning Fast</h3>
              <p class="feature-description">
                Built for performance with instant startup and smooth editing
                experience.
              </p>
            </div>
            <div class="feature-card">
              <h3 class="feature-title">Extensible</h3>
              <p class="feature-description">
                Customize and extend with plugins to fit your workflow.
              </p>
            </div>
            <div class="feature-card">
              <h3 class="feature-title">Beautiful UI</h3>
              <p class="feature-description">
                Modern, clean interface designed for focus and productivity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <p class="footer-text">
          © 2024 Lvce Editor. Open source and built with ❤️
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getAllDownloadUrls } from "~/utils/downloadUrls";

const config = useRuntimeConfig();
const downloadUrls = computed(() =>
  getAllDownloadUrls({
    version: config.public.version,
    releaseUrlBase: config.public.releaseUrlBase,
  }),
);
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.header {
  padding: 2rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(20px);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.5px;
  font-family: "Inter", sans-serif;
}

.github-link {
  display: flex;
  align-items: center;
  color: #a0a0a0;
  text-decoration: none;
  transition: all 0.2s ease;
  padding: 0.5rem;
  border-radius: 6px;
}

.github-link:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
}

.blog-link {
  color: #a0a0a0;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s ease;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-family: "Inter", sans-serif;
}

.blog-link:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
}

.github-icon {
  width: 20px;
  height: 20px;
  transition: filter 0.2s ease;
}

.github-link:hover .github-icon {
  filter: brightness(0) invert(1);
}

.main {
  flex: 1;
}

.hero {
  padding: 8rem 0;
  text-align: center;
  position: relative;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  letter-spacing: -1.5px;
}

.accent-text {
  color: #a0a0a0;
  display: block;
  margin-top: 0.5rem;
  font-weight: 400;
  font-size: 0.85em;
}

.hero-description {
  font-size: 1.25rem;
  color: #a0a0a0;
  margin-bottom: 4rem;
  line-height: 1.7;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.download-section {
  margin-top: 4rem;
}

.download-title {
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #666666;
  font-family: "JetBrains Mono", monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.download-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 700px;
  margin: 0 auto;
}

.download-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-decoration: none;
  color: #e5e5e5;
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
  font-family: "Inter", sans-serif;
}

.download-button:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.platform-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  opacity: 0.7;
}

.download-button:hover .platform-icon {
  opacity: 1;
}

.button-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.button-label {
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
}

.button-subtitle {
  font-size: 0.75rem;
  color: #666666;
  margin-top: 0.25rem;
  font-family: "JetBrains Mono", monospace;
}

.features {
  padding: 8rem 0;
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  font-family: "Inter", sans-serif;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  letter-spacing: -0.3px;
}

.feature-description {
  color: #a0a0a0;
  line-height: 1.7;
  font-size: 0.95rem;
}

.footer {
  padding: 3rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  background: rgba(10, 10, 10, 0.5);
}

.footer-text {
  color: #666666;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
    letter-spacing: -1px;
  }

  .hero-description {
    font-size: 1.125rem;
  }

  .download-buttons {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
