import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  buttonClickHandler: () => void;
  size: string;
};

const Button = ({ children, buttonClickHandler, size }: ButtonProps) => {
  const resolution =
    size === "big" ? "py-4 px-8 mt-8" : size === "small" ? "py-2 px-4" : "";
  return (
    <Link
      to={"/menu"}
      onClick={buttonClickHandler}
      className={`bg-yellow-400 ${resolution} rounded-full uppercase text-sm transition-all duration-300 hover:bg-yellow-300`}
    >
      {children}
    </Link>
  );
};

export default Button;
