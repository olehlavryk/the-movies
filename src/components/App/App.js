import React from "react";
import FavouriteMovies from "src/pages/FavouriteMovies/FavouriteMovies";
import TopRatedMovies from "src/pages/TopRatedMovies/TopRatedMovies";
import TVShows from "src/pages/TVShows/TVShows";
import { NavBar } from "src/components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { themeSelector } from "src/store/selectors";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";


export const ThemeContext = React.createContext("light");
export const ThemeContextProvider = ThemeContext.Provider;

const App = () => {
  const theme = useSelector(themeSelector);

  return (
    <Router basename="/the-movies">
      <div className={`App theme-${theme}`}>
        <div className="container">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <FavouriteMovies />
            </Route>
            <Route path="/top-rated">
              <TopRatedMovies />
            </Route>
            <Route path="/tv-shows">
              <TVShows />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
