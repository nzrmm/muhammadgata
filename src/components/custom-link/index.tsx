import React from "react";
import Link, { LinkProps } from "next/link";

type ICustomLink = React.PropsWithChildren<{
  customClassName?: string;
}> &
  LinkProps;

const CustomLink = ({
  href,
  children,
  customClassName,
  ...props
}: ICustomLink) => {
  return (
    <Link href={href} className={customClassName} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
