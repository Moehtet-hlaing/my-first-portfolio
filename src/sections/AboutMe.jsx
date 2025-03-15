import React from 'react'
import PICTURE from '../assets/images/profile-image-3.png'
import { ABOUT_ME } from '../utils/data'
import { a } from 'framer-motion/client'

const AboutMe = () => {
  return (
    <section className='container max-w-[1200px] mx-auto px-8 py-16 md:py-24'>
      <h4 className='section-title block md:hidden w-[200px] text-left mb-16'>About Me</h4>
      <div className=" flex flex-col md:flex-row gap-16 items-left justify-between ">
        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-[#FFE6DF] rounded-sm mx-auto">
        <img src={PICTURE} alt="profile image" className=' profile-pic rounded-sm' />
        </div>
      <div className="flex-1">
        <h4 className='section-title hidden md:block w-[200px] text-start'>About Me</h4>
        <p className="text-sm text-justify leading-6 whitespace-pre-line mt-4">
          {ABOUT_ME.content}
        </p>
        <div className="flex gap-4 mt-6">
          {
            ABOUT_ME.socialLinks.map((item) => 
              <a key={item.label} href={item.link} className=' cursor-pointer group'>
                <item.icon className=" text-2xl text-secondary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-primary" />
              </a>
            )
          }
        </div>
      </div>
      </div>
    </section>
  )
}

export default AboutMe