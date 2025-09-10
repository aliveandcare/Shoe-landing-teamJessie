export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  colors?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}