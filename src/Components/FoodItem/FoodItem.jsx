import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AddFoodItemOverlay from './Overlays/AddFoodItemOverlay';
const FoodItem = () => {
    const category = [
        {
            id: 1,
            category_name: "सल्तेद नमकीन",
            category_desc: "All type of sweets",
            category: "Sweets"
        },
        {
            id: 2,
            category_name: "	काजुकतली",
            category_desc: "Tea, Coffee, Pakode",
            category: "Sweets"
        },
        {
            id: 3,
            category_name: "रस मलाई",
            category_desc: "Mango, Banana, Papaya",
            category: "Sweets"
        },
        {
            id: 4,
            category_name: "इन्द्राणी",
            category_desc: "Tomato, Mix vegetable, Manchow",
            category: "Sweets"
        },
        {
            id: 5,
            category_name: "गुलाब रबड़ी",
            category_desc: "All type of starters",
            category: "Sweets"
        },
    ]
    const [addfood, setfood] = useState()
    const openFoodItemsOverlay = () => {
      setfood(true);
      }
      const closeFoodItemsOverlay = ( ) => {
        setfood(false);
      }
  return (
    <div className='px-6 pt-6 w-full'>
        <div className="flex justify-between items-center">
            <p className="text-xl">Food Items</p>
            <button onClick={() => {openFoodItemsOverlay()}} className='p-2 border-2 border-[#484848] text-white bg-[#484848] rounded-md hover:bg-white hover:border-2 hover:border-[#484848] hover:text-black'>Add Food Item</button>
        </div>
        <div className="w-full pt-8">
        <table className='w-full table-auto border-collapse'>
      <thead className='bg-gray-200'>
        <tr>
          <th className='w-1/4 py-4 px-4 border-b'>Name</th>
          <th className='w-1/4 py-4 px-4 border-b'>Category</th>
          <th className='w-1/4 py-4 px-4 border-b'>Description</th>
          <th className='w-1/4 py-4 px-4 border-b'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {category.map((item, index) => (
          <tr key={item.id} className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
            <td className='py-4 px-4 text-center'>{item.category_name}</td>
            <td className='py-4 px-4 text-center'>{item.category}</td>
            <td className='py-4 px-4 text-center'>{item.category_desc}</td>
            <td className='py-4 px-4 text-center flex justify-center gap-2'>
              <FaRegEdit size={20} />
              <MdDelete size={20} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
        {   addfood &&
            <AddFoodItemOverlay closeFoodItemsOverlay={closeFoodItemsOverlay} />
        }
    </div>
  )
}

export default FoodItem