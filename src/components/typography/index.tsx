import React from "react";
import cx from "classnames";

import styles from "./typography.module.css";

type ITypography = React.PropsWithChildren<{
  variant: "textLg" | "text6Xl";
  customClassName?: string;
}>;

const Typography = ({ children, variant, customClassName }: ITypography) => {
  return (
    <p className={cx(styles[`variant__${variant}`], customClassName)}>
      {children}
    </p>
  );
};

export default Typography;
