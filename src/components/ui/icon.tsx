import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: LucideIcon
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "muted" | "primary" | "secondary" | "destructive"
}

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5", 
  lg: "h-6 w-6",
  xl: "h-8 w-8"
}

const iconVariants = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  primary: "text-primary",
  secondary: "text-secondary-foreground", 
  destructive: "text-destructive"
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ icon: LucideIcon, size = "md", variant = "default", className, ...props }, ref) => {
    return (
      <LucideIcon
        ref={ref}
        className={cn(
          iconSizes[size],
          iconVariants[variant],
          "transition-colors",
          className
        )}
        {...props}
      />
    )
  }
)

Icon.displayName = "Icon"

export { Icon }