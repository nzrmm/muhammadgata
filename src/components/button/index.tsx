import React from "react";
import cx from "classnames";

type IButton = React.PropsWithChildren<{
  id: string;
  size: "small";
  variant: "primary";
  customClassName?: string;
  onClick?: () => void;
}>;

const Button = ({ id, children, size, variant, ...props }: IButton) => {
  const sizeClass = {
    small: "px-6 py-2 text-base font-medium rounded-full",
  }[size];

  const variantClass = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 hover:dark:bg-neutral-200",
  }[variant];

  return (
    <div>
      <button
        id={id}
        className={cx(sizeClass, variantClass, props.customClassName)}
        onClick={props.onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
