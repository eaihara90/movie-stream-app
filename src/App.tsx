import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import { MainRoutes } from './Routes';

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <div className="main">
        <MainRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
