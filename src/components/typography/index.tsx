import { ComponentProps } from "react";
import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";

const typographyVariants = cva("text-neutral-900 dark:text-white", {
  variants: {
    variant: {
      textBase: [
        "text-base font-normal leading-loose tracking-wider",
        "text-neutral-700 dark:text-neutral-400",
      ],
      textLg: [
        "text-lg font-normal leading-loose tracking-wider",
        "text-neutral-700 dark:text-neutral-400",
      ],
      textXl: "text-xl font-bold leading-tight tracking-wide",
      text3Xl: "text-3xl font-bold leading-tight tracking-wide",
      text4Xl: "text-4xl  font-bold leading-tight tracking-wide",
      text6Xl: "text-6xl font-bold leading-tight tracking-wide",
    },
  },
  defaultVariants: {
    variant: "textLg",
  },
});

type ITypographyProps = ComponentProps<"p"> &
  VariantProps<typeof typographyVariants>;

const Typography = ({
  variant,
  children,
  className,
  ...props
}: ITypographyProps) => {
  return (
    <p className={cn(typographyVariants({ variant, className }))} {...props}>
      {children}
    </p>
  );
};

export default Typography;
