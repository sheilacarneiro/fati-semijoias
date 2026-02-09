export type Category =
  | 'Brincos'
  | 'Anéis'
  | 'Correntes'
  | 'Pulseiras'
  | 'Pingentes';

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: Category;
  price: number;
  photos?: string[];
}
