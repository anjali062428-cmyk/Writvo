import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center my-32 px-4'>
      <h1 className='text-3xl md:text-5xl font-semibold'>Never Miss a Blog!</h1>
      <p className='text-gray-500 text-sm md:text-base pb-8'>Subscribe to get the latest blog, new tech, and exclusive news.</p>
      <form className="flex items-center w-full max-w-2xl mt-5">

  <input
    type="email"
    placeholder="Enter your email id"
    required
    className="flex-1 border border-gray-300 px-4 py-3 rounded-l-md outline-none"
  />

  <button
    type="submit"
    className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-r-md
    hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg
    transition-all duration-300 cursor-pointer"
  >
    Subscribe
  </button>

</form>
    </div>
  )
}

export default Newsletter
