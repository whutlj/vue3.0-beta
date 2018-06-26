import { movieApi } from './fetch';

const dbApi = {
  movie: {
    inTheaters: async () => {
      const result = await movieApi.get('/in_theaters');
      return result.data;
    },
    comingSoon: async () => {
      const result = await movieApi.get('/coming_soon');
      return result.data;
    },
    topMoviw: async () => {
      const result = await movieApi.get('/top250');
      return result.data;
    }
  }
};

export default dbApi;
