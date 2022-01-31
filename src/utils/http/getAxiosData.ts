import { AxiosResponse } from 'axios';
export const getAxiosData = <T>(res: AxiosResponse<T>) => res.data;
