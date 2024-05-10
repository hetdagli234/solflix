import React, { FC, useState } from 'react';

interface Movie {
  id: number;
  title: string;
  thumbnail: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="movie-card" onClick={() => setExpanded(!expanded)}>
      <img src={movie.thumbnail} alt={movie.title} />
      <h3>{movie.title}</h3>
      {expanded && (
        <div className="movie-details">
          {/* Add movie details, trailer, etc. */}
        </div>
      )}
    </div>
  );
};

export default MovieCard;