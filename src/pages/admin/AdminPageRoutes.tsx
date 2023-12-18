import { Route, Switch } from 'react-router-dom';
import { MoviesPage } from '../movies/MoviesPage';
import { EditMovie } from './edit-movie/EditMovie';
import { NewMovie } from './new-movie/NewMovie';

export function AdminPageRoutes(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/admin" component={MoviesPage} />
      <Route path="/admin/new" component={NewMovie} />
      <Route path="/admin/edit/:id" component={EditMovie} />
    </Switch>
  );
}