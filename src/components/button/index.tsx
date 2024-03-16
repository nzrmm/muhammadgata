"use client";

import { ComponentProps } from "react";
import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("font-medium rounded-full", {
  variants: {
    size: {
      sm: "px-6 py-2 text-base",
    },
    variant: {
      primary: [
        "bg-neutral-900 text-white hover:bg-neutral-800",
        "dark:bg-white dark:text-neutral-900 hover:dark:bg-neutral-200",
      ],
    },
  },
  defaultVariants: {
    size: "sm",
    variant: "primary",
  },
});

type IButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

const Button = ({
  size,
  variant,
  className,
  children,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ size, variant, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
