import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import { MainRoutes } from './Routes';
import { SideNav } from './components/side-nav/SideNav';

function App(): JSX.Element {

  return (
    <BrowserRouter>
    <SideNav />
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
