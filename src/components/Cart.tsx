import { GoArrowLeft } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store/store";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../redux/features/loadingSlice";
import Button from "./Button";
import ClearButton from "./ClearButton";
const Cart = () => {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToMenu = () => {
    navigate("/menu");
    dispatch(setLoading(true));
  };

  return (
    <div className="w-[750px] flex flex-col mx-auto py-4 gap-4">
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

      <div className="flex text-sm justify-between items-center">
        <span>1 x Margherita</span>

        <div className="flex items-center gap-4">
          <span className="font-semibold">€12.00</span>
          <div className="flex items-center  gap-4">
            <Button
              size="small"
              buttonClickHandler={() => console.log("nesto")}
            >
              -
            </Button>
            <p>1</p>
            <Button
              size="small"
              buttonClickHandler={() => console.log("nesto")}
            >
              +
            </Button>
            <Button
              size="small"
              buttonClickHandler={() => console.log("nesto")}
            >
              Delete
            </Button>
          </div>
              </div>
      </div>
              <div className="flex gap-4">
              <Button buttonClickHandler={() => console.log("nesto")} size="big">Order Pizzas</Button>
              <ClearButton clearButtonClickHandler={() => console.log("nesto")}>Clear Cart</ClearButton>
              </div>
    </div>
  );
};

export default Cart;
