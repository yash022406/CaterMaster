import React, { useEffect } from 'react'
import './overlay.css'
import { IoMdClose } from "react-icons/io";
const AddCategoryOverlay = ({closeAddCategory}) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
              closeAddCategory();
            }
          };

          const handleClickOutside = (event) => {
            const modalContent = document.querySelector(".modal-content");
      
            if (
              modalContent &&
              !event.target.closest(".modal-content") 
            ) {
              // Close the modal if the click is outside the modal content and not on the excluded class
              closeAddCategory();
            }
          };

          document.addEventListener("mousedown", handleClickOutside)
          document.addEventListener("keydown", handleKeyDown);

          return () => {
                document.removeEventListener("mousedown", handleClickOutside);
                document.removeEventListener("keydown", handleKeyDown);
        };
    }, [closeAddCategory])
  return (
    <div className='modal-overlay'>
        <div className="modal-content flex flex-col w-[60%] rounded-md bg-white px-[2.5%] py-4">
            <div className="flex w-full justify-between mt-4">
                <p className='text-xl'>Add Category</p>
                <IoMdClose className='cursor-pointer' onClick={closeAddCategory} size={24} />
            </div>
            <div className="flex flex-col">
                <label className='font-medium text-lg my-3' htmlFor="">Name</label>
                <input type="text" className='p-1 px-2 border border-[#7b7b7b] rounded-md  outline-[#5b5b5b]' />
                <label className='font-medium text-lg my-3 mt-3' htmlFor="">Description</label>
                <input type="text" className='p-1 px-2 border border-[#7b7b7b] rounded-md outline-[#5b5b5b]' />
                <label className='font-medium text-lg my-3 mt-3' htmlFor="">Add Image</label>
                <input type="file" multiple name="" id="" />

            </div>
            <div className='flex items-center justify-center mt-4'>
            <button className='my-4 p-2 rounded-md text-white bg-[#5b5b5b]' onClick={closeAddCategory}>Add Category</button></div>
        </div>
    </div>
  )
}

export default AddCategoryOverlay