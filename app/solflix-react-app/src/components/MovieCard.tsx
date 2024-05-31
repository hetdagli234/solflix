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
          <h2>{movie.title}</h2>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Dummy Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
export default MovieCard;