import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export default class ThemoviedbAPI {
  constructor() {
    this.key = '499f19dfb296e7dc0de246ae16a3afd4';
    this.append = 'credits,reviews';
  }

  async fetchTrending() {
    return await axios.get(`/trending/movie/day?api_key=${this.key}`);
  }

  async fetchById(id) {
    return await axios.get(
      `/movie/${id}?api_key=${this.key}&append_to_response=${this.append}`
    );
  }

  async fetchBySearch(query) {
    return await axios.get(`/search/movie?api_key=${this.key}&query=${query}`);
  }
}
