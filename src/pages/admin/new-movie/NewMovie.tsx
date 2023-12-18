import { useState } from 'react';

import './NewMovie.scss';
import { baseApi } from 'src/env';
import { MovieModel } from 'src/models/movie.model';
import { LoadingScreen } from 'src/components/loading-screen/LoadingScreen';
import { Input } from 'src/components/input/Input';
import { InputContainer } from 'src/components/input/InputContainer';
import { Form } from 'src/components/form/Form';
import { Textarea } from 'src/components/textarea/Textarea';

export function NewMovie(): JSX.Element {
  const [movie, setMovie] = useState<MovieModel>(new MovieModel());
  const [loading, setLoading] = useState<boolean>(false);

  const handleChangeMovie = (ev: any): void => {
    setMovie(prev => ({
      ...prev,
      [ev.target.name]: ev.target.value
    }));
    console.log("🚀 ~ file: NewMovie.tsx:17 ~ handleChangeMovie ~ ev:", ev.target.name);
  }

  const saveMovie = async (): Promise<void> => {
    // console.log('[MOVIE]', movie);
    // return;
    
    setLoading(true);

    try {
      const response = await fetch(`${baseApi}/movies`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie)
      });

      const data = await response.json();
      setMovie(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <div className="new-movie">
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

        <button type="submit" onClick={saveMovie}>Save</button>
      </Form>
    </div>
  );
}