import React from 'react'
import Container from '../components/commonLayouts/Container'
import { IoMdSearch } from "react-icons/io";
import CartIcon from '../icons/CartIcon';
import UserIcon from '../icons/UserIcon';

const MiddleBar = () => {
  return (
    <Container>
      <div className='flex items-center justify-between py-8'>
        {/* logo */}
        <div>
          <img src="images/logo.png" alt="logo" />
        </div>

          {/* search */}
        <div className='flex items-center'>
          <div className='relative mr-12'>
            <input className='w-[332px] border border-[#CCCCCC] py-[18px] px-6 rounded-[10px]' 
            type="text" placeholder='Search Products ...'/>
            <IoMdSearch className='text-3xl absolute right-6 top-1/2 transform -translate-y-1/2'/>
          </div>

          {/* cart */}
          <div className='relative pl-[50px] mr-20'>
            <div className='absolute top-[5px] left-0'><CartIcon/></div>
            <p className='text-base font-normal leading-6'>Cart</p>
            <span className='text-sm font-semibold leading-5'>$150,00</span>
          </div>

          {/* user */}
         <div className='relative pl-[50px] after-content-[""] after:absolute after:top-[50%] after:left-[-45px] after:w-px after:h-8 after:bg-[#BFBFBF] after:-translate-y-1/2'>
            <div className='absolute top-[5px] left-0'><UserIcon/></div>
            <p className='text-base font-normal leading-6'>User</p>
            <span className='text-sm font-semibold leading-5'>Account</span>
          </div>

        </div>
      </div>
    </Container>
  )
}

export default MiddleBar