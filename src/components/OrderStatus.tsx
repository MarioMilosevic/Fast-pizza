import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

const OrderStatus = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  console.log(cart);
  return (
    <div className="w-[750px] mx-auto py-8">
      <div className="flex justify-between pb-8">
        <h2 className="font-medium text-lg">Order #AV1NX7 status</h2>
        <div className="flex gap-2">
          <span className="rounded-full text-sm uppercase text-stone-50 px-2 py-1 bg-red-500">
            Priority
          </span>
          <span className="rounded-full text-sm uppercase text-stone-50 px-2 py-1 bg-green-500">
            Preparing order
          </span>
        </div>
      </div>
      <div className="bg-stone-200 px-6 py-4 flex justify-between">
        <span className="font-medium">Only 47 minutes left 😀</span>
        <span className="text-xs text-stone-500">
          (Estimated delivery: Apr 23, 07:03 PM)
        </span>
      </div>
      <ul className="flex flex-col gap-2 py-8">
        {cart.map((item) => {
          return (
            <li className="border-b border-stone-200 py-2 flex justify-between text-sm">
              <div className="flex gap-2">
                <span className="font-medium">{item.quantity} x</span>
                <span>{item.name}</span>
              </div>
              <span className="font-bold">{`$${item.totalPrice.toFixed(
                2
              )}`}</span>
            </li>
          );
        })}
      </ul>
      <div className="bg-stone-200 p-6 flex flex-col gap-2">
        <p className="text-sm font-medium">Price pizza: $63.00</p>
        <p className="text-sm font-medium">Price priority $13.00</p>
        <p className="text-base font-semibold">To pay on delivery: $76.00</p>
      </div>
    </div>
  );
};

export default OrderStatus;
