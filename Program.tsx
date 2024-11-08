import React from 'react'
import Image from 'next/image'
import Picture from '../picture/programStudy.webp'
export default function Program() {
  return (
    <>
    <div className=' flex flex-col justify-center items-center mb-10'>
       <h1 className=' text-3xl font-bold text-black mb-5'> The Program Nutshell</h1>
       <h3 className=' text-center text-3xl font-bold text-red-500'>Earn While You Learn</h3>

       <p className='text-lg text-center p-5 font-semibold w-full'>
       In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.
       money and boost exports in the classroom and will begin doing so within six months of the program's beginning. 
       </p>
    </div>
    <section className=' flex flex-col md:flex-row justify-between items-center p-6'>
      <div className=' max-w-lg mb-5 md:mb-0'>
      <h1 className='text-3xl font-bold text-black  ml-0 md:ml-36' data-aos = 'fade-up-right'>Achieve Your <span className=' text-blue-500'>Goals</span></h1> <br />
      <p className=' ml-0 md:ml-36 w-full' data-aos = 'fade-up-right'>
      This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
      </p>
       <button  className='ml-0 md:ml-36 bg-blue-500 py-3 px-8 rounded-md mt-5 text-white hover:bg-blue-700 hover:text-white transform-transition duration-300 font-bold' >Apply Now</button>

      </div>
   
    
     <Image src={Picture} alt='' className='w-full md:w-1/3 mr-10' data-aos = 'fade-up-left' /> 
    {/* Adjust size as needed */}

    </section>

    </>
  )
}


// import React from 'react';
// import Image from 'next/image';
// import Picture from '../picture/programStudy.webp';

// export default function Program() {
//   return (
//     <>
//       <div className='flex flex-col justify-center items-center mb-10'>
//         <h1 className='text-3xl font-bold text-black mb-5'>The Program Nutshell</h1>
//         <h3 className='text-center text-3xl font-bold text-red-500'>Earn While You Learn</h3>

//         <p className='text-lg text-center p-5 font-semibold'>
//           In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.
//         </p>
//       </div>

//       <section className='flex flex-col md:flex-row justify-between items-center p-6'>
//         <div className='max-w-lg mb-5 md:mb-0'>
//           <h1 className='text-4xl font-bold text-black mb-3'>
//             Achieve Your <span className='text-blue-500'>Goals</span>
//           </h1>
//           <p className='mb-4'>
//             This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
//           </p>
//           <button className='bg-blue-500 py-3 px-5 text-white hover:bg-blue-700 transition duration-300 font-bold'>
//             Apply Now
//           </button>
//         </div>

//         <Image src={Picture} alt='Program Study Image' className='w-full md:w-1/2 rounded-lg shadow-lg' />
    
//       </section>
//     </>
//   );
// }
