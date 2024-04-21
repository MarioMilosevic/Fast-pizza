export const url = (route: string) => {
  const baseUrl = `https://react-fast-pizza-api.onrender.com/api/${route}`;
  return baseUrl;
};

export type PizzaStateType = {
  id: number;
  name: string;
  unitPrice: number;
  quantity: number;
};

export const pizzaState = {
  id: 0,
  name: "",
  unitPrice: 0,
  quantity: 0,
};
