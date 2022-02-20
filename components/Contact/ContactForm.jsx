import React from "react";
import Button from "../../components/Common/Button";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    amount: null,
  });
  return (
    <div className="grid justify-items-center items-center bg-sky-600 text-white">
      <div className="p-1 py-5 text-white text-lg w-5/6">
        <span
          className="bg-gradient-to-r from-sky-800 via-blue-500 to-sky-600 
            flex flex-grow font-bold text-2xl p-2 m-1 rounded-sm"
        >
          Form
        </span>
        <br />
        <div className="">
          <form>
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <label className="block">
                  <span className="text-white text-sm">Full Name</span>
                  <input
                    type="text"
                    className={
                      `mt-1 block w-full rounded-md
                    border-gray-300 shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50 ` +
                      (errors && errors.full_name
                        ? "border-red-700 border-2"
                        : "")
                    }
                    placeholder="John Wick"
                    name="full_name"
                  />
                  <span className="mt-3 text-sm text-red-200">
                    {errors && errors.full_name}
                  </span>
                </label>
                <label className="block">
                  <span className="text-white text-sm">Phone Number</span>
                  <input
                    type="text"
                    className={
                      `mt-1 block w-full rounded-md
                    border-gray-300 shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50 ` +
                      (errors && errors.phone_number
                        ? "border-red-700 border-2"
                        : "")
                    }
                    placeholder="John Wick"
                    name="phone_number"
                  />
                  <span className="mt-3 text-sm text-red-200">
                    {errors && errors.phone_number}
                  </span>
                </label>
                <label className="block">
                  <span className="text-white text-sm">Email</span>
                  <input
                    type="text"
                    className={
                      `mt-1 block w-full rounded-md
                    border-gray-300 shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50 ` +
                      (errors && errors.phone_number
                        ? "border-red-700 border-2"
                        : "")
                    }
                    placeholder="John Wick"
                    name="phone_number"
                  />
                  <span className="mt-3 text-sm text-red-200">
                    {errors && errors.phone_number}
                  </span>
                </label>
                <label className="block">
                  <span className="text-white text-sm">Appoinment Date</span>
                  <input
                    type="text"
                    className={
                      `mt-1 block w-full rounded-md
                    border-gray-300 shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50 ` +
                      (errors && errors.phone_number
                        ? "border-red-700 border-2"
                        : "")
                    }
                    placeholder="John Wick"
                    name="phone_number"
                  />
                  <span className="mt-3 text-sm text-red-200">
                    {errors && errors.phone_number}
                  </span>
                </label>
              </div>
              <label className="block mt-5">
                <span className="text-white text-sm">A Short Message</span>
                <textarea
                  className={
                    `mt-1 block w-full rounded-md border-gray-300
                  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200
                  focus:ring-opacity-50 ` +
                    (errors && errors.description
                      ? "border-red-700 border-2"
                      : "")
                  }
                  rows="2"
                  placeholder="A message."
                  name="description"
                ></textarea>
                <span className="mt-3 text-sm text-red-200">
                  {errors && errors.description}
                </span>
              </label>
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
  );
};

export default ContactForm;
