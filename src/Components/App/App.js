import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import ArticleList from "../ArticleList/ArticleList";
import ArticleDetail from "../ArticleDetail/ArticleDetail";
import NotFound from "../NotFound/NotFound";
import fetchArticles from "../../apiCalls";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async (query = "") => {
    setLoading(true);
    try {
      const searchArticles = await fetchArticles(query);
      setArticles(
        searchArticles.map((article, index) => ({ ...article, id: index }))
      );
      setError(null);
    } catch (error) {
      setError(`Uh-oh! Something went wrong. Please refresh the page.${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setSearch("");
    handleSearch("");
  };

  return (
    <div className="App">
      {error && <p className="error-msg">{error}</p>}
      <Header />
      <Switch>
        <Route exact path="/">
          <SearchBar
            onSearch={handleSearch}
            onClearSearch={clearSearch}
            search={search}
          />
          {loading ? <p>Loading...</p> : <ArticleList articles={articles} />}
        </Route>
        <Route path="/article/:id">
          <ArticleDetail articles={articles} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
