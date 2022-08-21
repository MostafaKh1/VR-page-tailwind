import React from 'react';
import img1 from "../assets/img/exp-img1.png"
import img2 from "../assets/img/exp-img2.png"


const Experience = () => {
  return <section className='mb-12 lg:mb-24'>
    <div className='container mx-auto'>
        <div className='flex flex-col min-h-[480px] lg:flex-row lg:space-x-20'>
            <div className='flex-1 flex items-center space-x-6 lg:space-x-12'>
                {/* image */}
                <div className=' self-start' data-aos="fade-down" data-aos-delay="400">
                  <img src={img1} alt="/" />
                </div>
                <div className=' self-end' data-aos="fade-up" data-aos-delay="400">
                  <img src={img2} alt="/" />
                </div>
            </div>
            {/* text */}
            <div className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0' data-aos="fade-left" data-aos-delay="400">
              <h2 className='text-3xl font-bold mb-6'>New Experience in Playing Games</h2>
              <p className=' font-secondary mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laudantium tempore accusantium ex aliquam voluptatibus eum temporibus possimus optio vero.</p>
              <button className='btn'>Get it Now</button>
            </div>
        </div>
    </div>
  </section>;
};

export default Experience;
