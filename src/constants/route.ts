export type IRouteType = {
  href: string;
  name: string;
};

export const ROUTES: IRouteType[] = [
  { href: "/", name: "Home" },
  { href: "/projects", name: "Projects" },
  { href: "/tools", name: "Tools" },
  { href: "/blogs", name: "Blogs" },
  { href: "/tag", name: "Tag" },
];

export const NAVBAR_ROUTES: IRouteType[] = ROUTES.filter((route) =>
  ["/", "/projects", "/tools", "/blogs"].includes(route.href)
);
