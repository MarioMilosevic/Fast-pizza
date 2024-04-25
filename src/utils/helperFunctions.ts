import { CoordinatesType, NewPizzaType } from "./types";

export const addNewPizzaFn = (
  pizzaId: number,
  name: string,
  unitPrice: number,
  quantity = 1,
  priority = false
): NewPizzaType => {
  const totalPrice = unitPrice * quantity;
  const newPizza: NewPizzaType = {
    pizzaId,
    name,
    unitPrice,
    quantity,
    totalPrice,
    priority,
  };
  return newPizza;
};

export async function getAddress({ latitude, longitude }:CoordinatesType) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw new Error("Failed getting address");

  const data = await res.json();
  return data;
}
