import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <>
      {props.auth ? (
        <div className='mx-10 mt-10 h-screen flex flex-col'>
          <div className='bg-gray-700 w-1/4 p-5 rounded mb-10 self-center'>
            <h2 className='text-4xl mb-5'>Hello again...</h2>
            <p>
              Welcome to the Siren Furniture Price Database. You have complete
              access to all of our features.
            </p>
          </div>
          <div className='bg-gray-700 w-1/4 p-5 rounded mb-10 self-center'>
            <h2 className='text-4xl mb-5'>Suppliers</h2>
            <p className='mb-5'>
              Here you can locate all our suppliers. Find information about each
              factory, furniture models, and prices.
            </p>
            <Link to='/Suppliers'>
              <button className='px-6 py-2 rounded-lg bg-purple-700 hover:bg-purple-500'>
                Find out more
              </button>
            </Link>
          </div>
          <div className='bg-gray-700 w-1/4 p-5 rounded mb-10 self-center'>
            <h2 className='text-4xl mb-5'>Price-Machine</h2>
            <p className='mb-5'>
              Import the supplier invoice to automatically check the prices. The
              invoice must be correctly formatted in excel.
            </p>
            <Link to='/Price-Machine'>
              <button className='px-6 py-2 rounded-lg bg-purple-700 hover:bg-purple-500'>
                Find out more
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className='mx-10 mt-10 h-screen flex flex-col'>
          <div className='bg-gray-700 w-1/4 p-5 rounded mb-10 self-center'>
            <h2 className='text-4xl mb-5'>You are not signed in...</h2>
            <p>To access all of our features, please login to our system.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
