import { createTheme } from "@vanilla-extract/css";
import { theme } from "./contract.css";

const light = "#f0e0f5";
const dark = "#3e005c";
const semiDark = "#decde2";

export const jazz_dat_bebop = createTheme(theme, {
  frontColor: dark,
  backgroundColor: light,
  secondaryBackgroundColor: semiDark,
  border: `1px solid ${dark}`,
});
