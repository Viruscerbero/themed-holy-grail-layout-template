import { useTheme } from "../contexts/index.ts";
import { useState } from "react";
import { themeList } from "./themeList.ts";
import {
  themesGallery,
  themeButton,
  themeItemStyle,
  themeNameStyle,
  paneDivider,
  themesContainer,
} from "./themeManagerStyle.css.ts";

import { MenuIcon, ThemeIcon } from "../assets/index.ts";

export default function ThemeManager(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();

  function chooseTheme(
    key: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    setTheme(key);
  }

  return (
    <>
      {isOpen && (
        <div className={themesGallery}>
          <div className={paneDivider}>Themes</div>
          <div className={themesContainer}>
            {themeList.map((themeItem) => {
              return (
                <div
                  key={themeItem.key}
                  onClick={(evt) => chooseTheme(themeItem.theme, evt)}
                  className={themeItemStyle}
                >
                  <ThemeIcon palette={{ ...themeItem.palette }} />
                  <div className={themeNameStyle}>{themeItem.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <button className={themeButton} onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </button>
    </>
  );
}
