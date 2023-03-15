import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/Theme";

export const useDarkMode = () => {
  // @ts-ignore
  const { dark, setDark } = useContext(ThemeContext);
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
    setDark(darkThemeMq.matches);
  }, []);

  return {
    dark: dark ? "dark" : "",
    setDark,
  };
};
