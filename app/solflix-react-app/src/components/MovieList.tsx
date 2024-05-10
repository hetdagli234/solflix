import React, { FC } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import MovieCard from './MovieCard';

interface MovieListProps {
  title: string;
}

const MovieList: FC<MovieListProps> = ({ title }) => {
  const movies = [
    { id: 1, title: 'Movie 1', thumbnail: 'thumbnail1.jpg' },
    { id: 2, title: 'Movie 2', thumbnail: 'thumbnail2.jpg' },
    // Add more movies...
  ];

  return (
    <div className="movie-list">
      <h2>{title}</h2>
      <ScrollMenu>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ScrollMenu>
    </div>
  );
};

export default MovieList;