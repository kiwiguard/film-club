import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="nav-title fs-alt">BÖRJES FILMKLUBB</h1>
      </Link>
      <div className="links">
        <Link to="/movies">filmer</Link>
        <Link to="/toplist">topplista</Link>
        <Link to="/logIn">logga in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
