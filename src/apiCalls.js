const fetchArticles = async () => {
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=857b36c832434ecbbd97504cb441c9e3');
  const data = await response.json();
  console.log(data)
  return data.articles;
};

export default fetchArticles;
