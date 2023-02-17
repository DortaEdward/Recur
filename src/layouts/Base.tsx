import React, { useState, useEffect } from "react";
import { Header } from "../components/Header/Header";
interface Props {
  children: React.ReactNode;
}

export const BaseLayout: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<string>();
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (!localTheme) {
      window.localStorage.setItem("theme", "light");
    }
    setTheme(localTheme ? localTheme : "light");
  }, []);

  return (
    <div className={`${theme === "light" ? "light" : "dark"}`}>
      <div className="min-w-screen relative min-h-screen bg-slate-200 dark:bg-slate-900">
        <Header />
        {children}
      </div>
    </div>
  );
};
