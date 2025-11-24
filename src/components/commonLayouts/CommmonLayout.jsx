import React from 'react'
// @ts-ignore
import { Outlet } from 'react-router-dom'
import Container from './Container'
import Header from '../../header/Header'

const CommmonLayout = () => {
  return (
    <>
        <Container>
            <Header/>
            <Outlet/>
            <div>Footer</div>
        </Container>
    </>
  )
}

export default CommmonLayout