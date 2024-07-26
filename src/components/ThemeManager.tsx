import { useTheme } from "../contexts/index.ts";
import { useState } from "react";
import {
  themesGallery,
  themeButton,
  themeItemStyle,
  themeNameStyle,
  paneDivider,
  themesContainer,
} from "./themeManagerStyle.css.ts";
import { milli_vanilla } from "../themes/milli-vanilla.css";
import { black_metal } from "../themes/black-metal.css";
import { blues_boogie } from "../themes/blues-boogie.css";
import { jazz_dat_bebop } from "../themes/jazz-dat-bebop.css";
import { MenuIcon, ThemeIcon } from "../assets/index.ts";

export default function ThemeManager(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();

  type ThemeList = {
    key: number;
    name: string;
    theme: string;
    palette: object;
  }[];

  const themeList: ThemeList = [
    {
      key: 0,
      name: "Milli Vanilla",
      theme: milli_vanilla,
      palette: { frontColor: "#f7f1f1", backGroundColor: "#afacac" },
    },
    {
      key: 1,
      name: "Blues Boogie",
      theme: blues_boogie,
      palette: { frontColor: "#b3d8e5", backGroundColor: "#7ca9e1" },
    },
    {
      key: 2,
      name: "Jazz Dat Bebop",
      theme: jazz_dat_bebop,
      palette: { frontColor: "#e3bdd7", backGroundColor: "#c990b7" },
    },
    {
      key: 3,
      name: "Black Metal",
      theme: black_metal,
      palette: { frontColor: "#161616", backGroundColor: "#d8d8cb" },
    },
    // Repeated themes for demo purposes
    {
      key: 4,
      name: "Milli Vanilla",
      theme: milli_vanilla,
      palette: { frontColor: "#f7f1f1", backGroundColor: "#afacac" },
    },
    {
      key: 5,
      name: "Blues Boogie",
      theme: blues_boogie,
      palette: { frontColor: "#b3d8e5", backGroundColor: "#7ca9e1" },
    },
    {
      key: 6,
      name: "Jazz Dat Bebop",
      theme: jazz_dat_bebop,
      palette: { frontColor: "#e3bdd7", backGroundColor: "#c990b7" },
    },
    {
      key: 7,
      name: "Black Metal",
      theme: black_metal,
      palette: { frontColor: "#161616", backGroundColor: "#d8d8cb" },
    },
    {
      key: 8,
      name: "Milli Vanilla",
      theme: milli_vanilla,
      palette: { frontColor: "#f7f1f1", backGroundColor: "#afacac" },
    },
    {
      key: 9,
      name: "Blues Boogie",
      theme: blues_boogie,
      palette: { frontColor: "#b3d8e5", backGroundColor: "#7ca9e1" },
    },
    {
      key: 10,
      name: "Jazz Dat Bebop",
      theme: jazz_dat_bebop,
      palette: { frontColor: "#e3bdd7", backGroundColor: "#c990b7" },
    },
    {
      key: 11,
      name: "Black Metal",
      theme: black_metal,
      palette: { frontColor: "#161616", backGroundColor: "#d8d8cb" },
    },
  ];

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
