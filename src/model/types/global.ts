export enum Paths {
  Default = '/',
  Cart = '/cart',
  Whislist = '/whishlist',
  Martket = '/market',
  Category = '/category',
  Product = '/product',

  Profile = '/u/profile',
  Register = '/u/auth/register',
  Login = '/u/auth/login',
  Help = '/help',
  Terms = '/legal/u/Terms',
  Privacy = '/legal/u/privacy',

  Blog = '/resources/blog',
  NewsLetter = '/resources/',

  SellersFeatured = '/market',
  SellerRegister = '/sellers/register',
  SellerTerms = '/legal/seller/Terms',
  SellerPrivacy = '/legal/seller/privacy',
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
