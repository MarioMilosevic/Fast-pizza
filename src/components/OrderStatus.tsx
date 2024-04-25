import { useParams } from "react-router-dom";
import { currentDate } from "../utils/constants";
import { useDispatch } from "react-redux";
import { fetchOrder } from "../utils/fetch";
import { useState, useEffect } from "react";
import { OrderType } from "../utils/types";
import { formatDate, formatToMinutes } from "../utils/dateFunctions";
import { clearCart } from "../redux/features/cartSlice";
import Error from "./Error";
import { setLoading } from "../redux/features/globalLoadingSlice";
import ErrorSearch from "./ErrorSearch";
import { OrderCartType } from "../utils/types";

const OrderStatus = () => {
  const [order, setOrder] = useState<OrderType>();
  const { orderId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await fetchOrder(orderId);
        setOrder(data);
        dispatch(clearCart());
        dispatch(setLoading(false));
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    }
    fetchData();
  }, [orderId, dispatch]);

  return (
    <>
      {order && (
        <div className="w-[750px] mx-auto py-8">
          <div className="flex justify-between pb-8">
            <h2 className="font-medium text-lg">Order #{orderId} status</h2>
            <div className="flex gap-2">
              {order.priority && (
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
            <span className="font-medium">
              Only {formatToMinutes(order.estimatedDelivery, currentDate)}{" "}
              minutes left 😀
            </span>
            <span className="text-xs text-stone-500">
              (Estimated delivery: {formatDate(order.estimatedDelivery)})
            </span>
          </div>
          <ul className="flex flex-col gap-2 py-8">
            {order.cart.map((item: OrderCartType) => {
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
              Price pizza: €{order.orderPrice.toFixed(2)}
            </p>
            {order.priority && (
              <p className="text-sm font-medium">
                Price priority €{order.priorityPrice.toFixed(2)}
              </p>
            )}
            <p className="text-base font-semibold">
              To pay on delivery: €{order.orderPrice.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderStatus;
