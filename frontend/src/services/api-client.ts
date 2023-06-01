import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { RoutePaths } from 'src/routes/routes-constants';
import { EAuthToken } from 'src/variables/enums/storage';
import { ResponseError } from 'src/variables/interfaces/error-response';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
const requestHandler = (config: AxiosRequestConfig) => {
  const atk = localStorage.getItem(EAuthToken.ACCESS_TOKEN);

  const configHeaders = {
    Authorization: `Bearer ${atk}`,
    ...config.headers,
  };

  config.headers = configHeaders;
  config.params = {
    ...config.params,
    version: Date.now(),
  };

  return config;
};

const responseErrorHandler = async (err: AxiosError) => {
  if (err?.response?.status === 401) {
    localStorage.clear();
    window.location.pathname = RoutePaths.LOGIN;
    return;
  }

  if (err?.response?.status === 403) {
    window.location.pathname = RoutePaths.HOME;
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = err?.response?.data;
  const message = data?.message;

  if (message && typeof message === 'object' && message.length) {
    throw new ResponseError(message[0], data);
  }
  if (message) throw new ResponseError(message, data);
  return Promise.reject(err);
};

axiosInstance.interceptors.request.use(requestHandler, (err) => Promise.reject(err));
axiosInstance.interceptors.response.use((response: unknown) => response, responseErrorHandler);

export { axiosInstance as ApiClient, ResponseError };
