import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}

        <input
          ref={ref}
          className={twMerge(
            "w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

export default CustomInput;
