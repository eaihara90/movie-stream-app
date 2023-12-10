import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './DetailPage.scss';
import { baseApi } from 'src/env';
import { VideoDetail } from 'src/components/video-detail/VideoDetail';
import { Stream } from 'src/components/stream/Stream';
import { MovieModel } from 'src/models/movie.model';
import { useBrowserTitle } from 'src/hooks/useBrowserTitle';

export function DetailPage(): JSX.Element {
  const {id} = useParams<{ id: string }>();
  const setTitle = useBrowserTitle();
  
  const [activePage, setActivePage] = useState<'detail' | 'video'>('detail');
  const [loading, setLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<MovieModel>(new MovieModel());

  useEffect(() => {
    loadMovie();
  }, [])

  const loadMovie = async (): Promise<void> => {
    setLoading(true);

    try {
      const response = await fetch(`${baseApi}/movies/${id}`, { method: 'GET' });
      const { movie } = await response.json();
      setMovie(movie);
      setLoading(false);
      setTitle(movie.title);
    }
    catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <div className="detail-page">
      { (!loading && activePage === 'detail') && <VideoDetail movie={movie} onPlayVideo={() => setActivePage('video')}/> }
      { (!loading && activePage === 'video') && <Stream movie={movie} onClose={() => setActivePage('detail')}/> }
    </div>
  );
}