import format from "date-fns/format";

const fetchArticles = async (query = null, startDate = null, endDate = null ) => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  let url;
  if (query) {
    url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
    if (startDate) {
      url += `&from=${format(startDate, "yyyy-MM-dd")}`
    }
    if (endDate) {
      url += `&to=${format(endDate, "yyyy-MM-dd")}`
    }
  } else {
    url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(` Status: ${response.status}`);
    }

    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error(`Fetch failed: ${error.message}`);
    throw error;
  }
};

export default fetchArticles;
