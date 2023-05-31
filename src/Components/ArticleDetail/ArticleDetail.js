import { useHistory, useParams } from "react-router-dom";
import "./ArticleDetail.css";

const ArticleDetail = ({ articles }) => {
  const { id } = useParams();
  const history = useHistory();
  const article = articles[id];

  if (!article) {
    return (
      <div className="article-details">
        <div>Article not found</div>
        <button onClick={() => history.push("/")}>Back to List</button>
      </div>
    );
  }

  return (
    <div className="article-details">
      <h2>{article.title || "Title not available"}</h2>
      {article.urlToImage ? (
        <img src={article.urlToImage} alt={article.title} />
      ) : (
        "Image not available"
      )}
      <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
      <p>
        {article.content
          ? article.content.replace(/\[\+\d+ chars\]$/g, "")
          : "Content not available"}
        <a href={article.url} target="_blank" rel="noreferrer">
          Read the full story.
        </a>
      </p>
      <p>Source: {article.source.name || "Source name not available"}</p>
      <button onClick={() => history.push("/")}>Back to List</button>
    </div>
  );
};

export default ArticleDetail;
