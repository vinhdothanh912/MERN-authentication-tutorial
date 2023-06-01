import { AxiosResponse } from 'axios';

import { ApiClient } from './api-client';
import { ILoginRequest, ILoginResponse } from 'src/variables/interfaces/auth-interfaces';

export const login = async (payload: ILoginRequest) => {
  const response: AxiosResponse<ILoginResponse> = await ApiClient.post(`/api/v1/auth/sign-in`, payload);
  return response.data;
};
