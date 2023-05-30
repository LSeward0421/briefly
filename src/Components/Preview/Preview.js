import "./Preview.css";

const Preview = ({ article }) => {
  const { title, description, urlToImage, publishedAt } = article;
  return (
    <div className="preview-container">
      <p>{new Date(publishedAt).toLocaleDateString()}</p>
      <h2>{title}</h2>
      {urlToImage && <img src={urlToImage} alt={title} />}
      {description && <p>{description}</p>}
    </div>
  );
};

export default Preview;
