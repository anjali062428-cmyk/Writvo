import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {

    const{title, description, category, image, _id} = blog;
    const navigate = useNavigate()

  return (
    <div
    onClick={() => navigate(`/blog/${_id}`)}
    className='w-full bg-white rounded-lg overflow-hidden
    shadow-md hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transform transition-all duration-300
    cursor-pointer h-full flex flex-col'
>
      <img
           src={image}
           alt=""
           className='w-full h-52 object-cover'/>
      <span className="inline-block w-fit px-3 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full">
      {category}</span>
      <div className='p-5 flex-1 flex flex-col'>
      <h5 className='mb-2 font-medium text-gray-900 line-clamp-2'>
          {title}</h5>
      <p className='mb-3 text-xs text-gray-600 line-clamp-3' dangerouslySetInnerHTML={{"__html": description?.slice(0,120)}}>
        </p>
      </div>
    </div>
  )
}

export default BlogCard
