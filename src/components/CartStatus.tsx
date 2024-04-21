import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
const CartStatus = () => {
  const cart = useSelector((state: RootState) => state.cart);
  console.log(cart.value);
  const totalSum = cart.value.reduce(
    (acc, curr) => acc + curr.unitPrice * curr.quantity,
    0
  );
  console.log(totalSum);
  return (
    <footer className="fixed z-10 uppercase w-full bottom-0 text-sm bg-stone-800 text-stone-100 flex justify-between items-center p-5">
      <div className="flex gap-4">
        <span>{cart.value.length}</span>
        <span>{`€${totalSum.toFixed(2)}`}</span>
      </div>
      <div className="flex gap-2 items-center">
        <Link to={"/cart"}>Open Cart</Link>
        <GoArrowRight />
      </div>
    </footer>
  );
};

export default CartStatus;
