import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className='w-full sticky top-0 flex items-center justify-between px-[10%] py-2 border-b bg-white'>
        <p className='text-2xl font-semibold'>CaterMaster</p>
        <div className="flex text-lg font-medium items-center gap-5">
            <p>Dashboard</p>
            <p>Bookings</p>
            <p>Option</p>
            <FaRegCircleUser size={24} />
        </div>
    </div>
  )
}

export default Navbar