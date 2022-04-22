import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../images/logo.png';

const NavBar = props => {
  const navItems = ['Home', 'Suppliers', 'Price-Machine'];
  const navItemsDisplay = navItems.map((navItem, index) => {
    return (
      <li className='mr-5 inline hover:text-purple-500' key={index}>
        <NavLink
          exact
          to={navItem === 'Home' ? '/' : `/${navItem}`}
          activeStyle={{
            color: '#8B5CF6'
          }}
        >
          {navItem}
        </NavLink>
      </li>
    );
  });

  return (
    <div className='flex justify-between p-5 bg-gray-700 text-lg'>
      <img src={logo} alt='logo' />
      <h1 className='self-center text-4xl'>Siren Furniture Price Database</h1>
      <nav className='self-center'>
        <ul>
          {navItemsDisplay}
          <li className='inline mr-4 px-6 py-2 rounded-lg bg-purple-700 hover:bg-purple-500'>
            <Link to={'/login'}>
              <button onClick={props.auth ? props.handleLogout : null}>
                {props.auth ? 'Logout' : 'Login'}
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
