import React from 'react'
import Footer from './Footer_component'
import Header from './Header_component'

const Layout = ({children,isAuth=false}) => {
  return (
    <>
    {isAuth && <Header/>}
    {children}
    {isAuth && <Footer/>}
    </>
  )
}

export default Layout