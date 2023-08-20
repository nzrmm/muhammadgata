import { INavbarLink, IMediaSocial } from "@/types";

import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

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
