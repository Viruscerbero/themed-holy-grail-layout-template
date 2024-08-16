import { milli_vanilla } from "../themes/milli-vanilla.css";
import { black_metal } from "../themes/black-metal.css";
import { blues_boogie } from "../themes/blues-boogie.css";
import { jazz_dat_bebop } from "../themes/jazz-dat-bebop.css";

type ThemeList = {
  key: number;
  name: string;
  theme: string;
  palette: object;
}[];

export const themeList: ThemeList = [
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
