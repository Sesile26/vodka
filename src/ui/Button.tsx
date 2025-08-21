import React from "react";
import clsx from "clsx";

type ButtonSize = "small" | "medium";
type ButtonVariant = "default" | "outline";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}
const sizeClasses = {
  small: "",
  medium: "px-5 h-10",
};
const variantClasses = {
  default: "text-[#3D1879] hover:text-white",
  outline: "bg-[#101046]",
};

const Button: React.FC<Props> = ({
  children,
  size = "medium",
  variant = "default",
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      type="button"
      className={clsx(
        `flex rounded-md items-center font-semibold orange-gradient transition-all duration-300`,
        `${variantClasses[variant]} ${sizeClasses[size]} ${className || ""}`,
        `${
          variant === "outline" &&
          `border-gradient-b-orange-purple hover:border-gradient-t-orange-purple border-transparent border-solid border-2`
        }`
      )}
    >
      <div
        className={clsx(`${variant === "outline" && "orange-gradient-text"}`)}
      >
        {children}
      </div>
    </button>
  );
};

export default Button;
