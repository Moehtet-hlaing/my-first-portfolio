import React from "react";
import PROFILE_PIC from "../assets/images/2.jpg";
import HTML from "../assets/icon-images/html.png";
import JS from "../assets/icon-images/js.png";
import NODEJS from "../assets/icon-images/node.js.png";
import REACT from "../assets/icon-images/react2.png";
import StatInfoCard from "../components/StatInfoCard";
import { STATS } from "../utils/data";

const Hero = () => {
  return (
    <section id="hero" className=" container mx-auto px-8 max-w-[1200px]">
      <div className=" flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px] ">
        <div className=" order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className=" text-xl lg:text-2xl font-medium text-black">
            👋Hi, I'm Seo Yuzuki
          </h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent">
            Building Scalable & User Centric Web Apps
          </h1>
          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
            I'm a Full-Stack Developer passionate about building scalable,
            efficient, and modern web applications with clean code and seamless
            user experiences.
          </p>
          <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 mt-6 ">
            <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim  ">
              View My Work
            </button>
            <button
              className=" flex-1 md:flex-none action-btn btn-scale-anim  "
            >
              Download Resume
            </button>
          </div>
      </div>
      <div className=" w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-[#FFE6DF] order-1 lg:order-2 relative rounded-xs">
        <div className="">
        <img src={PROFILE_PIC} alt="profile image" className="profile-pic w-[300px] md:w-[370px] h-[350px] md:h-[428px] rotate-[5.75deg] hover:scale-105 hover:rotate-[3deg] transition-transform duration-300 ease-in-out"/>
        </div>
        <img src={HTML} alt="" className=" icon-img -left-10 bottom-20 rotate-[1.75deg] z-10 "/>
        <img src={NODEJS} alt="" className=" icon-img left-5 md:left-10 -bottom-2 rotate-[2.75deg] "/>
        <img src={JS} alt="" className=" icon-img left-[110px] md:left-[150px] -bottom-6 rotate-[3.75deg]"/>
        <img src={REACT} alt="" className=" icon-img left-[200px] md:left-[245px] -bottom-9 md:-bottom-10 rotate-[4.75deg]"/>
        
      </div>
      
      </div>
      
      {/* STATs */}
      <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
        {
          STATS.map(
            (item) => (
              <StatInfoCard key={item.id} count={item.count} label={item.label} />
            )
          )
        }
      </div>
    </section>
  );
};

export default Hero;
