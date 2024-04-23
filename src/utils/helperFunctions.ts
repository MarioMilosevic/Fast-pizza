import { NewPizzaType } from "./types";

export const addNewPizzaFn = (
  id: number,
  name: string,
  unitPrice: number,
  quantity = 1
): NewPizzaType => {
  const totalPrice = unitPrice * quantity;
  const newPizza: NewPizzaType = { id, name, unitPrice, quantity, totalPrice };
  return newPizza;
};
