import React, { createContext, Dispatch, FC, SetStateAction } from "react";

export type ThemeContextType = {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
};

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: Props) => {
  const [dark, setDark] = React.useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ dark: dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
