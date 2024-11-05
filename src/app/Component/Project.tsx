import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Project = () => {
  return (
    
    <div id='Project'>

    {/* Line break */}
    <hr className="mx-auto w-[75rem] max-w-full border-t-2 border-blue-300" />
    
 <section className="text-gray-600 body-font">
   <div className="container px-5 py-20 mx-auto">
     <div className="flex flex-col text-center w-full mb-20">
       <h1 className="sm:text-3xl text-2xl font-bold title-font font-serif text-gray-900">
         My Project
       </h1>
     </div>
     <div className="flex flex-wrap justify-center -m-4">
 
 
       <div className="lg:w-[40%] sm:w-1/2 p-6">
         <div className="flex relative">
           <Image
             alt="gallery"
             className="absolute inset-0 w-full h-full object-cover object-center"
             src="/picture/govweb.jpg" width={200} height={200}
           />
           <div className="px-8 py-10 z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
           <h1 className="title-font text-2xl font-bold text-gray-900 mb-3 tracking-wide">
             Governor Sindh Website
             </h1>
             <p className="leading-relaxed mb-4 font-semibold text-lg tracking-wide">
               Artificial Intelligence Web 3.0 & Metaverse
             </p>
             <Link href={"https://www.linkedin.com/feed/update/urn:li:activity:7254564405856591875/" } className='hover:underline text-blue-400 font-semibold ' target='_blank' >View project</Link>
           </div>
         </div>
       </div>
       <div className="lg:w-[40%] sm:w-1/2 p-6">
       <div className="flex relative">
           <Image
             alt="gallery"
             className="absolute inset-0 w-full h-full object-cover object-center"
             src="/picture/resume.png" width={200} height={200}
           />
           <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
           <h1 className="title-font text-2xl font-bold text-gray-900 mb-3 tracking-wide">
           MY Project
             </h1>
             <p className="leading-relaxed mb-4 font-semibold text-lg tracking-wide">
             Milestone project resume builder
             </p>
             
             <Link href={"https://github.com/huzaifadawood/reseme-builder"} className='hover:underline text-blue-400 font-semibold target:_blank mt-10'>my project</Link>
             
            
           </div>
         </div>
       </div>
     
     
      
     </div>
   </div>
 </section>
 
 </div>
  )
}

export default Project
