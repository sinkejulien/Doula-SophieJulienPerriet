import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  linkTo: string;
  linkText?: string;
  variant?: "default" | "featured" | "subtle";
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  linkTo,
  linkText = "En savoir plus",
  variant = "default",
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl p-6 md:p-8 transition-all duration-300",
        variant === "default" && "bg-card shadow-soft hover:shadow-card border border-border/50",
        variant === "featured" && "bg-soleil/20 shadow-card hover:shadow-xl border-2 border-soleil/30",
        variant === "subtle" && "bg-sable/40 hover:bg-sable/60",
        className
      )}
    >
      {/* Icon */}
      {icon && (
        <div className={cn(
          "w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110",
          variant === "featured" ? "bg-soleil text-terre" : "bg-soleil/30 text-terre"
        )}>
          {icon}
        </div>
      )}

      {/* Content */}
      <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 group-hover:text-terre transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
        {description}
      </p>

      {/* Link */}
      <Link
        to={linkTo}
        className="inline-flex items-center gap-2 text-sm font-medium text-terre hover:text-terre-light transition-colors group/link"
      >
        {linkText}
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
      </Link>

      {/* Decorative element */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300",
        "bg-gradient-to-r from-soleil/0 via-soleil to-soleil/0",
        "opacity-0 group-hover:opacity-100"
      )} />
    </div>
  );
}
