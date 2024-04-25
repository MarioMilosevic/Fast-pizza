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

export const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const baseUrl = "https://react-fast-pizza-api.onrender.com/api/order";
export const currentDate = new Date();
