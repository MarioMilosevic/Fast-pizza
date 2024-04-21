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
  id: number;
  name: string;
  unitPrice: number;
  quantity: number;
}