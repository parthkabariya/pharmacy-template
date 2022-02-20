import React from "react";

const DmeInfo = () => (
  <div className="bg-sky-500 grid grid-cols-1 justify-items-center items-center py-20">
    <div className="p-1 py-5 text-white text-lg w-5/6 md:w-5/6">
      <span
        className="bg-gradient-to-r from-sky-800 via-blue-500 to-sky-600 
                  flex flex-grow font-bold text-xl p-2 m-1 rounded-sm"
      >
        At Texan Pharmacy we know that your medical needs go beyond
        pharmaceutical products, that is why we offer a full range of Durable
        Medical Equipment and services. These products include but are not
        limited to
      </span>
      <br />
      <ul className="services-ul-list list-inside">
        <li className="m-1 ml-3 p-1 pl-8 bg-gradient-to-r from-sky-700 to-sky-500">
          Wheel Chairs & Accessories
        </li>
        <li className="m-1 ml-3 p-1 pl-8 bg-gradient-to-r from-sky-700 to-sky-500">
          Seat Lift Chairs
        </li>
        <li className="m-1 ml-3 p-1 pl-8 bg-gradient-to-r from-sky-700 to-sky-500">
          Walkers, Crutches & Canes
        </li>
        <li className="m-1 ml-3 p-1 pl-8 bg-gradient-to-r from-sky-700 to-sky-500">
          Braces
        </li>
        <li className="m-1 ml-3 p-1 pl-8 bg-gradient-to-r from-sky-700 to-sky-500">
          Bathroom Safety Equipment
        </li>
        <li className="m-1 ml-3 p-1 pl-8 bg-gradient-to-r from-sky-700 to-sky-500">
          Diapers & Incontinence Products
        </li>
        <li className="m-1 ml-3 p-1 pl-8 bg-gradient-to-r from-sky-700 to-sky-500">
          Bariatric Equipment
        </li>
        <li className="m-1 ml-3 p-1 pl-8 bg-gradient-to-r from-sky-700 to-sky-500">
          Diabetes Supplies
        </li>
      </ul>
    </div>
  </div>
);

export default DmeInfo;
