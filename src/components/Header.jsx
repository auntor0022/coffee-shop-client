import React from 'react';
import logo from '../assets/logo1.png'

const Header = () => {
    return (
        <div className='flex justify-center items-center gap-4 bg-[#372727] py-4'>
            <img src={logo} alt="" className='w-[75px] h-[90px]' />
            <h2 className='font-normal text-6xl text-white'>Espresso Emporium</h2>
        </div>
    );
};

export default Header;