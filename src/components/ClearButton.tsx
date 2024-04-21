import { ReactNode } from "react";

type ClearButtonProps = {
  children: ReactNode;
  clearButtonClickHandler: () => void;
};

const ClearButton = ({ children, clearButtonClickHandler }: ClearButtonProps) => {
  return (
    <button
      onClick={clearButtonClickHandler}
      className="bg-stone-100 py-4 px-8 mt-8 text-stone-400 ring-1 ring-stone-300 rounded-full uppercase text-sm transition-all duration-300 hover:bg-stone-300 hover:text-black"
    >
      {children}
    </button>
  );
};

export default ClearButton;
