import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-terre/20 bg-transparent text-terre hover:bg-sable/50 hover:border-terre/40",
        secondary: "bg-rose text-secondary-foreground hover:bg-rose-deep/80",
        ghost: "hover:bg-sable/50 hover:text-terre",
        link: "text-terre-light underline-offset-4 hover:underline hover:text-terre",
        // Custom variants for this project
        hero: "bg-soleil text-terre font-semibold hover:bg-soleil/90 hover:shadow-xl shadow-md text-base px-8 py-4 h-auto",
        "hero-outline": "border-2 border-soleil bg-transparent text-terre font-semibold hover:bg-soleil/20 text-base px-8 py-4 h-auto",
        warm: "bg-rose text-terre font-medium hover:bg-rose-deep/70 shadow-soft",
        subtle: "bg-sable/60 text-terre hover:bg-sable",
        cta: "bg-gradient-to-r from-soleil to-primary text-terre font-semibold hover:shadow-xl shadow-md transition-all duration-300 hover:scale-[1.02]",
        // New accent variant
        accent: "bg-nuit text-creme font-semibold hover:bg-nuit/90 hover:shadow-xl shadow-md",
        "accent-outline": "border-2 border-nuit bg-transparent text-nuit font-semibold hover:bg-nuit/10",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
