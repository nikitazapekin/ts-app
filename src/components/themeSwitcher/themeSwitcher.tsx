import { ReactNode, useEffect } from "react"
import { useState } from "react"
import {ReactComponent as MoonIcon} from "./icon-moon.svg"
import {ReactComponent as SunIcon} from "./icon-sun.svg"
import "./themeSwitcher.css"
export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(false);
  const themeText = isDark ? 'Light' : 'Dark';
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
  const body = document.body;
  body.style.backgroundColor= isDark ? "#333333" : "#FFFFFF"
  }, [isDark]);
  
  return (
    <div className="switcher" onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className="icon" />
    </div>
  );
};