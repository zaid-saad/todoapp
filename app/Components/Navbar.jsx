import React from 'react'

const Navbar= () => {
  return (
    <div className='flex py-3 flex-wrap justify-around'>
        <h1 className='text-2xl font-semibold '>Todo App</h1>
        <ul className='flex gap-[40px] text-[16px] cursor-pointer'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
    </div>
    
  )
}
export default Navbar