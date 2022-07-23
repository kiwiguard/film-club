import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Börjes filmklubb</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/movies">Filmer</Link>
        <Link to="/toplist">Topplista</Link>
        <Link to="/logIn">Logga in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
