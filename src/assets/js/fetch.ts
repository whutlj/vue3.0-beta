import axios, {
  AxiosRequestConfig,
  AxiosPromise,
  AxiosInstance,
  AxiosResponse,
  CancelToken
} from 'axios';
import qs from 'qs';
interface fetchData {
  method: string;
  url: string;
  data: Object;
  [propName: string]: any;
}

interface Ipending {
  [index: string]: any;
}

interface CreateConfig extends AxiosRequestConfig {
  isFormData?: boolean;
}

const cancelToken = axios.CancelToken;
const pending: Ipending = {};
const createApi = (options: CreateConfig = {}): AxiosInstance => {
  const formData =
    typeof options.isFormData === 'boolean' ? options.isFormData : true;
  const conf = Object.assign(
    {},
    {
      transformRequest: [
        (data: any) => {
          // return data;
          if (formData) {
            return qs.stringify(data);
          }
          return data;
        }
      ]
    },
    options
  );
  const instance = axios.create(conf);
  instance.defaults.timeout = 2500;

  instance.interceptors.request.use((config) => {
    if (config.url) {
      console.log(config);
      const url = config.url;
      removePending(url);
      config.cancelToken = new cancelToken((cancel) => {
        pending[url] = cancel;
      });
    }
    return config;
  });

  instance.interceptors.response.use(
    (res): AxiosResponse => {
      if (res.config.url) {
        removePending(res.config.url);
      }
      return res;
    }
  );
  return instance;
};

const removePending = (url: string): void => {
  if (pending[url]) {
    pending[url]();
    delete pending[url];
  }
};

const api = createApi();
const movieApi = createApi({ baseURL: '/v2/movie/' });
const cityApi = createApi({ baseURL: '/v2/loc/' });
const eventApi = createApi({ baseURL: '/v2/event/' });
const bookApi = createApi({ baseURL: '/v2/book/' });
export { api, cityApi, movieApi, bookApi, eventApi };
