import { createContext, useState } from "react";
import { appContainerLayout } from "../../layout/appLayout.css";
import { milli_vanilla } from "../../themes/milli-vanilla.css";

type ContextProviderType = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ContextProviderType | undefined>(
  undefined
);

type ThemeProviderProps = { children: React.ReactNode | undefined };

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>(milli_vanilla);

  const themeValue = { setTheme };

  return (
    <ThemeContext.Provider value={themeValue}>
      <div className={`${appContainerLayout} ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
