import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { getTotalCartPrice } from "../redux/features/cartSlice";
const CartStatus = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const totalSum = useSelector(getTotalCartPrice);

  return (
    <footer className="fixed uppercase w-full bottom-0 text-sm bg-stone-800 text-stone-100 flex justify-between items-center p-5">
      <div className="flex gap-4">
        <span>{cart.length}</span>
        <span>{`€${totalSum.toFixed(2)}`}</span>
      </div>
        <Link to={"/cart"} className="flex items-center gap-2">
          Open Cart
          <GoArrowRight />
        </Link>
    </footer>
  );
};

export default CartStatus;
