import React from "react";

const Banner = () => (
  <div className="hero-content">
    <div className="flex flex-col md:flex-row items-center">
      <div>
        <div className="relative py-3 w-64 -ml-5 md:w-80 md:ml-20">
          <div className="absolute inset-0 bg-sky-700 shadow-2xl transform skew-y-0 -rotate-12 rounded-3xl">
            <div className="float-right text-yellow-400 mt-1 mr-2 size-25">
              <i className="fas fa-pills"></i>
            </div>
          </div>
          <div className="relative px-4 py-10 shadow-2xl bg-sky-600 rounded-3xl sm:p-16">
            <h1 className="flex-1">Find the Best Prescribed Medicines.</h1>
            <div className="absolute text-sky-400 size-25">
              <i className="fas fa-clinic-medical"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row md:flex-col gap-5 justify-items-center md:ml-40 relative mt-20 md:mt-auto">
        <div className="md:-mt-20 grid items-center justify-items-center w-28 h-28 shadow-2xl bg-sky-600 rounded-xl transform skew-y-3 sm:-rotate-45">
          <h1 className="text-sm">Free Delivery</h1>
        </div>
        <div className="md:ml-20 grid items-center justify-items-center w-28 h-28 shadow-2xl bg-sky-600 rounded-xl transform skew-y-3 sm:-rotate-12">
          <h1 className="text-sm">Compounding</h1>
        </div>
        <div className="grid items-center justify-items-center w-28 h-28 shadow-2xl bg-sky-600 rounded-xl transform skew-y-3 sm:rotate-45">
          <h1 className="text-sm">Gifts</h1>
        </div>
        <div className="hidden sm:flex absolute md:top-24 md:-left-20">
          <h1 className="font-bold italic">TOP SERVICES</h1>
        </div>
      </div>
    </div>
    {/* <div className="text-yellow-400 size-25"><i className="fas fa-tablets"></i></div> */}
  </div>
);

export default Banner;
