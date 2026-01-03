export type Platform = "windows" | "macos" | "linux";

export type DownloadVariant =
  | "windows-x64"
  | "windows-arm"
  | "macos-arm64"
  | "linux-amd64-deb"
  | "linux-arm64-deb"
  | "linux-armhf-deb"
  | "linux-appimage";

export interface DownloadConfig {
  readonly releaseUrlBase?: string;
  readonly version: string;
}

const DEFAULT_RELEASE_URL_BASE =
  "https://github.com/lvce-editor/lvce-editor/releases/download";

export function getDownloadUrl(
  platform: Platform,
  config: DownloadConfig,
): string {
  const { version } = config;
  const releaseUrlBase = config.releaseUrlBase || DEFAULT_RELEASE_URL_BASE;
  const versionTag = version.startsWith("v") ? version : `v${version}`;

  const platformFiles: Record<Platform, string> = {
    linux: `lvce-${versionTag}_amd64.deb`,
    macos: `lvce-${versionTag}_arm64.dmg`,
    windows: `Lvce-Setup-${versionTag}-x64.exe`,
  };

  const filename = platformFiles[platform];
  return `${releaseUrlBase}/${versionTag}/${filename}`;
}

export function getVariantDownloadUrl(
  variant: DownloadVariant,
  config: DownloadConfig,
): string {
  const { version } = config;
  const releaseUrlBase = config.releaseUrlBase || DEFAULT_RELEASE_URL_BASE;
  const versionTag = version.startsWith("v") ? version : `v${version}`;

  const variantFiles: Record<DownloadVariant, string> = {
    "linux-amd64-deb": `lvce-${versionTag}_amd64.deb`,
    "linux-appimage": `lvce-${versionTag}.AppImage`,
    "linux-arm64-deb": `lvce-${versionTag}_arm64.deb`,
    "linux-armhf-deb": `lvce-${versionTag}_armhf.deb`,
    "macos-arm64": `lvce-${versionTag}_arm64.dmg`,
    "windows-arm": `Lvce-Setup-${versionTag}-arm64.exe`,
    "windows-x64": `Lvce-Setup-${versionTag}-x64.exe`,
  };

  const filename = variantFiles[variant];
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

export function getAdditionalDownloadVariants(
  config: DownloadConfig,
): Array<{ label: string; subtitle: string; variant: DownloadVariant }> {
  return [
    {
      label: "Linux AppImage",
      subtitle: ".AppImage",
      variant: "linux-appimage",
    },
    {
      label: "Linux ARM64",
      subtitle: ".deb package",
      variant: "linux-arm64-deb",
    },
    {
      label: "Linux ARMHF",
      subtitle: ".deb package",
      variant: "linux-armhf-deb",
    },
    {
      label: "Windows ARM",
      subtitle: ".exe installer",
      variant: "windows-arm",
    },
  ];
}
