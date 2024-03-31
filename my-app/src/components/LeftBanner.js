import React, { useEffect } from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiPaypal } from "react-icons/si";
import Granim from "granim"
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["an Educator.", "a DECA Advisor.", "a Dolphins Fan!"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  useEffect(() => {
    // new Granim({
    //   element: "#logo-canvas",
    //   direction: "left-right",
    //   opacity: [1, 1],
    //   state: {
    //     gradients: [
    //       ["#ff014f", "#ff014f"],
    //       ["#ff014f", "#ff014f"],
    //       ["#ff014f", "#ff014f"],
    //     ]
    //   }
    // })
  }, [])
  // new Granim({
  //   element: "#logo-canvas",
  //   direction: "left-right",
  //   opacity: [1, 1],
  //   state: {
  //     gradients: [
  //       ["#ff014f", "#ff014f"],
  //       ["#ff014f", "#ff014f"],
  //       ["#ff014f", "#ff014f"],
  //     ]
  //   }
  // })


  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-sky-400">Paul Kimbler</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span className='text-white'></span> <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#38bdf8"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am currently a Business Teacher and DECA Advisor at Wayzata High School. My mission in life is to prepare each and every student with the life and professional skills needed to be successful in their future endeavours. Drawing on my 11 years of experience in the business world and business connections, I strive to create a realistic and diverse learning environment for all my students.
        </p>
      </div>
      {/* <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0"> */}
      <div className="flex flex-col xl:flex-row gap-16">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Donate Today!
          </h2>
          <div className="flex gap-4">
            {/* <GradientSpan startColor={startColor} endColor={endColor} className="w-48 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-sky-400 cursor-pointer duration-300 col-span-4"> */}
            <span className="w-48 h-16 bg-sky-400 bg-opacity-100 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-sky-400 cursor-pointer duration-300 col-span-4">
              <SiPaypal />
            </span>
            {/* </GradientSpan> */}
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftBanner