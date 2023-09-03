import type { IconType } from "react-icons/lib";

export type INavbarLink = {
  href: string;
  name: string;
};

export type IMediaSocial = {
  name: string;
  href: string;
  icon: IconType;
};

export type IThemeIcon = {
  light: IconType;
  dark: IconType;
  system: IconType;
};

export type ITheme = {
  name: string;
  icon: IconType;
  value: string;
};
