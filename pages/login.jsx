import React from "react";
import Button from "../components/Common/Button";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import Head from "next/head";

const Login = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    amount: null,
  });

  return (
    <div>
      <Head>
        <title>KPD Pharmacy - Login Page</title>
      </Head>
      <div className="hero-wrapper">
        <Header showBanner={false}/>
      </div>
      <div className="grid justify-items-center items-center bg-sky-600 text-white h-screen">
        <div className="p-1 py-5 text-white text-lg w-2/6">
          <span
            className="bg-gradient-to-r from-sky-800 via-blue-500 to-sky-600 
            flex flex-grow font-bold text-2xl p-2 px-5 rounded-sm"
          >
            Login
          </span>
          <br />
          <div className="">
            <form>
              <div className="">
                <div className="grid grid-cols-1 gap-6">
                  <label className="block">
                    <span className="text-white text-sm">Email</span>
                    <input
                      type="text"
                      className={
                        `mt-1 block w-full rounded-md
                    border-gray-300 shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50 text-black` +
                        (errors && errors.email
                          ? "border-red-700 border-2"
                          : "")
                      }
                      placeholder="johnwick@gmail.com"
                      name="email"
                    />
                    <span className="mt-3 text-sm text-red-200">
                      {errors && errors.password}
                    </span>
                  </label>
                  <label className="block">
                    <span className="text-white text-sm">Password</span>
                    <input
                      type="password"
                      className={
                        `mt-1 block w-full rounded-md
                    border-gray-300 shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50 text-black` +
                        (errors && errors.password
                          ? "border-red-700 border-2"
                          : "")
                      }
                      placeholder="Password"
                      name="password"
                    />
                    <span className="mt-3 text-sm text-red-200">
                      {errors && errors.password}
                    </span>
                  </label>
                </div>
                <label className="block mt-6">
                  <Button
                    className="bg-sky-900 hover:bg-sky-800
                      cursor-pointer px-5 py-3 rounded-md text-white
                      shadow-xl"
                  >
                    Send
                  </Button>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
