import "./ArticleList.css";
import Preview from "../Preview/Preview";
import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
  const generatePreviews = () => {
    return articles.map((article) => (
      <div key={article.id}>
        <Link to={`/article/${article.id}`}>
          <Preview article={article} />
        </Link>
      </div>
    ));
  };

  return (
    <div className="list-container">
      <div className="article-list">{generatePreviews()}</div>
    </div>
  );
};

export default ArticleList;
