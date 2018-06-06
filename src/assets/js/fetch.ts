import axios, {
  AxiosRequestConfig,
  AxiosPromise,
  AxiosInstance,
  AxiosResponse,
  CancelToken
} from 'axios';
interface fetchData {
  method: string;
  url: string;
  data: Object;
  [propName: string]: any;
}

interface Ipending {
  [index: string]: any;
}

const fetchGet = async (url: string, params: any = {}) => {
  await axios
    .get(url, {
      params: params
    })
    .then((res) => res.data);
  // return data;
};

const cancelToken = axios.CancelToken;
const pending: Ipending = {};
const createApi = (options = {}): AxiosInstance => {
  const conf = Object.assign(
    {},
    {
      transformRequest: [
        function(data: any) {
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
export { fetchGet, api, cityApi, movieApi, bookApi, eventApi };
