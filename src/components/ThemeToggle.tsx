import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    typeof window !== "undefined" ? (localStorage.getItem("cp-theme") as "light" | "dark") || "dark" : "dark"
  );
  useEffect(() => { document.documentElement.setAttribute("data-theme", theme); localStorage.setItem("cp-theme", theme); }, [theme]);
  return (
    <button className="btn btn-icon btn-ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
