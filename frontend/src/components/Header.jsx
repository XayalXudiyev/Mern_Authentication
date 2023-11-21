import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <NavLink to='/'>

          <h1 className='font-bold text-sm sm:text-xl  flex flex-wrap'>
            PHANTOM
          </h1>
        </NavLink>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type="text" placeholder='Search ...' className='bg-transparent focus:outline-none w-24 sm:w-64 md:w-96' />
          <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>
          <NavLink to='/home'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
          </NavLink>

          <NavLink to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
          </NavLink>

          <NavLink to='/sign-in'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Sign in</li>
          </NavLink>

        </ul>
      </div>
    </header>
  )
}
