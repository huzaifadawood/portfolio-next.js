import React from 'react';
import Image from 'next/image';


const About = () => {
  return (

    <div id='About'>

   {/* Line break */}
<hr className="mx-auto w-[75rem] max-w-full border-t-2 border-blue-300" />

      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto h-[350px] w-[450px] transform transition hover:scale-105 duration-300 cursor-pointer"
        alt="Profile-pic"
        src="/picture/huzz.jpg" height={300} width={300}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold font-serif text-gray-900 -inset-2mt-1">
      About Me
        <br className="hidden lg:inline-block" />
    
        
      </h1>
      <p className="mb-8 leading-relaxed text-xl font-bold ">
      I am fullstake devoloper Gen(AI), Web3.0 and Metaverse | HTML | Tailwind css | Typescript/Javascript | Next.js
      </p>
      <div className="flex justify-center">
      <a href="/picture/Cv/Curriculum vitae.pdf" target='_blank'>
        <button className="inline-flex text-white bg-blue-700 font-bold hover:bg-gradient-to-r from-blue-800 to-blue-300  py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg tracking-widest ">
        View CV
        </button></a>
       
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
