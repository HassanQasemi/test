import React from 'react'
import User from './components/User'
import AddUser from './components/addUser'
import {Route , Switch ,Redirect} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <main className="container" >
        <Switch>
             <Route path="/user" component={User} />
             <Route path="/addUser" component={AddUser} />
             <Redirect from="/"  to="/user" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
