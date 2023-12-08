import { Route } from 'react-router-dom';
import { MoviesPage } from 'src/pages/movies/MoviesPage';
import { AdminPage } from 'src/pages/admin/AdminPage';
import { StreamPage } from './pages/stream/Stream';

export function MainRoutes(): JSX.Element {
  return (
    <>
      <Route exact path="/" component={MoviesPage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/stream/:id" component={StreamPage} />
    </>
  );
}