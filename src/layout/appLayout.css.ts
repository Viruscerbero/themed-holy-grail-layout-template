import { globalStyle, style } from "@vanilla-extract/css";
import { theme } from "../themes/contract.css";

globalStyle("*", { boxSizing: "border-box" });

globalStyle("#root", {
  height: "100vh",
  color: "#000",
  fontFamily: "sans-serif",
  fontSize: "16px",
  textAlign: "center",
  backgroundColor: "#fff",
});

export const headerLayout = style({
  gridArea: "header",
  border: theme.border,
});

export const navLayout = style({
  gridArea: "nav",
  border: theme.border,

  "@media": {
    "screen and (min-width: 768px)": {
      height: "100%",
    },
  },
});

export const ulStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "8px",

  selectors: {
    [`${navLayout} > &`]: {
      listStyle: "none",
      margin: "0",
      padding: "0 1rem",

      "@media": {
        "screen and (min-width: 768px)": {
          display: "flex",
          flexDirection: "column",
        },
      },
    },
  },
});

export const mainLayout = style({
  gridArea: "main",
  border: theme.border,
  /* This single rule prevents the footer from being pushed down when the content in the main section overflows the maximum height */
  overflow: "auto",
});

export const asideLayout = style({
  gridArea: "sidebar",
  border: theme.border,
});

export const footerLayout = style({
  gridArea: "footer",
  border: theme.border,
});

export const appContainerLayout = style({
  /* Theme */
  color: theme.frontColor,
  backgroundColor: theme.backgroundColor,
  maxWidth: "100vw",
  minWidth: "246px",
  height: "100%",
  margin: "0 auto",

  /* Grid properties */
  display: "grid",
  gridGap: "1px",
  gridTemplateAreas: `
      "header"
      "nav"
      "main"
      "sidebar"
      "footer"`,
  gridTemplateRows: "55px minmax(90px, auto) 2fr 1fr 55px",

  "@media": {
    "screen and (min-width: 520px)": {
      gridTemplateAreas: `
      "header	header"
      "nav		nav"
      "main		sidebar"
      "footer	footer"`,
      gridTemplateColumns: "6fr 2fr",
      gridTemplateRows: "68px minmax(90px, auto) 2fr 55px",
    },

    "screen and (min-width: 768px)": {
      gridTemplateAreas: `"header	header	header"
      "nav		main	sidebar"
      "footer	footer	footer"`,
      gridTemplateColumns: "2fr 10fr 3fr",
      gridTemplateRows: "68px minmax(90px, 2fr) 55px",
    },
  },
});
