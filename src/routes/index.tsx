import React from 'react';
import { Switch,  BrowserRouter as Router, Route } from 'react-router-dom';
import SearchUser from '../pages/Search';
import User from '../pages/User';

const Routes: React.FC = () =>{
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <SearchUser />
          </Route>
          <Route path="/:userLoginName" exact>
            <User />
          </Route>
        </Switch>
    </Router>
  );
}

export default Routes;
