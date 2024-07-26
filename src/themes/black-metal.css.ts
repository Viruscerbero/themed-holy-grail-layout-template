import { createTheme } from "@vanilla-extract/css";
import { theme } from "./contract.css";

const light = "#d8d8cb";
const semiDark = "#292929";
const dark = "#161616";

export const black_metal = createTheme(theme, {
  frontColor: light,
  backgroundColor: dark,
  secondaryBackgroundColor: semiDark,
  border: `1px solid ${light}`,
});
