function MovieData({ movie }) {
  return (
    <div key={movie.imdbId} className="movie">
      <div className="year">
        <p>{movie.Year}</p>
      </div>
      <div>
        {movie.Poster != "N/A" ? (
          <img src={movie.Poster} alt="poster" />
        ) : (
          <img src="https://via.placeholder.com/400" alt="No image Found" />
        )}
      </div>
      <div className="title">
        <p>{movie.Title}</p>
        <p>{movie.Type}</p>
      </div>
    </div>
  );
}

export default MovieData;
