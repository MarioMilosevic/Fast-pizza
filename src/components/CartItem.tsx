import Button from "./Button";
import {
  removeAllItems,
  incrementItemQuantity,
  decrementItemQuantity,
} from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
type CartItemProps = {
  name: string;
  unitPrice: number;
  quantity: number;
  pizzaId: number;
};
const CartItem = ({ name, unitPrice, quantity, pizzaId }: CartItemProps) => {
  const dispatch = useDispatch();
  return (
    <article className="flex text-sm justify-between items-center pb-2 border-b border-b-stone-300">
      <span>
        {quantity} x {name}
      </span>
      <div className="flex items-center gap-4">
        <span className="font-semibold">€{unitPrice}</span>
        <div className="flex items-center  gap-4">
          <Button
            size="small"
            buttonClickHandler={() => dispatch(decrementItemQuantity(pizzaId))}
          >
            -
          </Button>
          <span className="font-semibold">{quantity}</span>
          <Button
            size="small"
            buttonClickHandler={() => dispatch(incrementItemQuantity(pizzaId))}
          >
            +
          </Button>
          <Button
            size="small"
            buttonClickHandler={() => dispatch(removeAllItems(pizzaId))}
          >
            Delete
          </Button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
