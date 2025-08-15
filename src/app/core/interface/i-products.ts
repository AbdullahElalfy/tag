export interface iProducts {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  sizes: string[];
  category: string;
  quantity?: number;
}
