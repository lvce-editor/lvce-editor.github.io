export const useTheme = () => {
  const theme = useState<"light" | "dark">("theme", () => "light");

  const setTheme = (newTheme: "light" | "dark"): void => {
    theme.value = newTheme;
    if (process.client) {
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    }
  };

  const toggleTheme = (): void => {
    setTheme(theme.value === "light" ? "dark" : "light");
  };

  const initTheme = (): void => {
    if (process.client) {
      const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
      const initialTheme = savedTheme || "light";
      setTheme(initialTheme);
    }
  };

  return {
    theme: readonly(theme),
    setTheme,
    toggleTheme,
    initTheme,
  };
};

