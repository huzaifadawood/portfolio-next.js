import React from 'react'

import { FaCheckSquare } from "react-icons/fa";

const Skill = () => {
  return (
    
<div id='skills'>

{/* Line break */}
<hr className="mx-auto w-[75rem] max-w-full border-t-2 border-blue-300" />

<section className="text-gray-600 body-font">
  <div className="container px-5 py-20 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-bold  text-center font-serif title-font text-gray-900 mb-4">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap lg:w-[65%] sm:mx-auto sm:mb-2 -mx-2">

    <div className="px-14 py-6 sm:w-1/2 w-full">
               <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                
                <FaCheckSquare className="text-lg font-bold text-white" />
    
                </div>
                <h2 className="text-lg font-semibold tracking-tight">
               HTML
                </h2>
              </div>
    
              <div className="w-full h-1 rounded-lg bg-gray-500 ">
                  <div className="w-[100%] h-1 rounded-lg bg-blue-500 "/>
                </div>
                <h3 className="text-blue-500 text-sm text-right font-semibold tracking-tight">100%</h3>
      </div>

      <div className="px-14 py-6 sm:w-1/2 w-full">
               <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                
                <FaCheckSquare className="text-lg font-bold text-white" />
    
                </div>
                <h2 className="text-lg font-semibold tracking-tight">
               Tailwind css
                </h2>
              </div>
    
              <div className="w-full h-1 rounded-lg bg-gray-400 ">
                  <div className="w-[92%] h-1 rounded-lg bg-blue-500 "/>
                </div>
                <h3 className="text-blue-500 text-sm text-right font-semibold tracking-tight">92%</h3>
      </div>

      <div className="px-14 py-6 sm:w-1/2 w-full">
               <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                
                <FaCheckSquare className="text-lg font-bold text-white" />
    
                </div>
                <h2 className="text-lg font-semibold tracking-tight">
               Typescript/Javascript
                </h2>
              </div>
    
              <div className="w-full h-1 rounded-lg bg-gray-400 ">
                  <div className="w-[70%] h-1 rounded-lg bg-blue-500 "/>
                </div>
                <h3 className="text-blue-500 text-sm text-right font-semibold tracking-tight">70%</h3>
      </div>

      <div className="px-14 py-6 sm:w-1/2 w-full">
               <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                
                <FaCheckSquare className="text-lg font-bold text-white" />
    
                </div>
                <h2 className="text-lg font-semibold tracking-tight">
               NextJs
                </h2>
              </div>
    
              <div className="w-full h-1 rounded-lg bg-gray-500 ">
                  <div className="w-[70%] h-1 rounded-lg bg-blue-500 "/>
                </div>
                <h3 className="text-blue-500 text-sm text-right font-semibold tracking-tight">70%</h3>
      </div>




   
    </div>
  
  </div>
</section>


 </div>


  )
}


export default Skill

