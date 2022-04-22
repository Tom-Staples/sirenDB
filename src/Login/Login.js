import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useHandleLogin from '../hooks/useHandleLogin';

const Login = props => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [validLogin, setValidLogin] = useState(false);

  const { data, queryData } = useHandleLogin(
    'https://siren-price-database.herokuapp.com/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password
      })
    },
    props.updateLogin
  );

  useEffect(() => {
    if (user.username === '' || user.password === '') {
      setValidLogin(false);
    } else {
      setValidLogin(true);
    }
  }, [user]);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  let buttonStyle = validLogin
    ? 'bg-purple-700 hover:bg-purple-500'
    : 'bg-gray-500';

  return (
    <div className='h-screen'>
      <form
        className='flex flex-col w-1/3 mx-auto mt-40 bg-gray-700 p-10 rounded text-center'
        onSubmit={e => {
          e.preventDefault();
          queryData();
        }}
      >
        <h2 className='text-4xl mb-10'>Login</h2>
        <label>Username</label>
        <input
          type='text'
          placeholder='Enter Username...'
          className='rounded mb-10 p-2 text-black'
          onChange={handleChange}
          name='username'
          value={user.username}
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='Enter Password...'
          className='rounded mb-10 p-2 text-black'
          onChange={handleChange}
          name='password'
          value={user.password}
        />
        <button
          className={`px-6 py-2 rounded-lg ${buttonStyle} w-1/3 mx-auto mb-10`}
          disabled={!validLogin}
        >
          Login
        </button>
        {data.auth === false && (
          <p className='mb-10'>Login attempt failed! Please try again...</p>
        )}
        <span>
          Not a user?{' '}
          <Link className='underline' to='/register'>
            Register here!
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
