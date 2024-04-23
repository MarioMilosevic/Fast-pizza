import { NewPizzaType } from "./types";

export const addNewPizzaFn = (
  pizzaId: number,
  name: string,
  unitPrice: number,
  quantity = 1
): NewPizzaType => {
  const totalPrice = unitPrice * quantity;
  const newPizza: NewPizzaType = { pizzaId, name, unitPrice, quantity, totalPrice };
  return newPizza;
};
