// @ts-nocheck
import Container from '../components/commonLayouts/Container'
import React from 'react'
import { Link } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";

const TopBar = () => {
  return (
    <div className='border-b border-[#BFBFBF] border-solid py-6'>
      <Container>
        <div className='flex items-center justify-between '>
          <div className='flex items-center gap-12 font-normal text-sm relative after-content-[""] after:absolute after:top-[-15%] after:left-[55%] after:w-[1px] after:h-[32px] after:bg-[#e81313] after:-tranlate-y-1/2'>
            <Link to="https://maps.app.goo.gl/kJyxP1vAUUhX7cgq7" target="_blank" className='flex items-center gap-2'>
              <IoLocationOutline /> Notun Bazar, Badda
            </Link>
            <Link tel="+8801707607518" className='flex items-center gap-2'>
            <MdOutlineLocalPhone /> +8801707-607518
            </Link>
          </div>
          <div>right</div>
        </div>
      </Container>
    </div>
  )
}

export default TopBar