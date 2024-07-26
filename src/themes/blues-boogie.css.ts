import { createTheme } from "@vanilla-extract/css";
import { theme } from "./contract.css";

const light = "#cddfe9";
const dark = "#141272";
const semiDark = "#c3d3e7";

export const blues_boogie = createTheme(theme, {
  frontColor: dark,
  backgroundColor: light,
  secondaryBackgroundColor: semiDark,
  border: `1px solid ${dark}`,
});
