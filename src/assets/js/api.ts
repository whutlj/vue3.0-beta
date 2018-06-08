import { movieApi } from './fetch';

const dbApi = {
  movie: {
    inTheaters: async () => {
      const result = await movieApi.get('/in_theaters');
      return result.data;
    }
  }
};

export default dbApi;
