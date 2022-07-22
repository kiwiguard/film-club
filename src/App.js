import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from "./Components/Movies";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/movies">
              <Movies />
            </Route>
            <Route exact path="/movies/:id">
              <MovieDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
