import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
const _CustomInput = forwardRef<HTMLInputElement, InputProps>(({className, label , ...props}, ref) => {
  return (
    <div>
      <div>Hello</div>
    </div>
  );
});

export default _CustomInput;
