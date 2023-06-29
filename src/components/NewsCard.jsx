import React from 'react'
import {motion} from 'framer-motion'

const NewsCard = ({id, title, href}) => {
  return (
   <motion.div
   drag="x"
  dragConstraints={{ left: -10, right: 10 }}
   initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
   className="relative w-5/6 md:w-1/2 lg:w-1/3 m-5 ">
    <img src="/images/img (1).jpg" alt="img" className=" absosute w-full h-full object-cover" />
    <div className="absolute bottom-0 h-1/2 text-3xl w-full bg-[rgba(0,0,0,0.5)] z-50 p-3 text-white font-medium" >
        <a href={href} className='hover:underline'>{title}</a>
    </div>
   </motion.div>
  )
}

export default NewsCard