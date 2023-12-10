import { useEffect, useState } from 'react';

import './MoviesPage.scss';
import { MovieModel } from 'src/models/movie.model';
import { baseApi } from 'src/env';
import { Slider } from 'src/components/slider/Slider';
import { useBrowserTitle } from 'src/hooks/useBrowserTitle';
import { MovieCard } from 'src/components/movie-card/MovieCard';

export function MoviesPage(): JSX.Element {
  useBrowserTitle();
  const [moviesList, setMoviesList] = useState<MovieModel[]>([]);

  useEffect(() => {
    loadMoviesList();
  }, []);

  const loadMoviesList = async (): Promise<void> => {
    try {
      const response = await fetch(`${baseApi}/movies`, { method: 'GET' });
      const data = await response.json();
      setMoviesList(data.movies);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="movies-page">
      <ul className="movies-list">
        <Slider slideWidth={336}>
          { moviesList?.length > 0 && moviesList.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </Slider>
      </ul>
    </div>
  );
}