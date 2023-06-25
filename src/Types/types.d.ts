

export interface ResponseType {
  [key: string]: unknown;
  products?: object[];
  carts?: object[];
  comments?: object[];
}

export interface DataTypeForProducts{
  discountPercentage: number;
  discountedPrice: number;
  id: number; 
  price: number;
  quantity: number;
  title: string;
  total: number;
}