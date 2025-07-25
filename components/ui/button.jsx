import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "border border-[#36e0e0] bg-transparent text-[#36e0e0] hover:bg-[#36e0e0] hover:text-[#11201f]",
        primary: "border border-[#36e0e0] bg-transparent text-[#36e0e0] hover:bg-[#36e0e0] hover:text-[#11201f]",
        outline:
          "border border-[#36e0e0] bg-transparent text-[#36e0e0] hover:bg-[#36e0e0] hover:text-[#11201f]",
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
