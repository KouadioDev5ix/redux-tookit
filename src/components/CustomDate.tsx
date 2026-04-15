import React from "react";
import clsx from "clsx";

interface CustomInputDateProps {
  label?: string;
  placeHolder?: string;
  labelClassName?: string;
  inputClassName?: string;
  componentClassName?: string;
}

const CustomInputDate = React.forwardRef<
  HTMLInputElement,
  CustomInputDateProps
>((props, refs) => {
  const {
    inputClassName,
    label,
    labelClassName,
    placeHolder,
    componentClassName,
  } = props;

  return (
    <section
      className={clsx(["flex flex-col mt-1 w-full ", componentClassName])}
    >
      {label && (
        <span className={clsx(["text-gray-700 text-sm mb-1", labelClassName])}>
          {" "}
          {label}
        </span>
      )}

      <input
        type="date"
        className={clsx([
          "h-9 w-full border rounded-md text-md focus:border-blue-950",
          inputClassName,
        ])}
        placeholder={placeHolder}
      />
    </section>
  );
});

export { CustomInputDate };
