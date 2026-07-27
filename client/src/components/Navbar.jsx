import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContent';

const Navbar = () => {
  
  
    const{navigate, token} = useAppContext()

  return (
    <div className='flex justify-between items-center pt-3 px-6 sm:px-12 lg:px-20'>
      <img onClick={()=>navigate('/')} src={assets.logo} className='w-48 sm:w-44  cursor-pointer' alt="logo" />
      <button onClick={()=>navigate('/admin')} className='flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 hover:scale-105 transition-all duration-300 text-white px-6 py-2.5 sm:px-10 text-sm cursor-pointer shadow-md'>
        {token ? 'Dashboard' : 'Login'}
          <img src={assets.arrow} className='w-3' alt="arrow" />
      </button>
    </div>
  )
}

export default Navbar
