import React from "react";
import { useEffect, useState } from "react";
import "./app.css";
import MovieData from "./MovieData";
import Searchicon from "./search.svg";
const movie_url = "http://www.omdbapi.com/?apikey=5d2ec321";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(movies);
  console.log(searchTerm);

  const searchMovies = async (title) => {
    const response = await fetch(`${movie_url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("superman");
  }, []);
  return (
    <div className="app">
      <h1>MovieHUB</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search any movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={Searchicon}
          width={"30px"}
          alt="Search Icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      <div className="container">
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieData key={movie.imdbId} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
