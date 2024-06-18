import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { FaBookmark } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import { GiCook } from "react-icons/gi";
import { GrBucket } from "react-icons/gr";
import { FaRupeeSign } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='h-[94vh] flex flex-col gap-5 px-6 pt-6 border-r'>
        <Link to='/' className="flex items-center gap-3">
            <RxDashboard size={24} />
            <p className='text-lg'>Dashboard</p>
        </Link>
        <Link className="flex items-center gap-3">
            <FaBookmark size={24} />
            <p className='text-lg'>Bookings</p>
        </Link>
        <Link className="flex items-center gap-3">
            <BiDish size={24} />
            <p className='text-lg'> Events</p>
        </Link>
        <Link className="flex items-center gap-3">
            <GiCook size={24} />
            <p className='text-lg'>Labour</p>
        </Link><Link className="flex items-center gap-3">
            <GrBucket size={22} />
            <p className='text-lg'>Assets</p>
        </Link>
        <Link className="flex items-center gap-3">
            <FaRupeeSign size={22} />
            <p className='text-lg'>Cashbook</p>
        </Link>
        <Link className="flex items-center gap-3">
            <FaRegUser size={22} />
            <p className='text-lg'>Labour</p>
        </Link>
        <Link className="flex items-center gap-3">
            <FaUserCircle size={24} />
            <p className='text-lg'>Customers</p>
        </Link>
        <Link to='/food-item-category' className="flex items-center gap-4">
            <FaCircle color='green' size={18} />
            <p className='text-lg'>Food Category</p>
        </Link>
        <Link className="flex items-center gap-4">
            <FaCircle size={16} color='green' />
            <p className='text-lg'>Food Items</p>
        </Link>
        
    </div>
  )
}

export default Sidebar