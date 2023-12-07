import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import { MainRoutes } from './Routes';

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
