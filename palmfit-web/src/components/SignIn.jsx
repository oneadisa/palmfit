import React from "react";
import login from "../images/login-bg.svg";

const SignIn = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
        <img src={login} alt=" login-bg" />
      </div>
      <div className="max-w-sm w-full space-y-4">
        <h2 className="mx-0 text-left text-xl font-medium text-gray-900">
          Login to your account
        </h2>
        <form className="mr-28 space-y-6" action="#" method="POST">
          <div>
            <label>Email address</label>
            <input
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-black-600 hover:text-black-500"
            >
              Forgot your password?
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
          <p className="mt-2 text-center text-sm text-gray-600">
            <a
              href="#"
              className="font-medium text-black-600 hover:text-black-500"
            >
              Don't have an account? Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
