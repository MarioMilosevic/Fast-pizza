import { ReactNode } from "react";
type ButtonProps = {
  children: ReactNode;
  buttonClickHandler: () => void;
  size: string;
};

const Button = ({ children, buttonClickHandler, size }: ButtonProps) => {
  const resolution =
    size === "big" ? "py-4 px-8 mt-8" : size === "small" ? "py-2 px-4" : "";
  return (
    <button
      onClick={buttonClickHandler}
      className={`bg-yellow-400 ${resolution} rounded-full uppercase text-sm transition-all duration-300 hover:bg-yellow-300`}
    >
      {children}
    </button>
  );
};

export default Button;
