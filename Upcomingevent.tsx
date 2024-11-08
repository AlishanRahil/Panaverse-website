import React from 'react';

export default function Upcomingevent() {
  const webinars = [
    {
      title: 'Webinar 1: Introduction to Web 3.0',
      date: 'October 10, 2024',
      time: '3:00 PM - 4:00 PM',
    },
    {
      title: 'Webinar 2: Advanced JavaScript Concepts',
      date: 'October 15, 2024',
      time: '5:00 PM - 6:00 PM',
    },
    {
      title: 'Webinar 3: Building Decentralized Apps',
      date: 'October 20, 2024',
      time: '2:00 PM - 3:00 PM',
    },
  ];

 

  return (
    <div className="w-full bg-gray-100 p-6">
      <h1 className="font-bold text-4xl text-black mb-10 text-center ml-0 md:ml-6">Upcoming Events</h1>
      
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6  md:space-y-0 md:space-x-6 w-full ">
        {/* Webinars Section */}
        <div className="flex flex-col md:flex-row justify-center items-center w-full space-y-6 md:space-y-0 md:space-x-6 ">
          {webinars.map((webinar, index) => (
            <div key={index} className="shadow-md bg-white rounded-lg p-6 w-full max-w-[350px] ">
              <h2 className="font-bold text-2xl text-black mb-3">{webinar.title}</h2>
              <div className="shadow-md bg-gray-300 rounded p-4 w-[200px] mb-4">
                <p className="font-semibold">{webinar.date}</p>
                <p className="text-sm text-gray-600">{webinar.time}</p>
              </div>
              <button className="bg-blue-500 py-2 px-4 text-white rounded hover:bg-red-700 transform-transition duration-300">
                Register Now
              </button>
            </div>
          ))}
        </div>

       

        </div>
      </div>

  );
}

// import React from 'react';

// export default function Upcomingevent() {
//   const webinars = [
//     {
//       title: 'Webinar 1: Introduction to Web 3.0',
//       date: 'October 10, 2024',
//       time: '3:00 PM - 4:00 PM',
//     },
//     {
//       title: 'Webinar 2: Advanced JavaScript Concepts',
//       date: 'October 15, 2024',
//       time: '5:00 PM - 6:00 PM',
//     },
//     {
//       title: 'Webinar 3: Building Decentralized Apps',
//       date: 'October 20, 2024',
//       time: '2:00 PM - 3:00 PM',
//     },
//   ];

//   return (
//     <div className="w-full bg-gray-100 p-6">
//       <h1 className="font-bold text-4xl text-black mb-10 text-center">Upcoming Events</h1>
      
//       <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 w-full">
//         {/* Webinars Section */}
//         <div className="flex flex-col md:flex-row justify-center items-center w-full space-y-6 md:space-y-0 md:space-x-6">
//           {webinars.map((webinar, index) => (
//             <div key={index} className="shadow-md bg-white rounded-lg p-6 w-full max-w-[350px]">
//               <h2 className="font-bold text-2xl text-black mb-3">{webinar.title}</h2>
//               <div className="shadow-md bg-gray-300 rounded p-4 w-[200px] mb-4">
//                 <p className="font-semibold">{webinar.date}</p>
//                 <p className="text-sm text-gray-600">{webinar.time}</p>
//               </div>
//               <button className="bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-700 transition">
//                 Register Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
