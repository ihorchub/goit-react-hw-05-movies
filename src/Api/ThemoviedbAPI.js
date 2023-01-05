import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export default class ThemoviedbAPI {
  constructor() {
    this.key = '499f19dfb296e7dc0de246ae16a3afd4';
    this.append = 'credits,reviews';
    this.searchQuery = '';
  }

  async fetchTrending() {
    return await axios.get(`/trending/movie/day?api_key=${this.key}`);
  }

  async fetchById(id) {
    return await axios.get(
      `/movie/${id}?api_key=${this.key}&append_to_response=${this.append}`
    );
  }

  // async fetch() {
  //   try {
  //     const searchParams = new URLSearchParams({
  //       api_key: this.key,
  //       query: this.searchQuery,
  //     });
  //     const request = `${this.url}search/movie?${searchParams}`;
  //     const data = await axios.get(request);
  //     return data;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // get query() {
  //   return this.searchQuery;
  // }

  // set query(newQuery) {
  //   this.searchQuery = newQuery;
  // }
}
