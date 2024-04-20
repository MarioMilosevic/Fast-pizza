import { GoArrowRight } from "react-icons/go";
const CartStatus = () => {
  return (
    <footer className="fixed z-10 uppercase w-full bottom-0 text-sm bg-stone-800 text-stone-100 flex justify-between items-center p-5">
      <div className="flex gap-4">
        <span>3</span>
        <span>€36.00</span>
      </div>
      <div className="flex gap-2 items-center">
        <p>Open Cart</p>
        <GoArrowRight />
      </div>
    </footer>
  );
};

export default CartStatus;
