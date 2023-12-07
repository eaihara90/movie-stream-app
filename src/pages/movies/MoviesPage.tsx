import { useEffect, useState } from 'react';

import './MoviesPage.scss';
import { MovieModel } from 'src/models/movie.model';

export function MoviesPage(): JSX.Element {
  const [moviesList, setMoviesList] = useState<MovieModel[]>([]);

  useEffect(() => {
    loadMoviesList();
  }, []);

  const loadMoviesList = async (): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:3005/api/movies`, { method: 'GET' });
      const data = await response.json();
      setMoviesList(data.movies);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="movies-page">
      <h1>MoviesPage</h1>
      <ul className="movies-list">
        { moviesList?.length > 0 && moviesList.map(x => (
          <li className="movie-item">
            <a href={x.coverUrl} className="movie-link">
              <img src={x.coverUrl} alt="" className="movie-cover" />
              <span className="movie-title">{x.title}</span>
            </a>
          </li>
        ))}

      </ul>
    </div>
  );
}