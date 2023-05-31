import { useHistory, useParams } from "react-router-dom";
import "./ArticleDetail.css";

const ArticleDetail = ({ articles }) => {
  const { id } = useParams();
  const history = useHistory();
  const article = articles[id];

  return (
    <div className="article-details">
      {article ? (
        <>
          <h2>{article.title}</h2>
          <img src={article.urlToImage} alt={article.title} />
          <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
          <p>{article.content.replace(/\[\+\d+ chars\]$/g, '')} <a href={article.url} target="_blank" rel="noreferrer">Read the full story.</a></p>
          <p>Source: {article.source.name}</p>
        </>
      ) : (
        <div>Article not found</div>
      )}
      <button onClick={() => history.push("/")}>Back to List</button>
    </div>
  );
};

export default ArticleDetail;
