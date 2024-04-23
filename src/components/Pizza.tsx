import { PizzaType } from "../utils/types";
import { addNewPizzaFn } from "../utils/helperFunctions";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addFirstItem,
  removeAllItems,
  incrementItemQuantity,
  decrementItemQuantity,
} from "../redux/features/cartSlice";
import { RootState } from "../redux/store/store";
const Pizza = ({
  imageUrl,
  name,
  ingredients,
  soldOut,
  unitPrice,
  id,
}: PizzaType) => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  const { quantity } = cart.find((item) => item.pizzaId === id) || { quantity: 0 };

  const addFirstPizza = () => {
    const newPizza = addNewPizzaFn(id, name, unitPrice);
    console.log(newPizza)
    dispatch(addFirstItem(newPizza));
  };
console.log(cart)
  return (
    <li className="py-2 flex justify-between">
      <div className="flex gap-4 w-full">
        <img
          src={imageUrl}
          alt={name}
          className={`h-24 ${soldOut && "grayscale opacity-70"}`}
        />
        <div className="flex flex-col py-1 justify-between w-full">
          <div>
            <h2 className="text-sm font-medium">{name}</h2>
            <div className="flex gap-1">
              {ingredients.map((ingredient: string, index: number) => (
                <p key={index} className="capitalize italic text-xs">
                  {index === ingredients.length - 1
                    ? ingredient
                    : `${ingredient}, `}
                </p>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            {quantity > 0 && (
              <div className="flex items-center gap-4">
                <Button
                  size="small"
                  buttonClickHandler={() => dispatch(decrementItemQuantity(id))}
                >
                  -
                </Button>
                <p>{quantity}</p>
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
            )}
            <p className="text-sm">
              {soldOut ? "SOLD OUT" : `€${unitPrice.toFixed(2)}`}
            </p>

            {!soldOut && !quantity && (
              <Button buttonClickHandler={addFirstPizza} size="small">
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end"></div>
    </li>
  );
};

export default Pizza;
