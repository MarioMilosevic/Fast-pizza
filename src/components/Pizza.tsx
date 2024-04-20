import { PizzaType } from "../utils/types";
import { useState } from "react";
import Button from "./Button";
// import { UserCartItem } from "../redux/features/userSlice";
import { useSelector, useDispatch } from "react-redux";
// import { addItemToCart, deleteItem, UserCartItem } from "../redux/features/userSlice";
import { RootState } from "../redux/store/store";
const Pizza = ({
  imageUrl,
  name,
  ingredients,
  soldOut,
  unitPrice,
  id,
}: PizzaType) => {
  const [pizza, setPizza] = useState({
    totalNumber: 0,
    totalPrice: 0,
  });
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const addFirstPizza = () => {
    setPizza((prev) => ({
      ...prev,
      totalNumber: prev.totalNumber = 1,
      totalPrice: prev.totalPrice = unitPrice,
    }));
  };

  const deleteAllPizzas = () => {
    setPizza({totalNumber:0, totalPrice:0})
  }

  const addPizza = () => {
    setPizza((prev) => ({
      ...prev, 
      totalNumber: prev.totalNumber + 1,
      totalPrice: prev.totalPrice + unitPrice
    }))
  }

  const removePizza = () => {
     setPizza((prev) => ({
       ...prev,
       totalNumber: prev.totalNumber - 1,
       totalPrice: prev.totalPrice - unitPrice,
     }));
  }


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
            {pizza.totalNumber > 0 && (
              <div className="flex items-center gap-4">
                <Button
                  size="small"
                  buttonClickHandler={removePizza}
                >
                  -
                </Button>
                <p>{pizza.totalNumber }</p>
                <Button
                  size="small"
                  buttonClickHandler={addPizza}
                >
                  +
                </Button>
                <Button
                  size="small"
                  buttonClickHandler={deleteAllPizzas}
                >
                  Delete
                </Button>
              </div>
            )}
            <p className="text-sm">
              {soldOut ? "SOLD OUT" : `€${unitPrice.toFixed(2)}`}
            </p>

            {!soldOut && pizza.totalNumber === 0 && (
              <Button
                buttonClickHandler={addFirstPizza}
                size="small"
              >
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
