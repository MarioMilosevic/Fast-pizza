export type PizzaItem = {
  id: number;
  imageUrl: string;
  ingredients: string[];
  name: string;
  soldOut: boolean;
  unitPrice: number;
};

export type fetchResponse = {
  status: string;
  data: PizzaItem[];
};
