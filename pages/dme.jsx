import React from 'react';
import { useForm } from "react-hook-form";
import Head from 'next/head';
import Header from '../components/Header';
import Button from '../components/Common/Button';
import Footer from '../components/Common/Footer';
import Title from '../components/Dme/Title';
import DmeInfo from '../components/Dme/DmeInfo';

export default function Dme(props) {
  const style = {
    width: '600px',
    height: '600px'
  }

  const {data, setData, post, processing, errors, reset} = useForm({
    amount: null,
  });

    return (
        <>
          <Head>
            <title>KPD Pharmacy - Dme Page</title>
          </Head>
          <div>
            <div className="hero-wrapper">
              <Header props={props} showBanner={false}/>
            </div>
            <Title />
            <DmeInfo />
            <Footer />
          </div>
        </>
    )
}
