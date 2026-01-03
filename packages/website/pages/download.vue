<template>
  <div class="download-page">
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <NuxtLink to="/" class="logo-link">
              <h1>Lvce Editor</h1>
            </NuxtLink>
          </div>
          <nav class="header-nav">
            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            <button
              @click="toggleTheme"
              class="theme-toggle"
              :aria-label="
                theme === 'light'
                  ? 'Switch to dark mode'
                  : 'Switch to light mode'
              "
            >
              <img
                v-if="theme === 'light'"
                src="/theme-dark-icon.svg"
                alt="Dark mode"
                class="theme-icon"
              />
              <img
                v-else
                src="/theme-light-icon.svg"
                alt="Light mode"
                class="theme-icon"
              />
            </button>
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
      <section class="download-hero">
        <div class="container">
          <div class="download-hero-content">
            <h2 class="download-hero-title">Download Lvce Editor</h2>
            <p class="download-hero-description">
              Get the latest version of Lvce Editor for your platform. Choose
              the installer that matches your operating system.
            </p>
            <div class="download-section">
              <div class="download-buttons">
                <a
                  :href="downloadUrls.windows"
                  class="download-button windows"
                  rel="download"
                >
                  <img
                    src="/windows-icon.svg"
                    alt="Windows"
                    class="platform-icon"
                  />
                  <div class="button-content">
                    <span class="button-label">Windows</span>
                    <span class="button-subtitle">.exe installer</span>
                  </div>
                </a>
                <a
                  :href="downloadUrls.macos"
                  class="download-button macos"
                  rel="download"
                >
                  <img
                    src="/macos-icon.svg"
                    alt="macOS"
                    class="platform-icon"
                  />
                  <div class="button-content">
                    <span class="button-label">macOS</span>
                    <span class="button-subtitle">.dmg installer</span>
                  </div>
                </a>
                <a
                  :href="downloadUrls.linux"
                  class="download-button linux"
                  rel="download"
                >
                  <img
                    src="/linux-icon.svg"
                    alt="Linux"
                    class="platform-icon"
                  />
                  <div class="button-content">
                    <span class="button-label">Linux</span>
                    <span class="button-subtitle">.deb package</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="download-info">
        <div class="container">
          <div class="info-grid">
            <div class="info-card">
              <h3 class="info-title">System Requirements</h3>
              <ul class="info-list">
                <li>Windows 10 or later</li>
                <li>macOS 10.15 or later</li>
                <li>Linux (Debian/Ubuntu-based distributions)</li>
              </ul>
            </div>
            <div class="info-card">
              <h3 class="info-title">Installation</h3>
              <ul class="info-list">
                <li>Windows: Run the .exe installer</li>
                <li>macOS: Open the .dmg and drag to Applications</li>
                <li>
                  Linux: Install the .deb package with your package manager
                </li>
              </ul>
            </div>
            <div class="info-card">
              <h3 class="info-title">Need Help?</h3>
              <p class="info-description">
                Check out our
                <a
                  href="https://github.com/lvce-editor/lvce-editor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="info-link"
                >
                  GitHub repository
                </a>
                for documentation, issues, and community support.
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

useHead({
  title:
    "Download Lvce Editor - Free Code Editor for Windows, macOS, and Linux",
  meta: [
    {
      name: "description",
      content:
        "Download Lvce Editor for Windows, macOS, or Linux. Get the latest version of our modern, fast, and extensible code editor designed for developers.",
    },
  ],
});

const config = useRuntimeConfig();
const downloadUrls = computed(() =>
  getAllDownloadUrls({
    version: config.public.version,
    releaseUrlBase: config.public.releaseUrlBase,
  }),
);

const { theme, toggleTheme } = useTheme();
</script>

<style scoped>
.download-page {
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
  border-bottom: 1px solid var(--border-color);
  position: relative;
  background: var(--overlay-bg);
  backdrop-filter: blur(20px);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
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

.logo-link {
  text-decoration: none;
  color: inherit;
  display: inline-block;
  transition: opacity 0.2s ease;
}

.logo-link:hover {
  opacity: 0.8;
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.5px;
  font-family: "Inter", sans-serif;
  transition: color 0.3s ease;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.9375rem;
}

.nav-link:hover {
  color: var(--text-primary);
  background: var(--card-bg);
}

.blog-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.9375rem;
}

.blog-link:hover {
  color: var(--text-primary);
  background: var(--card-bg);
}

.github-link {
  display: flex;
  align-items: center;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
  padding: 0.5rem;
  border-radius: 6px;
}

.github-link:hover {
  color: var(--text-primary);
  background: var(--card-bg);
}

.github-icon {
  width: 20px;
  height: 20px;
  transition: opacity 0.2s ease;
  opacity: 0.7;
}

.github-link:hover .github-icon {
  opacity: 1;
}

[data-theme="light"] .github-icon {
  filter: brightness(0);
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.theme-toggle:hover {
  color: var(--text-primary);
  background: var(--card-bg);
}

.theme-icon {
  width: 20px;
  height: 20px;
  transition: opacity 0.2s ease;
  opacity: 0.7;
}

.theme-toggle:hover .theme-icon {
  opacity: 1;
}

[data-theme="dark"] .theme-icon {
  filter: invert(1);
}

.main {
  flex: 1;
}

.download-hero {
  padding: 6rem 0;
  text-align: center;
  position: relative;
}

.download-hero-content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}

.download-hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-family: "Inter", sans-serif;
  letter-spacing: -1.5px;
  transition: color 0.3s ease;
}

.download-hero-description {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 4rem;
  line-height: 1.7;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  transition: color 0.3s ease;
}

.download-section {
  margin-top: 2rem;
}

.download-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.download-button {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 2rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
  font-family: "Inter", sans-serif;
}

.download-button:hover {
  background: var(--card-bg-hover);
  border-color: var(--border-color-hover);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .download-button:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.platform-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  opacity: 0.7;
}

.download-button:hover .platform-icon {
  opacity: 1;
}

[data-theme="dark"] .platform-icon {
  filter: invert(1);
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
  color: var(--text-primary);
  transition: color 0.3s ease;
}

.button-subtitle {
  font-size: 0.875rem;
  color: var(--text-tertiary);
  margin-top: 0.375rem;
  font-family: "JetBrains Mono", monospace;
  transition: color 0.3s ease;
}

.download-info {
  padding: 6rem 0;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.info-card {
  padding: 2.5rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  font-family: "Inter", sans-serif;
}

.info-card:hover {
  background: var(--card-bg-hover);
  border-color: var(--border-color-hover);
  transform: translateY(-2px);
}

.info-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-family: "Inter", sans-serif;
  letter-spacing: -0.3px;
  transition: color 0.3s ease;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-list li {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  transition: color 0.3s ease;
}

.info-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--text-tertiary);
  font-weight: bold;
}

.info-description {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.info-link {
  color: var(--text-primary);
  text-decoration: underline;
  text-decoration-color: var(--text-tertiary);
  text-underline-offset: 3px;
  transition: all 0.2s ease;
}

.info-link:hover {
  text-decoration-color: var(--text-primary);
  color: var(--text-primary);
}

.footer {
  padding: 3rem 0;
  border-top: 1px solid var(--border-color);
  text-align: center;
  background: var(--bg-tertiary);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.footer-text {
  color: var(--text-tertiary);
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

@media (max-width: 768px) {
  .download-hero-title {
    font-size: 2.5rem;
    letter-spacing: -1px;
  }

  .download-hero-description {
    font-size: 1.125rem;
  }

  .download-buttons {
    grid-template-columns: 1fr;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
