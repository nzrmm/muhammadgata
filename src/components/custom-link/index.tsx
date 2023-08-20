import React from "react";
import Link, { LinkProps } from "next/link";

type ICustomLink = React.PropsWithChildren<{
  customClassName?: string;
}> &
  LinkProps;

const CustomLink = ({ href, children, ...props }: ICustomLink) => {
  return (
    <Link href={href} className={props.customClassName} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
