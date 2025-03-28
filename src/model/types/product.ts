export enum Vaccinated {
  Full,
  Partially,
  Not,
}

export type ProductMini = {
  imageUrl: string;
  title: string;
  category: number;
  breed: string;
  age: string;
  price: string;
  location: string;
  productId: number;
  rating: number;
  vaccinated: Vaccinated;
};
