import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiVenmo } from "react-icons/si";
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["an Educator.", "a DECA Advisor.", "a Dolphins Fan!"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 1500,
  });



  return (
    <div className="flex flex-col gap-20 px-5 md:px-0 mt-10 md:mt-0">
      <div className="flex flex-col gap-5 max-w-5xl mx-auto">
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
        {/* <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am currently a Business Teacher and DECA Advisor at Wayzata High School. My mission in life is to prepare each and every student with the life and professional skills needed to be successful in their future endeavours. Drawing on my 11 years of experience in the business world and business connections, I strive to create a realistic and diverse learning environment for all my students.
        </p>  */}
      </div>
      {/* <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0"> */}
      <div className="flex flex-col xl:flex-row gap-16">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Donate Today!
          </h2>
          <div className="flex gap-4">
            <a href='https://venmo.com/Paul-Kimbler-10'>
              <span className="w-48 h-16 bg-sky-400 dark:bg-sky-400 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-sky-400 cursor-pointer duration-300 col-span-4">
                <SiVenmo className='inline-block mr-2 text-6xl' />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href='https://www.facebook.com/paul.kimbler.7/' target='_blank'>
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <a target='_blank' href='https://www.linkedin.com/in/paulkimbler/'>
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftBanner