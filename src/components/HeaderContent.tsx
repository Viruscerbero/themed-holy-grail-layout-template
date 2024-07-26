import { headerStyle } from "./headerStyle.css";

type HeaderContentProps = {
  children?: React.ReactNode;
};

export function HeaderContent(props: HeaderContentProps) {
  return <div className={headerStyle}>{props.children}</div>;
}
