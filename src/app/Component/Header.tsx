import Link from 'next/link'
import React from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <span className="ml-1 text-2xl text-gray-600 hover:text-gray-900 font-bold cursor-pointer font-serif ">HUZAFA DAWOOD</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-900 font-bold text-lg">Home</Link >
            <Link href={"#About"} className="mr-5 hover:text-gray-900 font-bold text-lg">About</Link >
            <Link href={"#skills"} className="mr-5 hover:text-gray-900 font-bold text-lg">Skills</Link >
            <Link href={"#Project"} className="mr-5 hover:text-gray-900 font-bold text-lg">Project</Link >
          <Link href={"#contact"} className="mr-5 hover:text-gray-900 font-bold  text-lg ">Contact </Link >
          </nav>
          <a href="/picture/Cv/Curriculum vitae.pdf " target='_blank'>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-lg font-bold mt-4 md:mt-0 hover:bg-gradient-to-r from-blue-600 to-blue-300">
            Download CV
            <FaCloudDownloadAlt className='text-2xl h-4 ml-4' />
          
          </button>  </a>
        </div>
      </header>
    </div>
  )
}

export default Header
