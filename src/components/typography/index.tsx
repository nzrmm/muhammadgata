import React from "react";
import cx from "classnames";

type ITypography = React.PropsWithChildren<{
  variant: "textLg" | "text6Xl";
  customClassName?: string;
}>;

const Typography = ({ children, variant, customClassName }: ITypography) => {
  const variantClass = {
    textLg:
      "text-lg leading-loose tracking-wider text-neutral-700 dark:text-neutral-400",
    text6Xl:
      "text-6xl font-bold leading-tight tracking-wide text-neutral-900 dark:text-white",
  }[variant];

  return <p className={cx(variantClass, customClassName)}>{children}</p>;
};

export default Typography;
