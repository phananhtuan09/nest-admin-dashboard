import { RESPONSE_SUCCESS_CODE } from '../constants/response.constant';
export class ApiResponseSuccess<T> {
  public statusCode: number;

  public message: string;

  public data: any = null;

  constructor(mess: string, response?: T, statusCode?: number) {
    this.statusCode = statusCode ?? RESPONSE_SUCCESS_CODE;
    this.message = mess;
    this.data = response ?? null;
  }
}
