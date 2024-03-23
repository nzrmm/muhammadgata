export type IRouteType = {
  href: string;
  name: string;
  isVisible: boolean;
};

export const ROUTES: IRouteType[] = [
  { href: "/", name: "Home", isVisible: true },
  { href: "/projects", name: "Projects", isVisible: true },
  { href: "/tools", name: "Tools", isVisible: true },
  { href: "/blogs", name: "Blogs", isVisible: true },
  { href: "/tag", name: "Tag", isVisible: false },
];

export const NAVBAR_ROUTES: IRouteType[] = ROUTES.filter(
  (route) => route.isVisible
);
