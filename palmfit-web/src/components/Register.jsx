import React from "react";

const Register = () => {
  return (
    <div>
      <div className="relative min-h-screen  grid bg-white ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
          <div className="relative sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover relative">
            <div className="absolute bg-black  opacity-25 inset-0 z-0"></div>
            <div className="w-full  lg:max-w-2xl md:max-w-md z-10 items-center text-center "></div>
            <div className=" font-bold leading-tight mb-6 mx-auto w-full content-center items-center "></div>
          </div>
        </div>

        <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
          <div className="max-w-xl w-full space-y-12">
            <div className="lg:text-left text-center">
              <div className="flex items-center justify-center ">
                <div className="bg-black flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                  {" "}
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign in to your account
                  </h2>
                  <form className="flex flex-col space-y-8 mt-10">
                    <label className="font-medium text-lg text-white ">
                      Register for PalmFit
                    </label>
                    <input
                      type="text"
                      formControlName="accnum"
                      placeholder="Account number"
                      className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white"
                    />
                    <label className="font-bold text-lg text-white">Pin</label>
                    <input
                      type="password"
                      formControlName="pin"
                      placeholder="****"
                      className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white"
                    />
                    <label className="font-bold text-lg text-white ">
                      Initial Deposit
                    </label>
                    <input
                      type="text"
                      formControlName="amount"
                      placeholder="Amount in INR"
                      className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white"
                    />
                    <button
                      className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold"
                      routerLink="/dashboard"
                    >
                      Create Account
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
