import themoviedbAPI from 'Api/ThemoviedbAPI';

const fetch = new themoviedbAPI();

const handleSubmit = e => {
  e.preventDefault();
  // const search = e.target.elements.query.value;
  async function getTrends() {
    try {
      const response = await fetch.fetchTrending();
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  getTrends();
};

const Movies = () => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Movies;
