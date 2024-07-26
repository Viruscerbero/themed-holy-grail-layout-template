import { footerStyle } from "./footerStyle.css";
import ThemeManager from "./ThemeManager.tsx";

type FooterContentProps = {
  children?: React.ReactNode;
};

export function FooterContent(props: FooterContentProps): JSX.Element {
  return (
    <div className={footerStyle}>
      <ThemeManager />
      {props.children}
    </div>
  );
}
