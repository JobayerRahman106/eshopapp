import React from 'react'
import Topbar from './Topbar'
import BottomBar from './BottomBar'
import MiddleBar from './MiddleBar'

const Header = () => {
  return (
    <>
        <Topbar/>
        <MiddleBar/>
        <BottomBar/>
    </>
  )
}

export default Header