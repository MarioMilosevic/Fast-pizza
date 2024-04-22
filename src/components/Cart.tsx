import { GoArrowLeft } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store/store";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../redux/features/loadingSlice";
import Button from "./Button";
import ClearButton from "./ClearButton";
import CartItem from "./CartItem";
const Cart = () => {
  const user = useSelector((state: RootState) => state.user);

  const { cart } = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(cart);

  const goToMenu = () => {
    navigate("/menu");
    dispatch(setLoading(true));
  };

  return (
    <div className="w-[750px] flex flex-col mx-auto pt-4 pb-28 gap-4 cursor-pointer">
      <div
        className="flex gap-2 items-center text-sm hover:underline"
        onClick={goToMenu}
      >
        <GoArrowLeft />
        <a>Back to menu</a>
      </div>
      <div className="py-4 font-medium text-lg">
        Your cart, <span className="capitalize">{user.name}</span>
      </div>
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}

      <div className="flex gap-4">
        <Button buttonClickHandler={() => console.log("nesto")} size="big">
          Order Pizzas
        </Button>
        <ClearButton clearButtonClickHandler={() => console.log("nesto")}>
          Clear Cart
        </ClearButton>
      </div>
    </div>
  );
};

export default Cart;
