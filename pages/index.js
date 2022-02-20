import Head from 'next/head'
import Image from 'next/image'
import { useForm } from "react-hook-form";
import Header from '../components/Header';
import Button from '../components/Common/Button';
import Footer from '../components/Common/Footer';

export default function Home(props) {
  const {data, setData, post, processing, errors, reset} = useForm({
    amount: null,
  });
  return (
    <>
    <Head>
      <title>KPD Pharmacy - Home Page</title>
    </Head>
      <div className="home-page">
        <Header props={props} showBanner={true}/>
        <div className="grid grid-cols-1 md:grid-cols-2 py-20 bg-sky-600 px-2">
          <div className="p-1 py-5 text-white text-lg text-center">
            <span className="font-bold text-2xl">Tennessee</span><br/>
            4270 Bonny Oaks Dr<br/>
            Chattanooga<br/>
            37406<br/><br/>
            Phone: (111) 111-1111
          </div>
          <div className="p-1 py-5 text-white text-lg text-center">
          <span className="font-bold text-2xl">OPENING HOURS</span><br/>
            Monday - Friday: 9am to 7pm<br/>
            Saturday: 9am to 2pm<br/>
            Sunday: CLOSED
          </div>
        </div>

        <div className="parallax-wrapper grid items-center">
          {/* <div className="parallax h-96"></div> */}
            <div className="parallax-inner py-10 grid-cols-1 md:grid-cols-2 grid justify-items-center items-center bg-sky-600 text-white">
              <div className="p-1 py-5 text-white text-lg w-5/6 md:w-3/6">
                <span className="bg-gradient-to-r from-sky-800 via-blue-500 to-sky-600 
                flex flex-grow font-bold text-2xl p-2 m-1 rounded-sm">Services</span><br/>
                <ul className="services-ul-list list-inside">
                  <li className="m-1 ml-3 p-1 pl-8 bg-gradient-to-r from-sky-700 to-sky-600">Compounding</li>
                  <li className="m-1 ml-3 p-1 pl-8 bg-gradient-to-r from-sky-700 to-sky-600">MTM</li>
                  <li className="m-1 ml-3 p-1 pl-8 bg-gradient-to-r from-sky-700 to-sky-600">Immunization</li>
                  <li className="m-1 ml-3 p-1 pl-8 bg-gradient-to-r from-sky-700 to-sky-600">DME</li>
                  <li className="m-1 ml-3 p-1 pl-8 bg-gradient-to-r from-sky-700 to-sky-600">Free Delivery</li>
                  <li className="m-1 ml-3 p-1 pl-8 bg-gradient-to-r from-sky-700 to-sky-600">Parking Pickup/Dropoff</li>
                  <li className="m-1 ml-3 p-1 pl-8 bg-gradient-to-r from-sky-700 to-sky-600">Refill 24 hours a day</li>
                  <li className="m-1 ml-3 p-1 pl-8 bg-gradient-to-r from-sky-700 to-sky-600">Dollar Items/Gifts</li>
                </ul>
              </div>
              <div className="p-1 py-5 text-white text-lg w-5/6 md:w-3/6">
                <span className="bg-gradient-to-r from-sky-800 via-blue-500 to-sky-600 
                flex flex-grow font-bold text-2xl p-2 m-1 rounded-sm">Form</span><br/>
                <div className="">
                  <form >
                    <div className="">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <label className="block">
                          <span className="text-white text-sm">Full Name</span>
                          <input type="text" className={`mt-1 block w-full rounded-md
                        border-gray-300 shadow-sm focus:border-indigo-300 focus:ring
                        focus:ring-indigo-200 focus:ring-opacity-50 `+
                        ((errors && errors.full_name)?'border-red-700 border-2':'')} placeholder="John Wick"
                          name="full_name"
                          />
                          <span className="mt-3 text-sm text-red-200">
                            {errors && errors.full_name}
                          </span>
                        </label>
                        <label className="block">
                          <span className="text-white text-sm">Phone Number</span>
                          <input type="text" className={`mt-1 block w-full rounded-md
                        border-gray-300 shadow-sm focus:border-indigo-300 focus:ring
                        focus:ring-indigo-200 focus:ring-opacity-50 `+
                        ((errors && errors.phone_number)?'border-red-700 border-2':'')} placeholder="John Wick"
                          name="phone_number"
                          />
                          <span className="mt-3 text-sm text-red-200">
                            {errors && errors.phone_number}
                          </span>
                        </label>
                        <label className="block">
                          <span className="text-white text-sm">Email</span>
                          <input type="text" className={`mt-1 block w-full rounded-md
                        border-gray-300 shadow-sm focus:border-indigo-300 focus:ring
                        focus:ring-indigo-200 focus:ring-opacity-50 `+
                        ((errors && errors.phone_number)?'border-red-700 border-2':'')} placeholder="John Wick"
                          name="phone_number"
                          />
                          <span className="mt-3 text-sm text-red-200">
                            {errors && errors.phone_number}
                          </span>
                        </label>
                        <label className="block">
                          <span className="text-white text-sm">Appoinment Date</span>
                          <input type="text" className={`mt-1 block w-full rounded-md
                        border-gray-300 shadow-sm focus:border-indigo-300 focus:ring
                        focus:ring-indigo-200 focus:ring-opacity-50 `+
                        ((errors && errors.phone_number)?'border-red-700 border-2':'')} placeholder="John Wick"
                          name="phone_number"
                          />
                          <span className="mt-3 text-sm text-red-200">
                            {errors && errors.phone_number}
                          </span>
                        </label>
                      </div>
                      <label className="block mt-5">
                        <span className="text-white text-sm">A Short Message</span>
                        <textarea className={`mt-1 block w-full rounded-md border-gray-300
                      shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200
                      focus:ring-opacity-50 `+
                        ((errors && errors.description)?'border-red-700 border-2':'')
                        } rows="2"
                        placeholder="A message."
                        name="description"
                        ></textarea>
                        <span className="mt-3 text-sm text-red-200">
                          {errors && errors.description}
                        </span>
                      </label>
                      <label className="block mt-6">
                        <Button className="bg-sky-900 hover:bg-sky-800
                          cursor-pointer px-5 py-3 rounded-md text-white
                          shadow-xl">
                              Send
                        </Button>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          {/* <div className="parallax"></div> */}
        </div>

        <div className="grid justify-items-center items-center py-20 bg-sky-600">
          <div className="p-5 mx-3 gird rounded-md">
            <iframe
              frameBorder="0"
              className="map" 
              style={{border:0}}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCMEhY6AiRQVZxGluyyyauH__DmCaFclk0&q=Tennessee,+USA" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="transmitter grid justify-items-center items-center py-20 bg-gradient-to-r from-sky-500 to-sky-600">
          <div className="flex flex-col md:flex-row p-10 mx-3 gird bg-gradient-to-t md:bg-gradient-to-r from-sky-800 via-blue-500 to-sky-600 rounded-md 
          items-center gap-5 md:gap-20 divide-y-4 md:divide-x-4 md:divide-y-0 divide-sky-500">
            <div className="md:flex-grow text-white text-center">
              <h1 className="text-2xl">Help us with feeback!</h1>
              Let us know where to improve. 
            </div>
            <div className="md:px-16 py-5 text-white text-xl">
              <div className="bg-sky-900 hover:bg-sky-800
                          cursor-pointer px-5 py-3 rounded-md text-white
                          shadow-xl text-center">Customer Satisfaction Survey</div>
              <div className="mt-5 text-center">We are looking forward to look after you.</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
