import { tv, type VariantProps } from "tailwind-variants";
import { forwardRef } from "react";

const button = tv({
  base: "inline-flex px-4 py-2 items-center justify-center whitespace-nowrap rounded-md transition-all disabled:pointer-events-none disabled:opacity-50 outline-none cursor-pointer h-fit",
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
  VariantProps<typeof button> & {
    loading?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      appearance = "default",
      className,
      loading,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    const getSpinnerColor = () => {
      if (appearance === "default" || appearance === "destructive") {
        return "text-white";
      }
      return "text-blue-600";
    };

    return (
      <button
        ref={ref}
        className={button({ appearance, className })}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <svg
            aria-hidden="true"
            role="status"
            className={`w-4 h-4 me-2 ${getSpinnerColor()} animate-spin`}
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
