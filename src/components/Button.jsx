import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title = "Start a Project"}) {
  return (
    <div className='min-w-40 px-4 py-2 text-black bg-zinc-200 rounded-full flex item-center justify-between'>
        <span className='text-sm font-serif font-medium'>{title}</span>
        <IoIosReturnRight />
        </div>
  )
}

export default Button