import React from 'react';

import Headset1 from "../assets/img/headset-1.png"
import Headset2 from "../assets/img/headset-2.png"
import Headset3 from "../assets/img/headset-3.png"
import Headset4 from "../assets/img/headset-4.png"

const Headsets = () => {
  return <section className='py-12 lg:py-24'>
      <div className="container mx-auto">
        <h2  className='text-3xl font-bold mb-8 text-center   lg:text-start lg:mb-6' data-aos="fade-down" data-aos-offset="300"> Mixed Reality Headsets</h2>
        <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-9'>
          {/* item */}
          <div className=' relative  mx-auto mb-2'  data-aos="zoom-in" data-aos-offset='300' data-aos-delay="600">
            <img className='' src={Headset1} alt="/" />
            <div className=' absolute bottom-0 max-w-[300px] bg-white/20  backdrop-blur-md m-h-[150px] p-6'>
              <h2 className='font-xl font-semibold mb-2'>Mataverse</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil temporibus quae! Unde, ducimus odit.</p>
            </div>
          </div>
          {/* item */}
          <div className=' relative mx-auto  mb-2' data-aos="zoom-in" data-aos-offset='300' data-aos-delay="900">
            <img src={Headset2} alt="/" />
            <div className=' absolute bottom-0 max-w-[300px] bg-white/20  backdrop-blur-md m-h-[150px] p-6'>
              <h2 className='font-xl font-semibold mb-2'>AIot</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil temporibus quae! Unde, ducimus odit.</p>
            </div>
          </div>
          {/* item */}
          <div className=' relative mx-auto mb-2' data-aos="zoom-in" data-aos-offset='300' data-aos-delay="1200">
            <img src={Headset3} alt="/" />
            <div className=' absolute bottom-0 max-w-[300px] bg-white/20  backdrop-blur-md m-h-[150px] p-6'>
              <h2 className='font-xl font-semibold mb-2'>HoloLens</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil temporibus quae! Unde, ducimus odit.</p>
            </div>
          </div>
          {/* item */}
          <div className=' relative mx-auto mb-2' data-aos="zoom-in" data-aos-offset='300' data-aos-delay="1400">
            <img src={Headset4} alt="/" />
            <div className=' absolute bottom-0 max-w-[300px] bg-white/20  backdrop-blur-md m-h-[150px] p-6'>
              <h2 className='font-xl font-semibold mb-2'>TPCASTT</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil temporibus quae! Unde, ducimus odit.</p>
            </div>
          </div>
        </div>
      </div>
  </section>;
};

export default Headsets;
