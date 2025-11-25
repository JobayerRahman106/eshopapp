// @ts-nocheck
import React from 'react'
import Container from '../components/commonLayouts/Container'
import { Link } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";

const TopHeader = () => {
  return (
    <div className='border-b border-[#BFBFBF] border-solid py-[22px]'>
      <Container >
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-[50px] font-normal text-sm relative after:content-[""] after:absolute after:w-px after:h-8 after:bg-[#BFBFBF] 
          after:left-[60%] after:top-[20%] after:-translate-y-1/2'>
            <Link to="https://maps.app.goo.gl/LG93jHEoGXTkYwzS9" target='_blank' className="flex items-center gap-2" >
              <IoLocationOutline /> <span>Notun Bazar,Badda,Dhaka</span> 
             </Link>
            <Link to="tel:01707607518" className="flex items-center gap-2"> <MdOutlineLocalPhone /> <span>01707-607518</span> </Link>
          </div>
          <div>right</div>
        </div>
      </Container>
    </div>
  )
}

export default TopHeader