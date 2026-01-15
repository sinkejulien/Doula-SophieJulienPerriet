import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author?: string;
  context?: string;
  variant?: "default" | "featured";
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  context,
  variant = "default",
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-6 md:p-8 transition-all duration-300",
        variant === "default" && "bg-card shadow-soft border border-border/50",
        variant === "featured" && "bg-soleil/15 shadow-card border border-soleil/20",
        className
      )}
    >
      {/* Quote Icon */}
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center mb-4",
        variant === "featured" ? "bg-soleil" : "bg-soleil/30"
      )}>
        <Quote className="w-5 h-5 text-terre" />
      </div>

      {/* Quote Text */}
      <blockquote className="text-foreground text-sm md:text-base leading-relaxed mb-6 italic">
        "{quote}"
      </blockquote>

      {/* Author */}
      {(author || context) && (
        <div className="border-t border-border/50 pt-4">
          {author && (
            <p className="font-medium text-terre">{author}</p>
          )}
          {context && (
            <p className="text-sm text-muted-foreground">{context}</p>
          )}
        </div>
      )}
    </div>
  );
}
