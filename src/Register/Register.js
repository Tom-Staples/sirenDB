import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useHandleRegister from '../hooks/useHandleRegister';

const Register = () => {
  //Controls the form state and keeps track of the user info
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  //Controls the active state of the button to submit the data
  const [validRegister, setValidRegister] = useState(false);

  //Registers the user on submit of the form
  const { data, queryData } = useHandleRegister(
    'https://siren-price-database.herokuapp.com/register',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password
      })
    }
  );

  //Styling for the input fields and active / inactive state for the button
  const inputStyle = 'rounded mb-10 p-2 text-black';
  let buttonStyle = validRegister
    ? 'bg-purple-700 hover:bg-purple-500'
    : 'bg-gray-500';

  useEffect(() => {
    if (
      user.username === '' ||
      user.password === '' ||
      user.confirmPassword === ''
    ) {
      setValidRegister(false);
    } else {
      if (user.password !== user.confirmPassword) {
        setValidRegister(false);
      } else {
        setValidRegister(true);
      }
    }
  }, [user]);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  return (
    <div className='h-screen'>
      {data.auth === true ? (
        <div className='flex flex-col w-1/3 mx-auto mt-40 bg-gray-700 p-10 rounded text-center'>
          <h2 className='text-2xl'>
            Registration Successful! <br />
            <Link to='/login' className='underline'>
              Please login
            </Link>
          </h2>
        </div>
      ) : (
        <form
          className='flex flex-col w-1/3 mx-auto mt-40 bg-gray-700 p-10 rounded text-center'
          onSubmit={e => {
            e.preventDefault();
            queryData();
          }}
        >
          <h2 className='text-4xl mb-10'>Register</h2>
          <label>Username</label>
          <input
            type='text'
            placeholder='Enter username...'
            name='username'
            className={inputStyle}
            value={user.username}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type='password'
            placeholder='Enter password'
            name='password'
            className={inputStyle}
            value={user.password}
            onChange={handleChange}
          />
          <label>Confirm password</label>
          <input
            type='password'
            placeholder='Confirm password'
            name='confirmPassword'
            className={inputStyle}
            value={user.confirmPassword}
            onChange={handleChange}
          />
          <button
            className={`px-6 py-2 rounded-lg ${buttonStyle} w-1/3 mx-auto mb-10`}
            disabled={!validRegister}
          >
            Register
          </button>
          <Link className='underline' to='/login'>
            Back to Login
          </Link>
        </form>
      )}
    </div>
  );
};

export default Register;
