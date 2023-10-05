import React from 'react';

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-[url('../public/images/bg.jpg')] backdrop-filter backdrop-brightness-25">
      <div className="w-1/4 p-16 flex flex-col justify-center bg-blue-300 shadow-xl rounded-xl">
        <div className="text-center mb-8">
          <img
            src="../public/images/logo.png" 
            alt="App Logo"
            className="w-36 h-44 rounded-full mx-auto"
          />
          <h2 className="text-3xl font-semibold mt-4">Sign Up</h2>
        </div>
        <form className='w-full flex flex-col items-center justify-center'>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full pr-36 pl-4 py-2 border rounded-3xl"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full pr-36 pl-4 py-2 border rounded-3xl"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full pr-36 pl-4 py-2 border rounded-3xl"
            />
          </div>
          <button
            type="submit"
            className="w-1/3 bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600"
          >
            Create
          </button>
        </form>
        <p className="mt-4 text-center font-bold">
          Already have an account? <a href="#">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
