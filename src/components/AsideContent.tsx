import { asideStyle } from "./asideStyle.css";

export function AsideContent() {
  const items = [...Array(5).keys()];

  return (
    <div className={asideStyle}>
      {items.map((item) => (
        <div key={item}>Side bar element</div>
      ))}
    </div>
  );
}
