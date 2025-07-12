import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hoverEffect = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "border-border/50 bg-background/80 dark:bg-card/30 rounded-lg border shadow-sm backdrop-blur-md backdrop-filter dark:backdrop-blur-md",
          hoverEffect &&
            "transition-all duration-300 ease-in-out hover:shadow-md",
          className,
        )}
        whileHover={
          hoverEffect
            ? {
                y: -5,
                transition: { duration: 0.2 },
              }
            : undefined
        }
        {...props}
      />
    );
  },
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
