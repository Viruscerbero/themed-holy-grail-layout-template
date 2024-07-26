import { style } from "@vanilla-extract/css";
import { theme } from "../themes/contract.css";

export const footerStyle = style({
  height: "100%",
  color: theme.frontColor,
  backgroundColor: theme.backgroundColor,
  display: "grid",
  gridTemplateColumns: "2fr 10fr 2fr",
});
