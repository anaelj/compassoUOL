import React from 'react';
import { Switch,  BrowserRouter as Router, Route } from 'react-router-dom';
import SearchUser from '../pages/Search';
import User from '../pages/User';
import { useLocation } from 'react-router-dom';

const Routes: React.FC = () =>{

  const gitAuthCode = useLocation();

  return (
    <Router>
        <Switch>
          <Route path="/" exact >
            <SearchUser code={gitAuthCode.search}/>
          </Route>
          <Route path="/:userLoginName" exact>
            <User />
          </Route>
        </Switch>
    </Router>
  );
}

export default Routes;
