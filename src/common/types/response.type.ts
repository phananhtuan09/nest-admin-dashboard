interface IErrorProps {
  message?: string;
}

export interface ICommonResponseProps<T> {
  isSuccess: boolean;
  message: string;
  statusCode: number;
  data: T;
  errors: IErrorProps[];
}
