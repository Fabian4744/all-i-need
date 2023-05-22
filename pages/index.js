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
import { useState, setState } from 'react';

export default function Home() {

  const constraintsRef = useRef(null);

  const [CartActive, setCartActive] = useState(0);
  const [Item1Active, setItem1Active] = useState(0);
  const [Item2Active, setItem2Active] = useState(0);
  const [Item1Hidden, setItem1Hidden] = useState(1);
  const [Item2Hidden, setItem2Hidden] = useState(1);

  const ToogleCart = () => {
    setCartActive(!CartActive);
  };

  const ToogleItem1Icon = () => {
    setItem1Active(Item1Active=1);
    setItem1Hidden(Item1Hidden=1);
  };

  const ToogleItem2Icon = () => {
    setItem2Active(Item2Active=1);
    setItem2Hidden(Item2Hidden=1);
  };

  const ToogleItem1Close = () => {
    setItem1Active(Item1Active=0);
    setItem1Hidden(Item1Hidden=0);
  };

  const ToogleItem2Close = () => {
    setItem2Active(Item2Active=0);
    setItem2Hidden(Item2Hidden=0);
  };

  const ToogleItem1Hidden = () => {
    setItem1Hidden(!Item1Hidden);
  };

  const ToogleItem2Hidden = () => {
    setItem2Hidden(!Item2Hidden);
  };


  return (
    <div>

      <Head>
        <title>Next.js Starter!</title>
      </Head>

      <motion.div className="bg-windows-blue h-screen w-screen"  ref={constraintsRef}>
        <div>
          <div className={`item ${Item1Active ? 'active': ''} ${Item1Hidden ? 'isvisible': 'ishidden'}`}> 
            <motion.div onDoubleClick={ToogleItem1Icon} drag dragConstraints={constraintsRef}  dragMomentum={false} className="absolute top-[20%] left-[18%] text-xl text-white text-center p-2 hover:bg-windows-lightgrey rounded-lg">
              <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-6xl text-black"/>
              <h2>Letter</h2>
            </motion.div>
            <motion.div drag dragConstraints={constraintsRef}  dragMomentum={false} className="z-10 w-3/5 absolute  top-[20%] right-[20%]">
              <div id="toggle" className="border-std hidden">
                <div className='bg-windows-darkgrey flex flex-row-reverse'>
                  <div onClick={ToogleItem1Close} className='border-std bg-windows-grey aspect-square h-6 m-1 text-center'>X</div>
                  <div onClick={ToogleItem1Hidden} className='border-std bg-windows-grey aspect-square h-6 m-1 text-center'>_</div>
                </div>
                <p>Letter<br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
              </div>
            </motion.div>
          </div>
          <div className={`item ${Item2Active ? 'active': ''} ${Item2Hidden ? 'isvisible': 'ishidden'}`}>
            <motion.div onDoubleClick={ToogleItem2Icon} drag dragConstraints={constraintsRef}  dragMomentum={false} className="absolute top-[40%] left-[48%] text-xl text-white text-center p-2 hover:bg-windows-lightgrey rounded-lg">
              <FontAwesomeIcon icon={faBook} className="text-6xl text-black"/>
              <h2>Lookbook</h2>
            </motion.div>
            <motion.div drag dragConstraints={constraintsRef}  dragMomentum={false} className='absolute z-10 w-3/5 top-[20%] right-[20%]' > 
              <div id="toggle" className="border-std hidden">
                <div className='bg-windows-darkgrey flex flex-row-reverse'>
                  <div onClick={ToogleItem2Close} className='border-std bg-windows-grey aspect-square h-6 m-1 text-center'>X</div>
                  <div onClick={ToogleItem2Hidden} className='border-std bg-windows-grey aspect-square h-6 m-1 text-center'>_</div>
                </div>
                <p>LookBook<br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <footer className="bg-windows-grey w-screen absolute bottom-0 border-windows-lightgrey border-t-4 flex justify-between z-20">
        <div className='w-5/12 flex justify-start'>
          <div onClick={ToogleCart} className={`flex items-center border-std m-1 px-2 ${CartActive ? 'cartactive': ''}`}>
            <FontAwesomeIcon icon={faCartShopping} />
            <h2 className='ml-2'>Cart</h2>
          </div>
          <div className={` ${CartActive ? 'active': ''}`}>
            <div id="toggle" className="absolute bottom-[28px] left-0 w-2/12 border-std m-1 px-2 hidden bg-windows-grey">
              <p>Cart<br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          
          <div onClick={ToogleItem1Hidden} className={`${Item1Active ? 'active': ''} ${Item1Hidden ? 'isvisible': 'ishidden'}`}> 
            <div id="toggle" className="border-active m-1 px-2 hidden w-40">
              Letter
            </div>
          </div>

          <div onClick={ToogleItem2Hidden} className={`${Item2Active ? 'active': ''} ${Item2Hidden ? 'isvisible': 'ishidden'}`}> 
            <div id="toggle" className="border-active m-1 px-2 hidden w-40">
              Lookbook
            </div>
          </div>

        </div>

        <div className='w-2/12 flex justify-center'>
          <h1>ALL I NEED</h1>
        </div>
        
        <div className='w-5/12 flex justify-end'>
          <div className='flex items-center border-active m-1 px-2'>
            <a href="#" target="_blank" className='pr-1'>
            <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <Time/>
          </div>
        </div>
      </footer>
    </div>
  )
}
