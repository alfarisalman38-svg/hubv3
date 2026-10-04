"use client";
import { createContext, useContext, useEffect, useState } from "react";

const Ctx = createContext({ dark: true, toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem("neh-theme");
    const isDark = saved !== "light";
    setDark(isDark);
    document.documentElement.classList.toggle("light", !isDark);
  }, []);
  const toggle = () => {
    setDark((v) => {
      const next = !v;
      document.documentElement.classList.toggle("light", !next);
      localStorage.setItem("neh-theme", next ? "dark" : "light");
      return next;
    });
  };
  return <Ctx.Provider value={{ dark, toggle }}>{children}</Ctx.Provider>;
}
export const useTheme = () => useContext(Ctx);