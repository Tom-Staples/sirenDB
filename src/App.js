import React from 'react';
import NavBar from './NavBar/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import Suppliers from './Suppliers/Suppliers';
import FactoryContainer from './Suppliers/Factory/FactoryContainer';
import Login from './Login/Login';
import PriceMachine from './PriceMachine/PriceMachine';
import Register from './Register/Register';
import useAuthenticateUser from './hooks/useAuthenticateUser';
import useLoginStatus from './hooks/useLoginStatus';

const App = () => {
  const { loggedIn, updateLogin } = useLoginStatus();

  const { auth } = useAuthenticateUser(
    'https://siren-price-database.herokuapp.com/auth',
    {
      method: 'GET',
      headers: {
        'access-token': localStorage.getItem('token')
      }
    },
    loggedIn
  );

  const handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    updateLogin();
  };

  return (
    <div className='bg-purple-500 text-white font-serif'>
      <NavBar auth={auth} handleLogout={handleLogout} />

      <Switch>
        <Route exact path='/'>
          <Home auth={auth} />
        </Route>
        <Route exact path='/Suppliers'>
          {!auth ? <Redirect to='/' /> : <Suppliers />}
        </Route>
        <Route path='/Suppliers/:factory'>
          {!auth ? <Redirect to='/' /> : <FactoryContainer />}
        </Route>
        <Route path='/Price-Machine'>
          {!auth ? <Redirect to='/' /> : <PriceMachine />}
        </Route>
        <Route path='/login'>
          {auth ? <Redirect to='/' /> : <Login updateLogin={updateLogin} />}
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
