// import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router"

function Home() {
  return (
    <>
    <Header/>
    <Outlet/> <br />
    <Footer/>
    </>
  )
}

export default Home