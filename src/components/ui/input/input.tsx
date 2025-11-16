import { tv, type VariantProps } from "tailwind-variants";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const input = tv({
  base: "text-sm rounded-lg block w-full p-2.5 disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-60 disabled:placeholder:text-gray-400 read-only:bg-gray-100 read-only:border-gray-300 read-only:placeholder:text-gray-400",
  variants: {
    state: {
      default:
        "bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500",
      error:
        "bg-red-50 border border-red-500 text-red-900 placeholder-red-400 focus:ring-red-500 focus:border-red-500",
    },
  },
  defaultVariants: {
    state: "default",
  },
});

const label = tv({
  base: "block mb-2 text-sm font-medium",
  variants: {
    state: {
      default: "text-gray-900",
      error: "text-red-700",
    },
  },
  defaultVariants: {
    state: "default",
  },
});

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof input> & {
    label?: string;
    error?: string;
    subContent?: React.ReactNode;
  };

export type InputRef = HTMLInputElement & {
  shake: () => void;
};

const Input = forwardRef<InputRef, InputProps>(
  ({ className, label: labelText, error, subContent, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [shaking, setShaking] = useState<boolean>(false);

    useImperativeHandle(ref, () => {
      if (!inputRef.current) {
        return {} as InputRef;
      }
      return {
        ...inputRef.current,
        shake: () => {
          setShaking(true);
          setTimeout(() => {
            setShaking(false);
          }, 500);
        },
      } as InputRef;
    });

    const state = error ? "error" : "default";

    return (
      <div>
        {label && (
          <label htmlFor={props.id} className={label({ state })}>
            {labelText}
          </label>
        )}
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            className={input({
              state,
              className: `${className || ""} ${shaking ? "animate-shake" : ""}`,
            })}
            {...props}
          />
          {subContent && subContent}
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600">
            <span className="font-medium">{error}</span>
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
