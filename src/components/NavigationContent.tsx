type NavigationContentProps = {
  children?: React.ReactNode;
};

export function NavigationContent(props: NavigationContentProps) {
  const links = [...Array(9).keys()];

  return (
    <>
      {links.map((link) => (
        <li key={link}>
          <a>Navigation link</a>
        </li>
      ))}
      {props.children}
    </>
  );
}
