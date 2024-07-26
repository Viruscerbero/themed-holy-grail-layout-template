import { createTheme } from "@vanilla-extract/css";
import { theme } from "./contract.css";

const light = "#f7f1f1";
const semiDark = "#dfdcdc";
const dark = "#380505";

export const milli_vanilla = createTheme(theme, {
  frontColor: dark,
  backgroundColor: light,
  secondaryBackgroundColor: semiDark,
  border: `1px solid ${dark}`,
});
