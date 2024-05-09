import React from 'react';
import styled from 'styled-components';

const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const MovieCard = styled.div`
  background-color: #1a1a1a;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const MovieTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #fff;
`;

interface Movie {
  id: number;
  title: string;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <MovieListContainer>
      {movies.map(movie => (
        <MovieCard key={movie.id}>
          <MovieTitle>{movie.title}</MovieTitle>
        </MovieCard>
      ))}
    </MovieListContainer>
  );
};

export default MovieList;
