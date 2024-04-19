export type PizzaItem = {
  id: number;
  imageUrl: string;
  ingrediends: string[];
  name: string;
  soldOut: boolean;
  unitPrice: number;
};

export type fetchResponse = {
  status: string;
  data: PizzaItem[];
};
