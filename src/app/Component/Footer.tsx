import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500">
  <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    
    
    <span className="ml-1 text-2xl tracking-tight text-blue-950 font-bold cursor-pointer font-serif ">HUZAFA DAWOOD</span>
    </a>
    <p className=" text-gray-700 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-3xl">
      © 2024 Portfolio 
  
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    
    <Link
      target='_blank'
       href={'https://www.linkedin.com/in/huzaifa-dawood-6b96b62ba/' }  className="text-gray-500">
      <Image src={"/picture/linkdln.png"} alt='' height={65} width={65}></Image>
      </Link>
      <Link
      target='_blank'
       href={'https://www.instagram.com/huzai_fa8099?igsh=YzljYTk1ODg3Zg==' }  className="text-gray-500 -mt-1">
      <Image src={"/picture/insta.webp"} alt='' height={70} width={70}></Image>
      </Link>
      <Link
      target='_blank'
       href={'https://www.instagram.com/huzai_fa8099?igsh=YzljYTk1ODg3Zg==' }  className="text-gray-500">
      <Image src={"/picture/facebook.png"} alt='' height={65} width={65}></Image>
      </Link>
   
      
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
