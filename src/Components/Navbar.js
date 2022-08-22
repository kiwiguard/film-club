import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="nav-title fs-alt">
          BÖRJES FILMKLUBB{" "}
          <span className="material-symbols-outlined fs-36 fs-yellow fill no-margin rotate-25">
            movie
          </span>
        </h1>
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
