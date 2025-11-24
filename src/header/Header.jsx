import React from 'react'
import BottomBar from './BottomBar'
import MiddleBar from './MiddleBar'
import TopHeader from './TopHeader'

const Header = () => {
  return (
    <>
        <TopHeader/>
        <MiddleBar/>
        <BottomBar/>
    </>
  )
}

export default Header