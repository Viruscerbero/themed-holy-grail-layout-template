/* Because fast refresh only works when a file only exports components, useTheme is in a different file so it can be shared between components.
 * eslint(react-refresh/only-export-components)
 */
import { useContext } from "react";
import { ThemeContext } from "../index.ts";

export function useTheme() {
  const themeValue = useContext(ThemeContext);

  if (themeValue === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return themeValue;
}
