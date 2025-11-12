import { tv, type VariantProps } from "tailwind-variants";
import { forwardRef } from "react";

const toggle = tv({
  base: "relative rounded-full transition-colors peer-focus:outline-none peer-focus:ring-0 after:content-[''] after:absolute after:bg-white after:border after:border-gray-300 after:rounded-full after:transition-all peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full",
  variants: {
    color: {
      blue: "bg-gray-200 peer-checked:bg-blue-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600 peer-focus:ring-0 dark:peer-focus:ring-0",
      gray: "bg-gray-200 peer-checked:bg-gray-600 dark:bg-gray-700 dark:peer-checked:bg-gray-500 peer-focus:ring-0 dark:peer-focus:ring-0",
      green:
        "bg-gray-200 peer-checked:bg-green-600 dark:bg-gray-700 dark:peer-checked:bg-green-600 peer-focus:ring-0 dark:peer-focus:ring-0",
    },
    size: {
      sm: "w-9 h-5 after:h-4 after:w-4 after:top-[2px] after:start-[2px]",
      default: "w-11 h-6 after:h-5 after:w-5 after:top-[2px] after:start-[2px]",
      lg: "w-14 h-7 after:h-6 after:w-6 after:top-0.5 after:start-[4px]",
    },
  },
  defaultVariants: {
    color: "blue",
    size: "default",
  },
});

const label = tv({
  base: "ms-3 text-xs md:text-sm font-medium",
});

export type ToggleProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> &
  VariantProps<typeof toggle> &
  VariantProps<typeof label> & {
    label?: string;
  };

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    { checked, onChange, label: labelText, color, size, className, ...props },
    ref,
  ) => {
    return (
      <label className="inline-flex items-center cursor-pointer">
        <input
          ref={ref}
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <div className={toggle({ color, size, className })} />
        {label ? <span className={label()}>{labelText}</span> : null}
      </label>
    );
  },
);
