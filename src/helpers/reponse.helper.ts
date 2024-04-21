import { ICommonResponseProps } from '~/types/response.type';
import { DEFAULT_RESPONSE } from '~/constants/response.constant';

export function responseHelper<T>(
  data: Partial<ICommonResponseProps<T>>,
): ICommonResponseProps<T> {
  return {
    ...DEFAULT_RESPONSE,
    ...data,
  };
}
