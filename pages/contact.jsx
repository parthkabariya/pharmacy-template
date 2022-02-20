import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Common/Footer';
import ContactForm from '../components/Contact/ContactForm';
import GoogleMap from '../components/Common/GoogleMap';
import ContactVia from '../components/Contact/ContactVia';

/**
 * Contact
 * @param {Object} props
 * @return {Object}
 **/
export default function Contact(props) {
  const style = {
    width: '600px',
    height: '600px'
  }

  return (
    <>
      <Head>
        <title>KPD Pharmacy - Contact Page</title>
      </Head>
      <div className="home-page">
        <div className="hero-wrapper">
          <Header props={props} showBanner={false}/>
        </div>
        <div className="flex grid grid-cols-3 justify-items-center items-center py-20 bg-sky-600 px-2">
          <div className="col-span-2 p-1 py-5 pt-20 text-white text-xl text-center">
            <GoogleMap width={800} height={450}/>
          </div>
          <div className="py-5 text-white text-lg w-5/6">
            <ContactVia />
          </div>
        </div>
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
