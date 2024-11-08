import React from 'react';

import pic2 from '../pic2/studentIcon.webp';
import picture from '../picture/classes.webp'
import picture3 from '../picture3/teacher.webp'
import Image from 'next/image';
export default function ProudPage() {
  return (
    <>
      {/* Main Section */}
      <section className='bg-gray-100 p-10'>
        {/* Heading */}
        <div className='text-center mb-10'>
          <h1 className='text-4xl font-bold text-blue-600 mb-4 whitespace-nowrap'>
           We Are Proud
          </h1>
          <p className='text-sm text-gray-700'>
           You Don't Have To Be Struggle Our Assistance Will Help You And Got You
          </p>
        </div>

       <div className=' flex flex-col lg:flex-row justify-center  items-center gap-5' >
        <div className=' bg-blue-500  rounded-lg shadow-md text-center w-full py-3  p-3 lg:w-1/3' data-aos="fade-up">
        <Image src={pic2} alt='' 
          className='  mx-auto mb-4 w-24 h-24 object-cover rounded-full' data-aos="fade-up"/>

          <h2 className='text-2xl font-bold mb-2 '>5,000</h2>
          <p className=' text-white font-bold text-lg'>Student's Enrolled</p>
        </div>

        <div className=' bg-pink-500 p-2 rounded-lg shadow-md text-center w-full py-3 lg:w-1/3' data-aos="fade-up">
        <Image src={picture} alt='' 
          className='  mx-auto mb-4 w-24 h-24 object-cover rounded-full' data-aos="fade-up"/>
          <h2 className='text-2xl font-bold mb-2 '>5,000</h2>
          <p className=' text-white font-bold text-lg'>Student's Enrolled</p>
        </div>

        <div className=' bg-purple-700 p-3 rounded-lg shadow-md text-center w-full py-3  lg:w-1/3' data-aos="fade-up">
        <Image src={picture3} alt='' 
        data-aos="fade-up"
          className='  mx-auto mb-4 w-24 h-24 object-cover rounded-full'/>
          <h2 className='text-3xl font-bold mb-2 '>100+</h2>
          <p className=' text-white font-bold  text-lg'>Skill's Instructor</p>
        </div>

        <div className=' bg-green-600 p-3 rounded-lg shadow-md text-center w-full py-3  lg:w-1/3' data-aos="fade-up">
        <Image src={pic2} alt='' 
        data-aos="fade-up"
          className='  mx-auto mb-4 w-24 h-24 object-cover rounded-full'/>
          <h2 className='text-2xl font-bold mb-2 '>1,000</h2>
          <p className=' text-white text-lg font-bold'>Student's Enrolled</p>
        </div>
       </div>

   
      </section>
    </>
  );
}


     {/* Success Stories
        <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
          <div className='bg-blue-500 p-6 rounded-lg shadow-md text-center w-[300px] lg:w-1/3'>
            <Image
              src={pic2}
              alt="Student 1"
              className='mx-auto mb-4 rounded-full w-24 h-24 object-cover'
            />
            <h3 className='text-2xl font-bold mb-2'>5,000</h3>
            <p className='text-gray-700'>Student's Enrolled</p>
          </div>
        </div> */}