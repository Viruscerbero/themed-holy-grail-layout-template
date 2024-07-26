import { useRef, MutableRefObject } from "react";
import { MainContent } from "../components/index.ts";
import { mainLayout } from "./appLayout.css";

type MainContentProps = {
  children?: React.ReactNode;
};

export default function Main(props: MainContentProps): JSX.Element {
  const renderingRef: MutableRefObject<number> = useRef(0);
  renderingRef.current += 1;

  return (
    <main className={mainLayout}>
      Main renderings: {renderingRef.current}
      <MainContent />
      {props.children}
    </main>
  );
}
