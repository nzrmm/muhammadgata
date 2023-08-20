import React from "react";
import cx from "classnames";

import styles from "./button.module.css";

type IButton = React.PropsWithChildren<{
  id: string;
  type: "primary" | "secondary";
  variant: "small";
  customClassName?: string;
  onClick?: () => void;
}>;

const Button = ({ id, children, type, variant, ...props }: IButton) => {
  return (
    <div>
      <button
        id={id}
        className={cx(
          styles[`type__${type}`],
          styles[`variant__${variant}`],
          props.customClassName
        )}
        onClick={props.onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
