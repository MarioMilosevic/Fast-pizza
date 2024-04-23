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
  id: number;
};
const CartItem = ({ name, unitPrice, quantity, id }: CartItemProps) => {
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
            buttonClickHandler={() => dispatch(decrementItemQuantity(id))}
          >
            -
          </Button>
          <span className="font-semibold">{quantity}</span>
          <Button
            size="small"
            buttonClickHandler={() => dispatch(incrementItemQuantity(id))}
          >
            +
          </Button>
          <Button
            size="small"
            buttonClickHandler={() => dispatch(removeAllItems(id))}
          >
            Delete
          </Button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
