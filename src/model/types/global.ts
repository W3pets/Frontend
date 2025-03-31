export enum Paths {
  Default = '/',
  Cart = '/cart',
  Whislist = '/whishlist',
  Martket = '/market',
  Category = '/category',
  Product = '/product',

  Profile = '/u/profile',
  Help = '/help',
  Auth = '/u/auth',
  Terms = '/u/Terms',
  Privacy = '/u/privacy',

  Blog = '/resources/blog',
  NewsLetter = '/resources/',

  SellersFeatured = '/market',
  Sellers = '/sellers',
}

export enum ImgPaths {
  Logo = '/logo.svg',
  Banner = '/banner/banner_1.jpeg',
}

export type Dropdown = {
  id?: string | number;
  isRange?: boolean;
  name: string | number;
  items?: Dropdown[];
};
