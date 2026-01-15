import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  alignment = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        alignment === "center" && "text-center",
        className
      )}
    >
      {/* Badge */}
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-soleil/30 text-terre text-sm font-medium mb-4">
          {badge}
        </span>
      )}

      {/* Title */}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={cn(
          "text-lg md:text-xl text-muted-foreground leading-relaxed",
          alignment === "center" && "max-w-3xl mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
