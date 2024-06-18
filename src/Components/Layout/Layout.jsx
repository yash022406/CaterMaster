import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
const Layout = () => {
  return (
    <div className='w-full h-screen'>
        <Navbar />
        <div className="flex">
        <Sidebar/>
        <Outlet/>
        </div>
    </div>
  )
}

export default Layout