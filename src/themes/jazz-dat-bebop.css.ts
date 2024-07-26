import { createTheme } from "@vanilla-extract/css";
import { theme } from "./contract.css";

const light = "#f3d7fb";
const dark = "#3e005c";
const semiDark = "#d2b4db";

export const jazz_dat_bebop = createTheme(theme, {
  frontColor: dark,
  backgroundColor: light,
  secondaryBackgroundColor: semiDark,
  border: `1px solid ${dark}`,
});
