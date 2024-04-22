import { NewPizzaType } from "./types";

export const addNewPizzaFn = (
  id: number,
  name: string,
  unitPrice: number,
  quantity = 1
) => {
  const newPizza: NewPizzaType = { id, name, unitPrice, quantity };
  return newPizza;
};

// export const findItem = (arr, id: string) => {
  
// }