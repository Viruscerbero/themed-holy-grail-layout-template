import { style } from "@vanilla-extract/css";
import { theme } from "../themes/contract.css";

export const themesGallery = style({
  height: "25vh",
  width: "100vw",
  minWidth: "244px",
  position: "absolute",
  bottom: "57px",
  display: "grid",
  gridTemplateRows: "30px auto",
  gridTemplateColumns: "1fr",
  gridAutoFlow: "row",
  border: theme.border,
  background: theme.secondaryBackgroundColor,

  "@media": {
    "screen and (min-width: 520px)": {
      width: "50vw",
    },

    "screen and (min-width: 768px)": {
      width: "28vw",
    },
  },
});

export const themeButton = style({
  cursor: "pointer",
  fontSize: "0.85rem",
  padding: 0,
  width: "52px",
  height: "52px",
  backgroundColor: theme.secondaryBackgroundColor,
  border: theme.border,
});

export const themeItemStyle = style({
  cursor: "pointer",
  width: "52px",
  height: "52px",
});

export const themeNameStyle = style({
  fontSize: "0.9rem",
  margin: "-8px 0",
});

export const paneDivider = style({
  borderBottom: "double",
});

export const themesContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  justifyContent: "space-evenly",
  gridRowGap: "3rem",
  overflow: "auto",
});
