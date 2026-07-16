export const useTheme = (): {
  initTheme: () => void;
  setTheme: (newTheme: "light" | "dark") => void;
  theme: Readonly<Ref<"light" | "dark">>;
  toggleTheme: () => void;
} => {
  const theme = useState<"light" | "dark">("theme", () => "light");

  const setTheme = (newTheme: "light" | "dark"): void => {
    theme.value = newTheme;
    if (import.meta.client) {
      document.documentElement.dataset.theme = newTheme;
      localStorage.setItem("theme", newTheme);
    }
  };

  const toggleTheme = (): void => {
    setTheme(theme.value === "light" ? "dark" : "light");
  };

  const initTheme = (): void => {
    if (!import.meta.client) {
      return;
    }
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
  };

  return {
    initTheme,
    setTheme,
    theme: readonly(theme),
    toggleTheme,
  };
};
