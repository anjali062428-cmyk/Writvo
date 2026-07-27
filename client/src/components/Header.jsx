import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContent'
import { useRef } from 'react'

const Header = () => {

  const {setInput, input} = useAppContext()
  const inputRef = useRef()

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    setInput(inputRef.current.value)
  }

    const onClear = ()=>{
      setInput('')
      inputRef.current.value = ''
    }

  return (

    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div className='text-center mt-20 mb-8'>
        <div className='inline-flex items-center items-center gap-2 px-5 py-2 rounded-full border border-purple-200 bg-purple-50 text-purple-600 shadow-sm'>
            <p className='text-sm font-medium'>
              New: AI feature integrated
            </p>
            <img src={assets.star_icon} className='w-3 h-3' alt=""/>
        </div>
        <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'>Your own{" "}
           <span className='bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent'>
            blogging</span> 
            <br />platform.</h1>
            <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs
            text-gray-500'>
              This is your space to think out loud, to share what matters, 
              and to write without filters. Whether it's one word or a thousand, your story starts
              right here.</p>

              <form onSubmit= {onSubmitHandler} className='flex justify-between w-full max-w-2xl mx-auto mt-8 border border-gray-300 bg-white rounded-nd overflow-hidden shadow-sm'>
                <input ref={inputRef}
                type='text' 
                placeholder='Search for blogs' 
                required 
                className='flex-1 pl-4 outline-none'/>

                <button 
                type='submit'
                className='bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-2 font-medium hover:opacity-90 transition'>
                Search</button>
              </form>
      </div>
      <div className='text-center'>
        {input && (
  <button
    onClick={() => setInput("")}
    className="border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer"
  >
    Clear Search
  </button>
)}
      </div>
      <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50'/>
    </div>
  )
}

export default Header
