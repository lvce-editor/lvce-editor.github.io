export type Platform = "windows" | "macos" | "linux";

export interface DownloadConfig {
  releaseUrlBase?: string;
  version: string;
}

const DEFAULT_RELEASE_URL_BASE =
  "https://github.com/lvce-editor/lvce-editor/releases/download";

export function getDownloadUrl(
  platform: Platform,
  config: DownloadConfig,
): string {
  const {version} = config;
  const releaseUrlBase =
    config.releaseUrlBase || DEFAULT_RELEASE_URL_BASE;
  const versionTag = version.startsWith("v") ? version : `v${version}`;

  const platformFiles: Record<Platform, string> = {
    linux: `lvce-${versionTag}_amd64.deb`,
    macos: `lvce-${versionTag}_x64.dmg`,
    windows: `lvce-${versionTag}_x64.exe`,
  };

  const filename = platformFiles[platform];
  return `${releaseUrlBase}/${versionTag}/${filename}`;
}

export function getAllDownloadUrls(
  config: DownloadConfig,
): Record<Platform, string> {
  return {
    linux: getDownloadUrl("linux", config),
    macos: getDownloadUrl("macos", config),
    windows: getDownloadUrl("windows", config),
  };
}

