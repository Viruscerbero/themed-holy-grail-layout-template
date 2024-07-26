import { useRef, MutableRefObject } from "react";
import { AsideContent } from "../components/index.ts";
import { asideLayout } from "./appLayout.css";

type AsideProps = {
  children?: React.ReactNode;
};

export default function Aside(props: AsideProps): JSX.Element {
  const renderingRef: MutableRefObject<number> = useRef(0);
  renderingRef.current += 1;

  return (
    <aside className={asideLayout}>
      Aside renderings: {renderingRef.current}
      <AsideContent />
      {props.children}
    </aside>
  );
}
