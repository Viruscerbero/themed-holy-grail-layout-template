import { mainStyle } from "./mainStyle.css";

type MainContentProps = {
  children?: React.ReactNode;
};

export function MainContent(props: MainContentProps) {
  return (
    <div className={mainStyle}>
      <h1>Main area</h1>
      <p>This is the main area</p>
      <h2>Main area</h2>
      <p>This is the main area</p>
      <h3>Main area</h3>
      <p>This is the main area</p>
      <h3>Main area</h3>
      <p>This is the main area</p>
      <h3>Main area</h3>
      <p>This is the main area</p>
      <h3>Main area</h3>
      <p>This is the main area</p>
      <h3>Main area</h3>
      <p>This is the main area</p>
      <h3>Main area</h3>
      <p>This is the main area</p>
      {props.children}
    </div>
  );
}
