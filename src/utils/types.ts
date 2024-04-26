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

export type OrderCartType = {
  addIngredients: [];
  name: string;
  pizzaId: number;
  quantity: number;
  removeIngredients: [];
  totalPrice: number;
  unitPrice: number;
};

export type DataType = {
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  position: string;
  cart: NewPizzaType[];
};

export type OrderType = {
  cart: OrderCartType[];
  customer: string;
  estimatedDelivery: string;
  id: string;
  orderPrice: number;
  priority: false;
  priorityPrice: number;
  status: string;
};
export type CoordinatesType = {
  latitude: number;
  longitude: number;
}

export type LocationInfo = {
  locality: string;
  city: string;
  countryName: string;
};
