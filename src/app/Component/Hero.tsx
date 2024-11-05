"use client";
import Link from "next/link";
import React from "react";
import Typewriter from 'typewriter-effect';
import Image from "next/image";


const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-5 space-y-4 font-bold text-gray-900 ">
              I am web devoloper
              <br className="hidden lg:inline-block "  /> 

              {/* Type writer effect */}
              <Typewriter 
                 options={{
                   strings: ['Web developer', 'UI/UX Designer', ''],
                   autoStart: true,
                   loop: true,
                 }} 
                  
               />
             
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi qui
              ipsum sint itaque, repellat aliquid delectus a, sit odio fugit
              laborum quae inventore. Blanditiis repellat magnam in facilis?
              Aperiam, facilis?
            </p>
            <div className="flex justify-center">
              <Link href={"#contact us"}>
              <button
                className="inline-flex text-white bg-blue-700 font-bold tracking-wider py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-xl hover:bg-gradient-to-r from-blue-600 to-blue-300 " 
                aria-label="Contact Us Button" >
                Contact 
              </button>
            </Link>
              </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto h-[350px] w-[450px] transform transition hover:scale-105 duration-300 cursor-pointer"
              alt="hero"
              src="/picture/huza.jpg" height={300} width={300}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
