import React from 'react'
import Image from 'next/image'
import Picture from '../picture/Zoom.webp'
export default function Zoom() {
  return (
    <>
     <section className=' flex justify-center'>

    <div className=' flex flex-col lg:flex-row justify-center items-center text-center lg:text-left'>
       
    <Image
          src={Picture}
          alt='Web 3.0 Image'
          data-aos = 'fade-right'
          className='w-[250px] lg:w-[500px] mx-auto lg:mr-3 mt-4' // Centering the image and giving a right margin
          />
       
         {/* Text on the left */}
          <div className='max-w-lg mt-3 lg:mt-0 ' data-aos = 'fade-left'>
          <h1 className='text-3xl font-bold'>
          Live Class From  <br /><span className='text-blue-500'>Anywhere Via Zoom</span>
        </h1>
        <p className='text-sm text-gray-950 mt-2 w-full'>
          Web 3.0 has the potential to change the internet as we know it forever. You're still early in catching the trend and building your first blockchain application, acquiring the skills to get a high-paying job, or creating your own web 3.0 projects that can make you money. In Web 2.0, all the data is controlled by Big Tech companies, such as Google, Apple, etc. In the decentralized web, no single person or company owns any data or information about anyone, and everything is visible to the public. Web 3.0, also known as the decentralized web, is the third and latest 
        </p>
        <button className=' bg-blue-500 px-8 mt-4 py-3 hover:bg-blue-600 hover:text-white rounded-md transform-transition duration-300 font-bold'>Learn More</button>
      </div>
          
        
        </div>
      <div>
      </div>
    
     </section>
    </>
  )
}
