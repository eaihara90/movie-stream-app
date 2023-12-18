import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesPage.scss';
import { MovieModel } from 'src/models/movie.model';
import { baseApi } from 'src/env';
import { Slider } from 'src/components/slider/Slider';
import { useBrowserTitle } from 'src/hooks/useBrowserTitle';
import { MovieCard } from 'src/components/movie-card/MovieCard';
import { LoadingScreen } from 'src/components/loading-screen/LoadingScreen';

export function MoviesPage(): JSX.Element {
  useBrowserTitle();
  const location = useLocation();
  console.log(location);
  const [moviesList, setMoviesList] = useState<MovieModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadMoviesList();
  }, []);

  const loadMoviesList = async (): Promise<void> => {
    setLoading(true);
    
    try {
      const response = await fetch(`${baseApi}/movies`, { method: 'GET' });
      const data = await response.json();
      setMoviesList(data.movies);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <div className="movies-page">
      { loading && <LoadingScreen />}
      <ul className="movies-list">
        <Slider slideWidth={336}>
          { moviesList?.length > 0 && moviesList.map((movie, index) => (
            <MovieCard
              canEdit={location.pathname.includes('admin')}
              movie={movie}
              key={index}
            />
          ))}
        </Slider>
      </ul>
    </div>
  );
}