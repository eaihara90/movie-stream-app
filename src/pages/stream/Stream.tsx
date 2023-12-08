import { useParams } from 'react-router-dom';

import './Stream.scss';
import { baseApi } from 'src/env';

export function StreamPage(): JSX.Element {
  const { id } = useParams<{ id: string}>();

  return (
    <div className="stream-page">
      <video id="video-player" controls muted>
        <source src={`${baseApi}/movie-stream/${id}`} type="video/mp4" />
      </video>
    </div>
  );
}