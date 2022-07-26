import { useState } from "react";
import { useHistory } from "react-router-dom";

const Movies = () => {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState("drama");
  const [watched, setWatched] = useState(true);
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = { title, excerpt, rating, genre, watched };

    setIsPending(true);

    fetch("http://localhost:4000/api/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    }).then(() => {
      console.log("new movie added");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="movies">
      <h2>Lägg till ny film</h2>
      <form onSubmit={handleSubmit}>
        <label>Filmtitel:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Sammanfattning:</label>
        <textarea
          required
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
        />
        <label>Betyg:</label>
        <input
          type="text"
          required
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <label>Genre:</label>
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="drama">Drama</option>
          <option value="romance">Romance</option>
          <option value="scifi">Sci-Fi</option>
          <option value="action">Action</option>
          <option value="thriller">Thriller</option>
        </select>
        <label>Har du sett filmen?</label>
        <input
          value={watched}
          defaultChecked={true}
          onChange={(e) => setWatched(e.target.defaultCheked)}
          type="checkbox"
        />
        {!isPending && <button>Lägg till</button>}
        {isPending && <button disabled>Lägger till...</button>}
      </form>
    </div>
  );
};

export default Movies;
