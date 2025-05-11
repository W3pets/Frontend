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
  Users = 'u',

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

export type Paragraph = {
  h: string;
  paragraphs: (Paragraph | string)[];
};

export interface IFile {
  file: File;
  src: string;
  baseUrl: string;
}

export enum StatusCode {
  Success = 200,
  BadRequest = 400,
  UnAuth = 401,
  Forbidden = 403,
  Timeout = 408,
  Server = 500,
  Network = 503,
}

export interface Message {
  code?: StatusCode;
  category: MessageType;
  message: string;
  time?: number; //seconds
}

export type GlobalStore = {
  msg: Message | null;
};

export enum MessageType {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}
