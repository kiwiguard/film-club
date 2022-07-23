import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Vafalls!</h2>
      <p>Här har du inte att göra. Schas!</p>
      <Link to="/">Tillbaka till startsidan...</Link>
    </div>
  );
};

export default NotFound;
