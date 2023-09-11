import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import { IMediaSocialType } from "@/types/media-social";

export const media_socials: IMediaSocialType[] = [
  {
    name: "Github",
    href: "https://github.com/nzrmm",
    icon: BsGithub,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/muhammad-gata/",
    icon: BsLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_nzrmm/",
    icon: BsInstagram,
  },
  {
    name: "Facebook",
    href: "https://web.facebook.com/profile.php?id=100010330266856",
    icon: BsFacebook,
  },
];
