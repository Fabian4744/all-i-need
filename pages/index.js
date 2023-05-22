import React from 'react'
import Head from 'next/head'
import Time from '@components/Time';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import { useRef } from "react";
import { useEffect } from 'react';

export default function Home() {

  const constraintsRef = useRef(null);

  const dblclickref1 = useRef(null);
  const dblclickref2 = useRef(null);


  const dblclick1 = (e) => {
    dblclickref1.current.parentElement.classList.toggle("active");
  };
    
  const dblclick2 = (e) => {
    dblclickref2.current.parentElement.classList.toggle("active");
  };

  useEffect(() => {
      dblclickref1.current.addEventListener('dblclick', dblclick1);
      dblclickref2.current.addEventListener('dblclick', dblclick2);

      return () => {
        dblclickref1.current.removeEventListener('dblclick', dblclick1);
        dblclickref2.current.removeEventListener('dblclick', dblclick2);
      };
  },);


  const handleClick = event => {
    event.currentTarget.parentElement.classList.toggle('bg-salmon');
  };

  return (

    <div>
      <Head>
        <title>Next.js Starter!</title>
      </Head>

      <motion.div className="bg-windows-blue h-screen w-screen"  ref={constraintsRef}>
        <div>
          <div id='item'> 
            <motion.div ref={dblclickref1} drag dragConstraints={constraintsRef}  dragMomentum={false} className="absolute top-[20%] left-[18%] text-xl text-white text-center">
              <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-6xl text-black"/>
              <h2>Letter</h2>
            </motion.div>
            <motion.div drag dragConstraints={constraintsRef}  dragMomentum={false} className="z-10 w-3/5 absolute">
              <div id="toggle" className="border-std invisible">
                <div className='bg-windows-darkgrey flex flex-row-reverse'>
                  <div onClick={handleClick} className='border-std bg-windows-grey aspect-square h-6 m-1 text-center'>X</div>
                  <div className='border-std bg-windows-grey aspect-square h-6 m-1 text-center'>_</div>
                </div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
              </div>
            </motion.div>
          </div>
          <div id='item'>
            <motion.div ref={dblclickref2} drag dragConstraints={constraintsRef}  dragMomentum={false} className="absolute top-[40%] left-[48%] text-xl text-white text-center">
              <FontAwesomeIcon icon={faBook} className="text-6xl text-black"/>
              <h2>Lookbook</h2>
            </motion.div>
            <motion.div drag dragConstraints={constraintsRef}  dragMomentum={false} className='absolute z-10 w-3/5' > 
              <div id="toggle" className="border-std invisible">
                <div className='bg-windows-darkgrey flex flex-row-reverse'>
                <div className='border-std bg-windows-grey aspect-square h-6 m-1 text-center'>X</div>
                  <div className='border-std bg-windows-grey aspect-square h-6 m-1 text-center'>_</div>
                </div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <footer className="bg-windows-grey w-screen absolute bottom-0 border-windows-lightgrey border-t-4 flex justify-between z-20">
        <div className='flex items-center border-std m-1 px-2'>
        <FontAwesomeIcon icon={faCartShopping} />
        <h2 className='ml-2'>Cart</h2>
        </div>
        
        <h1>ALL I NEED</h1>
        
        <div className='flex items-center border-active m-1 px-2'>
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
