import OrderInput from "./OrderInput";
import Button from "./Button";
import { useSelector } from "react-redux";
import { getTotalCartPrice } from "../redux/features/cartSlice";
import { useState } from "react";
const Order = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const totalSum = useSelector(getTotalCartPrice);
  const priorityPrice = isClicked ? totalSum + 0.05 * totalSum : totalSum;
  return (
    <div className="w-[750px] mx-auto py-8 flex flex-col gap-4">
      <h2 className="font-semibold text-lg">Ready to order? Let's go!</h2>
      <form>
        <OrderInput info="First Name" />
        <OrderInput info="Phone number"  />
        <OrderInput info="Address"  />
        <div className="flex gap-4 py-4">
          <input
            type="checkbox"
            id="checkbox"
            className="w-6 h-6 accent-yellow-400 focus:ring-offset-2 focus:ring focus:ring-yellow-400"
            checked={isClicked}
            onChange={() => setIsClicked((prev) => !prev)}
          />
          <label htmlFor="checkbox" className="text-base font-medium">
            Want to give your order priority?
          </label>
        </div>
        <Button
          buttonClickHandler={() => console.log("treba da podje nedje")}
          size="big"
        >
          <span className="font-medium">
            Order now for €{priorityPrice.toFixed(2)}
          </span>
        </Button>
      </form>
    </div>
  );
};

export default Order;
