const HackerNewsService = {
  getSearch: query => fetch(`http://hn.algolia.com/api/v1/search?query=${query}`, {
    credentials: 'same-origin',
  })
    .then(response => response.json()),
};

export default HackerNewsService;
