import { PizzaType } from "../utils/types";
import { useState } from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store/store";
import { dodajPicu } from "../redux/features/cartSlice";
import { pizzaState, PizzaStateType } from "../utils/constants";
const Pizza = ({
  imageUrl,
  name,
  ingredients,
  soldOut,
  unitPrice,
  id,
}: PizzaType) => {
  const [pizza, setPizza] = useState<PizzaStateType>(pizzaState);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const addFirstPizza = () => {
    setPizza((prev) => ({
      ...prev,
      id,
      name,
      unitPrice,
      quantity: 1,
    }));
    // dispatch(dodajPicu(pizza));
  };

  // zovi me kad si napravio logiku oko dodavanja pizza u kart, i kad si napravio rutu za cart (prazan ekran)

  const deleteAllPizzas = () => {
    setPizza(pizzaState);
    console.log(pizza);
  };

  const updatePizza = (operation: string) => {
    setPizza((prev) => ({
      ...prev,
      quantity: prev.quantity + (operation === "+" ? 1 : -1),
    }));
  };

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
            {pizza.quantity > 0 && (
              <div className="flex items-center gap-4">
                <Button
                  size="small"
                  buttonClickHandler={() => updatePizza("-")}
                >
                  -
                </Button>
                <p>{pizza.quantity}</p>
                <Button
                  size="small"
                  buttonClickHandler={() => updatePizza("+")}
                >
                  +
                </Button>
                <Button size="small" buttonClickHandler={deleteAllPizzas}>
                  Delete
                </Button>
              </div>
            )}
            <p className="text-sm">
              {soldOut ? "SOLD OUT" : `€${unitPrice.toFixed(2)}`}
            </p>

            {!soldOut && pizza.quantity === 0 && (
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
