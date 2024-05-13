import React, { FC } from 'react';
import MovieList from './MovieList';

const Home: FC = () => {
  return (
    <div className="home">
      <h1>SolFlix</h1>
      <MovieList title="Trending Now" />
      <MovieList title="Superteam" />
      <MovieList title="LightSpeed" />
    </div>
  );
};

export default Home;