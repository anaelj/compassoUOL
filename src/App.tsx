import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {ContainerMain} from './main';

import Routes from './routes';

const App: React.FC = () => (
<Router>
     <ContainerMain>
        <Routes />
     </ContainerMain>
  </Router>
);

export default App;
