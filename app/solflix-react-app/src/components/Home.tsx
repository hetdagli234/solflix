import React, { FC } from 'react';
import MovieList from './MovieList';

const Home: FC = () => {
  return (
    <div className="home">
      <h1>SolFlix</h1>
      <MovieList title="Trending Now" />
      <MovieList title="Action Movies" />
      <MovieList title="Comedy Movies" />
    </div>
  );
};

export default Home;