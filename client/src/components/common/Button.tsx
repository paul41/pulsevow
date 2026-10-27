import React from "react";
import type { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  label = "Sign Up",
  onClick,
  type = "button",
}) => {
  return (
    <div className="input-group-append">
      <button
        type={type}
        className="btn btn-primary font-weight-bold px-3"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;