import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"


const buttonVariants = cva(
  "shared-features",
  {
    variants: {
      variant: {
        default:
          "primary-button",
          outline:
            "outline-button",
        destructive:
          "",
        secondary:
          "",
        ghost: "",
        link: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={buttonVariants({ variant, className })}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
