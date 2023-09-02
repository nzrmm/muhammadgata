import { INavbarLink, IMediaSocial, IThemeIcon, ITheme } from "@/types";

import {
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsFillSunFill,
  BsFillMoonStarsFill,
  BsPcDisplayHorizontal,
} from "react-icons/bs";

export const ROUTES: INavbarLink[] = [
  { href: "/", name: "Home" },
  { href: "/projects", name: "Projects" },
  { href: "/tools", name: "Tools" },
  { href: "/blogs", name: "Blogs" },
];

export const MEDIA_SOCIALS: IMediaSocial[] = [
  { href: "https://github.com/nzrmm", icon: BsGithub },
  { href: "https://www.linkedin.com/in/muhammad-gata/", icon: BsLinkedin },
  { href: "https://www.instagram.com/_nzrmm/", icon: BsInstagram },
  {
    href: "https://web.facebook.com/profile.php?id=100010330266856",
    icon: BsFacebook,
  },
];

export const THEME_ICON: IThemeIcon = {
  light: BsFillSunFill,
  dark: BsFillMoonStarsFill,
  system: BsPcDisplayHorizontal,
};

export const THEMES: ITheme[] = [
  { name: "Light", icon: THEME_ICON.light, value: "light" },
  { name: "Dark", icon: THEME_ICON.dark, value: "dark" },
  { name: "System", icon: THEME_ICON.system, value: "system" },
];
