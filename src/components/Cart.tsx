import { GoArrowLeft } from "react-icons/go";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../redux/features/globalLoadingSlice";
import { clearCart } from "../redux/features/cartSlice";
import Button from "./Button";
import ClearButton from "./ClearButton";
import CartItem from "./CartItem";
import { useCartSlice } from "../utils/hooks";

const Cart = () => {
  const {
    user: { name },
    cart: { cart },
  } = useCartSlice();

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      {cart.length > 0 && (
        <>
          <div className="py-4 font-medium text-lg">
            Your cart, <span className="capitalize">{name}</span>
          </div>

          {cart.map((item) => (
            <CartItem key={item.pizzaId} {...item} />
          ))}

          <div className="flex gap-4">
            <Button
              buttonClickHandler={() => navigate("/order/new")}
              size="big"
            >
              Order Pizzas
            </Button>
            <ClearButton clearButtonClickHandler={() => dispatch(clearCart())}>
              Clear Cart
            </ClearButton>
          </div>
        </>
      )}
      {cart.length === 0 && (
        <p className="font-semibold pt-4">
          Your cart is still empty. Start adding some pizzas 😃
        </p>
      )}
    </div>
  );
};

export default Cart;
