import {
  BsFillSunFill,
  BsFillMoonStarsFill,
  BsPcDisplayHorizontal,
} from "react-icons/bs";
import type { IconType } from "react-icons/lib";

export type IThemeIconType = {
  light: IconType;
  dark: IconType;
  system: IconType;
};

export type IThemeType = {
  name: string;
  icon: IconType;
  value: string;
};

export const THEME_ICON: IThemeIconType = {
  light: BsFillSunFill,
  dark: BsFillMoonStarsFill,
  system: BsPcDisplayHorizontal,
};

export const THEMES: IThemeType[] = [
  { name: "Light", icon: THEME_ICON.light, value: "light" },
  { name: "Dark", icon: THEME_ICON.dark, value: "dark" },
  { name: "System", icon: THEME_ICON.system, value: "system" },
];
