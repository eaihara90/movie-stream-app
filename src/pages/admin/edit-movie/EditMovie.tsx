import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './EditMovie.scss';
import { baseApi } from 'src/env';
import { MovieModel } from 'src/models/movie.model';
import { LoadingScreen } from 'src/components/loading-screen/LoadingScreen';
import { Input } from 'src/components/input/Input';
import { InputContainer } from 'src/components/input/InputContainer';
import { Form } from 'src/components/form/Form';
import { Textarea } from 'src/components/textarea/Textarea';

export function EditMovie(): JSX.Element {
  const params = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<MovieModel>(new MovieModel());

  useEffect(() => {
    loadMovie();
  }, []);

  const handleChangeMovie = async (ev: any): Promise<void> => {
    setMovie(prev => ({
      ...prev,
      [ev.target.name]: ev.target.value
    }));
  }

  const loadMovie = async (): Promise<void> => {
    setLoading(true);

    try {
      const response = await fetch(`${baseApi}/movies/${params.id}`, { method: 'GET' });
      const data = await response.json();
      setMovie(data.movie);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const updateMovie = async (): Promise<void> => {
    setLoading(true);

    try {
      const response = await fetch(`${baseApi}/movies`, { method: 'PUT', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(movie) });
      const data = await response.json();
      setMovie(data.movie);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <div className="edit-movie">
      { loading && <LoadingScreen /> }
      <Form onSubmit={() => console.log('[SUBMIT]')}>
        <InputContainer label="Title" labelFor="movie-title">
          <Input id="movie-title" name="title" type="text" onChange={handleChangeMovie} value={movie.title} />
        </InputContainer>
        
        <InputContainer label="Description" labelFor="movie-description">
          <Textarea id="movie-description" name="description" onChange={handleChangeMovie} value={movie.description} />
        </InputContainer>

        <InputContainer label="Duration" labelFor="movie-duration">
          <Input id="movie-duration" name="duration" type="text" onChange={handleChangeMovie} value={movie.duration} />
        </InputContainer>

        <InputContainer label="Date" labelFor="movie-date">
          <Input id="movie-date" name="date" type="text" onChange={handleChangeMovie} value={movie.date?.toLocaleString()} />
        </InputContainer>

        <InputContainer label="Cover URL" labelFor="movie-cover-url">
          <Input id="movie-cover-url" name="coverUrl" type="text" onChange={handleChangeMovie} value={movie.coverUrl} />
        </InputContainer>
        
        <InputContainer label="Storage URL" labelFor="movie-storage-url">
          <Input id="movie-storage-url" type="text" name="storageUrl" onChange={handleChangeMovie} value={movie.storageUrl} />
        </InputContainer>
        <button type="submit" onClick={updateMovie}>Save</button>
      </Form>
    </div>
  );
}