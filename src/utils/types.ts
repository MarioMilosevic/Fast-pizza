export type PizzaType = {
  id: number;
  imageUrl: string;
  ingredients: string[];
  name: string;
  soldOut: boolean;
  unitPrice: number;
};

export type fetchResponse = {
  status: string;
  data: PizzaType[];
};

export type NewPizzaType = {
  pizzaId: number;
  name: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  priority: boolean;
};
