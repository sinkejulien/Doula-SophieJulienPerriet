import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  variant?: "default" | "warm" | "featured";
  className?: string;
  children?: ReactNode;
}

export function CTASection({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  variant = "default",
  className,
  children,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "section-padding",
        variant === "default" && "bg-background",
        variant === "warm" && "bg-soleil/20",
        variant === "featured" && "bg-nuit text-creme",
        className
      )}
    >
      <div className="container-narrow mx-auto text-center">
        {/* Title */}
        <h2 className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl mb-4",
          variant === "featured" ? "text-creme" : "text-foreground"
        )}>
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className={cn(
            "text-lg md:text-xl mb-8 max-w-2xl mx-auto",
            variant === "featured" ? "text-creme/80" : "text-muted-foreground"
          )}>
            {subtitle}
          </p>
        )}

        {/* Custom content */}
        {children}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link to={primaryButtonLink}>
            <Button
              variant={variant === "featured" ? "hero" : "cta"}
              size="xl"
            >
              {primaryButtonText}
            </Button>
          </Link>
          {secondaryButtonText && secondaryButtonLink && (
            <Link to={secondaryButtonLink}>
              <Button
                variant={variant === "featured" ? "hero-outline" : "outline"}
                size="xl"
              >
                {secondaryButtonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
