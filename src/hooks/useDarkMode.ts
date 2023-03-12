import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

export const useDarkMode = () => {
  // @ts-ignore
  const { dark, setDark } = useContext(ThemeContext);

  return {
    dark: dark ? "dark" : "",
    setDark,
  };
};
