import React from 'react';
import Logo from "../assets/img/logo.svg"
import Nav from "./Nav"
import { HiMenu } from "react-icons/hi"

const Header = ({setNavbarMobile}) => {
  return (
    <header className='py-6' data-aos="fade-down" data-aos-duration="2000" data-aos-delay="900">
        <div className='container mx-auto'>
            <div className='flex items-center justify-between '>
              <a href='#'>
                <img className='h-[30px]' src={Logo} alt="logo" />
              </a>
              <Nav />
              {/* nav Mobile */}
              <HiMenu onClick={() => setNavbarMobile(true)} className="lg:hidden  text-3xl text-white cursor-pointer" />
            </div>
        </div>
    </header>
  );
};

export default Header;
