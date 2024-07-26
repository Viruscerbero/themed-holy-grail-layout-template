import { style } from "@vanilla-extract/css";
import { theme } from "../themes/contract.css";

export const mainStyle = style({
  height: "max-content",
  color: theme.frontColor,
  backgroundColor: theme.backgroundColor,
});
