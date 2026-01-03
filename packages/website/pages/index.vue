<template>
  <div class="landing-page">
    <header class="header">
      <div class="container">
        <div class="logo">
          <h1>Lvce Editor</h1>
        </div>
      </div>
    </header>

    <main class="main">
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h2 class="hero-title">
              A Modern Code Editor
              <span class="gradient-text">Built for Developers</span>
            </h2>
            <p class="hero-description">
              Experience a powerful, fast, and extensible code editor designed
              to enhance your development workflow.
            </p>
            <div class="download-section">
              <h3 class="download-title">Download for your platform</h3>
              <div class="download-buttons">
                <a
                  href="#"
                  class="download-button windows"
                  @click.prevent="handleDownload('windows')"
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
                  href="#"
                  class="download-button macos"
                  @click.prevent="handleDownload('macos')"
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
                  href="#"
                  class="download-button linux"
                  @click.prevent="handleDownload('linux')"
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
                    <span class="button-subtitle">.AppImage</span>
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
              <div class="feature-icon">⚡</div>
              <h3 class="feature-title">Lightning Fast</h3>
              <p class="feature-description">
                Built for performance with instant startup and smooth editing
                experience.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🔌</div>
              <h3 class="feature-title">Extensible</h3>
              <p class="feature-description">
                Customize and extend with plugins to fit your workflow.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🎨</div>
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
const handleDownload = (platform: string): void => {
  // TODO: Replace with actual download URLs
  console.log(`Download for ${platform}`);
  // In production, this would redirect to the actual download URL
  // window.location.href = getDownloadUrl(platform)
};
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.header {
  padding: 2rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #58a6ff;
}

.main {
  flex: 1;
}

.hero {
  padding: 6rem 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #f0f6fc;
}

.gradient-text {
  background: linear-gradient(135deg, #58a6ff 0%, #bc8cff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.25rem;
  color: #8b949e;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.download-section {
  margin-top: 4rem;
}

.download-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #f0f6fc;
}

.download-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
}

.download-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-decoration: none;
  color: #c9d1d9;
  transition: all 0.3s ease;
  cursor: pointer;
}

.download-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.download-button.windows:hover {
  border-color: #0078d4;
}

.download-button.macos:hover {
  border-color: #007aff;
}

.download-button.linux:hover {
  border-color: #fcc624;
}

.platform-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.button-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.button-label {
  font-size: 1.125rem;
  font-weight: 600;
  color: #f0f6fc;
}

.button-subtitle {
  font-size: 0.875rem;
  color: #8b949e;
}

.features {
  padding: 6rem 0;
  background: rgba(255, 255, 255, 0.02);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-4px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #f0f6fc;
}

.feature-description {
  color: #8b949e;
  line-height: 1.6;
}

.footer {
  padding: 3rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.footer-text {
  color: #8b949e;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
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
