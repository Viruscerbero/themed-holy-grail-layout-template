import { style } from "@vanilla-extract/css";
import { theme } from "../themes/contract.css";

export const headerStyle = style({
  height: "100%",
  color: theme.frontColor,
  backgroundColor: theme.backgroundColor,
});
