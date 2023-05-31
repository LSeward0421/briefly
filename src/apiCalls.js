const fetchArticles = async (query = null) => {
  let url;
  if (query) {
    url = `https://newsapi.org/v2/everything?q=${query}&apiKey=857b36c832434ecbbd97504cb441c9e3`;
  } else {
    url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=857b36c832434ecbbd97504cb441c9e3";
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error(`Fetch failed: ${error.message}`);
    throw error;
  }
};

export default fetchArticles;
