import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { getTotalCartPrice } from "../redux/features/cartSlice";
import { fetchOrder } from "../utils/fetch";
import { useState, useEffect } from "react";
import { OrderType } from "../utils/fetch";
import { formatDate } from "../utils/dateFunctions";

const OrderStatus = () => {
  const [order, setOrder] = useState<OrderType>();
  const { cart } = useSelector((state: RootState) => state.cart);
  const { priority } = useSelector((state: RootState) => state.user);
  const totalSum = useSelector(getTotalCartPrice);
  const { orderId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await fetchOrder(orderId);
        setOrder(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    }
    fetchData();
  }, [orderId]);

  const priorityExpense = priority ? totalSum * 0.05 : 0;

  if (!order) {
  return
}

  return (
    <div className="w-[750px] mx-auto py-8">
      <div className="flex justify-between pb-8">
        <h2 className="font-medium text-lg">Order #{orderId} status</h2>
        <div className="flex gap-2">
          {priority && (
            <span className="rounded-full text-sm uppercase text-stone-50 px-2 py-1 bg-red-500">
              Priority
            </span>
          )}
          <span className="rounded-full text-sm uppercase text-stone-50 px-2 py-1 bg-green-500">
            Preparing order
          </span>
        </div>
      </div>
      <div className="bg-stone-200 px-6 py-4 flex justify-between">
        <span className="font-medium">Only kad nabavim minutes left 😀</span>
        <span className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(order?.estimatedDelivery)})
        </span>
      </div>
      <ul className="flex flex-col gap-2 py-8">
        {cart.map((item) => {
          return (
            <li
              key={item.pizzaId}
              className="border-b border-stone-200 py-2 flex justify-between text-sm"
            >
              <div className="flex gap-2">
                <span className="font-medium">{item.quantity} x</span>
                <span>{item.name}</span>
              </div>
              <span className="font-bold">{`€${item.totalPrice.toFixed(
                2
              )}`}</span>
            </li>
          );
        })}
      </ul>
      <div className="bg-stone-200 p-6 flex flex-col gap-2">
        <p className="text-sm font-medium">
          Price pizza: €{totalSum.toFixed(2)}
        </p>
        {priority && (
          <p className="text-sm font-medium">
            Price priority €{priorityExpense.toFixed(2)}
          </p>
        )}
        <p className="text-base font-semibold">
          To pay on delivery: €{(totalSum + priorityExpense).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default OrderStatus;
