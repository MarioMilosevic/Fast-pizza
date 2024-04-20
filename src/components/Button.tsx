import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  buttonClickHandler: () => void;
};

const Button = ({ children, buttonClickHandler }: ButtonProps) => {
  return (
    <Link
      to={"/menu"}
      onClick={buttonClickHandler}
      className="bg-yellow-400 px-8 py-4 mt-8 rounded-full uppercase text-sm transition-all duration-300 hover:bg-yellow-300"
    >
      {children}
    </Link>
  );
};

export default Button;
