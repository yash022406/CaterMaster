import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AddCategoryOverlay from './Overlays/AddCategoryOverlay';
const FoodItemCategory = () => {
    const category = [
        {
            id: 1,
            category_name: "Sweets",
            category_desc: "All type of sweets",
        },
        {
            id: 2,
            category_name: "Breakfast",
            category_desc: "Tea, Coffee, Pakode",
        },
        {
            id: 3,
            category_name: "Shakes",
            category_desc: "Mango, Banana, Papaya",
        },
        {
            id: 4,
            category_name: "Soup",
            category_desc: "Tomato, Mix vegetable, Manchow",
        },
        {
            id: 5,
            category_name: "Starter",
            category_desc: "All type of starters",
        },
    ]
    const [addCategory, setAddCategory] = useState()
    const openAddCategory = () => {
        setAddCategory(true);
      }
      const closeAddCategory = ( ) => {
        setAddCategory(false);
      }
  return (
    <div className='px-6 pt-6 w-full'>
        <div className="flex justify-between items-center">
            <p className="text-xl">Food Items Category</p>
            <button onClick={() => {openAddCategory()}} className='p-2 border-2 border-[#484848] text-white bg-[#484848] rounded-md hover:bg-white hover:border-2 hover:border-[#484848] hover:text-black'>Add Category</button>
        </div>
        <div className="w-full pt-8">
        <table className='w-full table-auto border-collapse'>
      <thead className='bg-gray-200'>
        <tr>
          <th className='w-1/3 py-2 px-4 border-b'>Name</th>
          <th className='w-1/3 py-2 px-4 border-b'>Description</th>
          <th className='w-1/3 py-2 px-4 border-b'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {category.map((item, index) => (
          <tr key={item.id} className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
            <td className='py-2 px-4 text-center'>{item.category_name}</td>
            <td className='py-2 px-4 text-center'>{item.category_desc}</td>
            <td className='py-2 px-4 text-center flex justify-center gap-2'>
              <FaRegEdit size={20} />
              <MdDelete size={20} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
        {   addCategory &&
            <AddCategoryOverlay closeAddCategory={closeAddCategory} />
        }
    </div>
  )
}

export default FoodItemCategory