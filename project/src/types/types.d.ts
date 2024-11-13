export enum ProductType {
  "wonton",
  "dip",
  "drink",
}

export type Wonton = {
  id: number;
  type: ProductType.wonton;
  name: string;
  description: string;
  price: number;
  ingredients: string[];
};

export type Dip = {
  id: number;
  type: ProductType.dip;
  name: string;
  description: string;
  price: number;
};

export type Drink = {
  id: number;
  type: ProductType.drink;
  name: string;
  description: string;
  price: number;
};

enum OrderState {
  "waiting",
  "processing",
  "done",
}

export type Order = {
  id: number;
  items: ProductType[];
  orderValue: number;
  eta: number;
  timestamp: string;
  state: OrderState;
};

export type Receipt = {
  id: string;
  orderValue: number;
  timestamp: string;
  items: Order[];
};

/* export type Key = {

} */

export type OrderBody = {
  items: number[];
};

export type CartItem = {
  item: Wonton | Drink | Dip;
  amount: number;
};
