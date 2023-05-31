import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-link">
        <h1>Briefly News Reader</h1>
      </Link>
    </header>
  );
};

export default Header;
