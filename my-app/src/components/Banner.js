import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen max-container pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black md:ml-14 ">
      <LeftBanner />
     <RightBanner />
    </section>
  );
}

export default Banner