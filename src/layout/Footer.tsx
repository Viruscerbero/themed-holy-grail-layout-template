import { useRef, MutableRefObject } from "react";
import { FooterContent } from "../components/index.ts";
import { footerLayout } from "./appLayout.css";

type FooterProps = {
  children?: React.ReactNode;
};

export default function Footer(props: FooterProps): JSX.Element {
  const renderingRef: MutableRefObject<number> = useRef(0);
  renderingRef.current += 1;

  return (
    <footer className={footerLayout}>
      <FooterContent>
        {props.children}
        Footer renderings: {renderingRef.current}
      </FooterContent>
    </footer>
  );
}
