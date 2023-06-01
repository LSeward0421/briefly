import "./Header.css";
import { Link } from "react-router-dom";
import newsLogo from "../../news.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-link">
        <div className="header-content">
          <h1 className="header-title">Briefly</h1>
          <img src={newsLogo} alt="News Logo" className="header-logo" />
        </div>
      </Link>
    </header>
  );
};

export default Header;
