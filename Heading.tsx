 import React from 'react'
 import Image from 'next/image'
 import picture from '../picture/imageCode.webp'
 export default function Heading() {
   return (
     <>
       
        <section className=' shadow-lg  bg-gary-200 w-full h-auto   p-8 flex flex-col lg:flex-row items-center'>
      
        <div className=' w-full lg:w-3/4  lg:mb-0'>
       <h1 className=' text-3xl text-black font-bold'>
         Certified Cloud Computiing !
       </h1>
       <p className='text-lg text-gray-700'>
            Our Cloud Computing certification program helps you become proficient in modern cloud services, with hands-on training in cloud platforms, virtualization, and scalable infrastructure. Whether you are just starting or an IT professional, this course is designed to give you the skills needed to thrive in today's tech environment.
           </p>

           <button className=' bg-blue-600 mt-5 py-3 px-4 rounded-lg hover:bg-red-500  hover:text-white transform-transition duration-300 '>Explore Courses</button>
           </div>

           <div className=' w-[340px]  lg:w-1/5 ml-5 '>
           <Image 
           data-aos = 'fade-right'
            src= {picture}
            alt="Cloud Computing" 
            className='w-full h-auto object-cover shadow-md mt-10 rounded-md' 
          />
           </div>
       </section>
       </>
   )
 }



// import React from 'react';

// export default function Heading() {
//   return (
//     <>
//       <section className='shadow-lg bg-gray-200 w-full h-[550px] flex items-center justify-center p-8'>
//         {/* Left side - Image */}
//         <div className='w-1/4'>
//           <img 
//             src="https://via.placeholder.com/150" // Replace with the URL of your image
//             alt="Cloud Computing" 
//             className='w-full h-auto object-cover rounded-md shadow-md' 
//           />
//         </div>
        
//         {/* Right side - Text */}
//         <div className='mr-8 w-1/3'>
//           <h1 className='text-4xl text-black font-bold mb-4'>
//             Certified Cloud Computing!
//           </h1>
//           <p className='text-lg text-gray-700'>
//             Our Cloud Computing certification program helps you become proficient in modern cloud services, with hands-on training in cloud platforms, virtualization, and scalable infrastructure. Whether you are just starting or an IT professional, this course is designed to give you the skills needed to thrive in today's tech environment.
//           </p>
//         </div>
//       </section>
//     </>
//   )
// }



// import React from 'react';

// export default function Heading() {
//   return (
//     <>
//       <section className='shadow-lg bg-gray-200 w-full h-auto p-8 flex flex-col lg:flex-row items-center'>
//         {/* Text Section - Heading and Paragraph */}
//         <div className='w-full lg:w-3/4 mb-4 lg:mb-0'>
//           <h1 className='text-4xl text-black font-bold mb-4'>
//             Certified Cloud Computing!
//           </h1>
//           <p className='text-lg text-gray-700'>
//             Our Cloud Computing certification program helps you become proficient in modern cloud services, with hands-on training in cloud platforms, virtualization, and scalable infrastructure. Whether you are just starting or an IT professional, this course is designed to give you the skills needed to thrive in today's tech environment.
//           </p>
//         </div>

//         {/* Image Section - Positioned on the right for large screens and below text for mobile */}
//         <div className='w-[340px] mt-5 lg:w-1/4'>
//           <img 
//             src="https://via.placeholder.com/150" // Replace with your actual image
//             alt="Cloud Computing" 
//             className='w-full h-auto object-cover rounded-md shadow-md' 
//           />
//         </div>
//       </section>
//     </>
//   );
// }
