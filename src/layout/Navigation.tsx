import { useRef, MutableRefObject } from "react";
import { NavigationContent } from "../components/index.ts";
import { navLayout, ulStyle } from "./appLayout.css";

type NavigationProps = { children?: React.ReactNode };

export default function Navigation(props: NavigationProps): JSX.Element {
  const renderingRef: MutableRefObject<number> = useRef(0);
  renderingRef.current += 1;

  return (
    <nav className={navLayout}>
      Nav renderings: {renderingRef.current}
      <ul className={ulStyle}>
        <NavigationContent />
        {props.children}
      </ul>
    </nav>
  );
}
