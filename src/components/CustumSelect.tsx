import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  options: Option[];
  value?: string;
  placeholder?: string;
  className?: string;
  onChange?: (value: string) => void;
};

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  placeholder = "Select option",
  className,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  const selected = options.find((opt) => opt.value === value);

  const handleSelect = (val: string) => {
    onChange?.(val);
    setOpen(false);
  };

  return (
    <div className={twMerge("relative w-56", className)}>
      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-gray-200"
      >
        <span>{selected?.label || placeholder}</span>

        <svg
          className={twMerge(
            "w-4 h-4 transition-transform",
            open && "rotate-180",
          )}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-1 w-full bg-white shadow-lg rounded-lg border z-50">
          {options.map((opt) => {
            const isSelected = opt.value === value;

            return (
              <div
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className={twMerge(
                  "flex justify-between items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-100",
                  isSelected && "bg-gray-200  font-medium",
                )}
              >
                <span className="">{opt.label} </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
