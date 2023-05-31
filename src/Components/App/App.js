import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import ArticleList from "../ArticleList/ArticleList";
import ArticleDetail from "../ArticleDetail/ArticleDetail";
import NotFound from "../NotFound/NotFound";
// import mockData from "../../mockData";
import fetchArticles from "../../apiCalls";

const App = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const getArticles = async () => {
      const topArticles = await fetchArticles();
      setArticles(topArticles.map((article, index) => ({ ...article, id: index })));
    };

    getArticles();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <SearchBar />
          <ArticleList articles={articles} />
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
