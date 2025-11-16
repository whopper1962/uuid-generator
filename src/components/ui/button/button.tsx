import { tv, type VariantProps } from "tailwind-variants";
import { forwardRef } from "react";

const button = tv({
  base: "inline-flex px-4 py-2 items-center justify-center whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none cursor-pointer h-fit",
  variants: {
    appearance: {
      default:
        "bg-blue-600 text-white shadow-sm hover:bg-blue-700 focus:ring-blue-500",
      destructive:
        "bg-red-600 text-white shadow-sm hover:bg-red-700 focus:ring-red-500",
      outline:
        "border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
      secondary:
        "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200 focus:ring-gray-500 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
      ghost:
        "text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100",
      link: "text-blue-600 underline-offset-4 hover:underline focus:ring-blue-500 dark:text-blue-400",
      transparent:
        "bg-transparent text-inherit hover:bg-transparent border-0 border-transparent outline-0 outline-transparent outline-offset-0 focus:outline-0 focus:outline-transparent focus:outline-offset-0 focus:!ring-0 focus:!ring-offset-0 focus-visible:outline-0 focus-visible:outline-transparent focus-visible:outline-offset-0 focus-visible:!ring-0 focus-visible:!ring-offset-0",
    },
  },
  defaultVariants: {
    appearance: "default",
  },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, appearance = "default", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={button({ appearance, className })}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
