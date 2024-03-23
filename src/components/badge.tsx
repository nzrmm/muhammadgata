"use client";

import { ComponentProps } from "react";

import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";

const badgeVariants = cva("rounded-lg", {
  variants: {
    size: {
      sm: "text-base py-0.5 px-2",
    },
    variant: {
      ghost: ["hover:bg-neutral-100 hover:dark:bg-neutral-800"],
    },
  },
  defaultVariants: {
    size: "sm",
    variant: "ghost",
  },
});

type Props = ComponentProps<"span"> & VariantProps<typeof badgeVariants>;

const Badge = ({ size, variant, className, children, ...props }: Props) => {
  return (
    <span
      className={cn(badgeVariants({ size, variant, className }))}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
