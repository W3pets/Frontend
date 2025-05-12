import { StatusCode } from '../types/global';

export type APIRes<T> = {
  data?: T;
  status: APIStatusDTO;
};

export type APIStatusDTO = {
  success: boolean;
  code: StatusCode;
  message: string;
};

export type APIErrorDTO2 = {
  error: string;
  statusCode: number;
  message: string;
};
