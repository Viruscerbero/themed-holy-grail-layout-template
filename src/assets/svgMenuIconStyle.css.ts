import { style } from "@vanilla-extract/css";
import { theme } from "../themes/contract.css";

export const pathStyle = style({
  fill: theme.frontColor,
  stroke: theme.backgroundColor,
});
