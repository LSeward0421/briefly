import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import ArticleList from "../ArticleList/ArticleList";
import ArticleDetail from "../ArticleDetail/ArticleDetail";
import NotFound from "../NotFound/NotFound";
import mockData from "../../mockData";

const App = () => {

  const articles = mockData.articles.map((article, index) => ({
    ...article,
    id: index
  }));

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
