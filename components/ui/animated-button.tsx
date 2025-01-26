// /Users/alonondanse/janke-auto/components/ui/animated-button.tsx

"use client"

import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface AnimatedButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  containerClassName?: string;
  variant?: "default" | "outline" | "secondary" | "ghost";
}

export const AnimatedButton = ({ 
  children, 
  className,
  containerClassName,
  variant = "default",
  ...props 
}: AnimatedButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "outline":
        return "bg-transparent border-2 border-primary text-primary hover:bg-primary/10";
      case "secondary":
        return "bg-secondary text-secondary-foreground hover:bg-secondary/90";
      case "ghost":
        return "bg-transparent text-primary hover:bg-primary/10";
      default:
        return "bg-primary text-white hover:bg-primary/90";
    }
  };

  return (
    <div className={cn("relative", containerClassName)}>
      <motion.button
        className={cn(
          "relative px-6 py-3 rounded-full transition-all duration-300",
          getVariantStyles(),
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary rounded-full opacity-0"
          whileHover={{ opacity: 0.2 }}
        />
        <motion.span className="relative z-10">
          {children}
        </motion.span>
      </motion.button>
    </div>
  )
}