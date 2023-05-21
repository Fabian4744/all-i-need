import React from 'react'
import Head from 'next/head'
import Time from '@components/Time';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faBook} from "@fortawesome/free-solid-svg-icons";



export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
      </Head>

      <div className="bg-windows-blue h-screen w-screen">
        <div>
          <div className="absolute top-[20%] left-[18%] text-xl text-white text-center">
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-6xl text-black"/>
            <h2>Letter</h2>
          </div>
          <div className="absolute top-[40%] left-[48%] text-xl text-white text-center">
            <FontAwesomeIcon icon={faBook} className="text-6xl text-black"/>
            <h2>Lookbook</h2>
          </div>
        </div>
      </div>

      <footer className="bg-windows-grey w-screen absolute bottom-0 border-windows-lightgrey border-t-4 flex justify-between	">
        <div className='flex items-center border-t-windows-lightgrey border-l-windows-lightgrey border-b-windows-darkgrey border-r-windows-darkgrey border-r border-b border-t-2 border-l-2 m-1 px-2'>
        <FontAwesomeIcon icon={faCartShopping} />
        <h2 className='ml-2'>Cart</h2>
        </div>
        
        <h1>ALL I NEED</h1>
        
        <div className='flex items-center border-b-windows-lightgrey border-r-windows-lightgrey border-t-windows-darkgrey border-l-windows-darkgrey border-l border-t border-b-2 border-r-2 m-1 px-2'>
          <a href="#" target="_blank" className='pr-1'>
          <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <Time/>
        </div>
      </footer>
    </div>
  )
}
