import { useRef, MutableRefObject } from "react";
import { ThemeProvider } from "./contexts/index.ts";
import { Header, Navigation, Main, Aside, Footer } from "./layout/index.ts";
import "./normalize.css";

export default function App(): JSX.Element {
  const renderingRef: MutableRefObject<number> = useRef(0);
  renderingRef.current += 1;

  return (
    <ThemeProvider>
      <Header>App renderings: {renderingRef.current}</Header>
      <Navigation />
      <Main />
      <Aside />
      <Footer />
    </ThemeProvider>
  );
}
