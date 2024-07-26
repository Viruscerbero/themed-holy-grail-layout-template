import { useRef, MutableRefObject } from "react";
import { HeaderContent } from "../components/index.ts";
import { headerLayout } from "./appLayout.css";

type HeaderProps = {
  children?: React.ReactNode;
};

export default function Header(props: HeaderProps): JSX.Element {
  const renderingRef: MutableRefObject<number> = useRef(0);
  renderingRef.current += 1;

  return (
    <header className={headerLayout}>
      <HeaderContent>
        {props.children}
        <br />
        The Header renderings: {renderingRef.current}
      </HeaderContent>
    </header>
  );
}
