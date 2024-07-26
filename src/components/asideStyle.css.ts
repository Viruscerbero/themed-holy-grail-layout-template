import { style } from "@vanilla-extract/css";
import { theme } from "../themes/contract.css";

export const asideStyle = style({
  height: "max-content",
  color: theme.frontColor,
  backgroundColor: theme.backgroundColor,
});
