import React from 'react'
import ContactInfoCard from '../components/ContactInfoCard'
import { IoMdMail } from 'react-icons/io'
import { ABOUT_ME } from '../utils/data'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { MdOutlineWeb } from 'react-icons/md'

const ContactMe = () => {
  return (
    <section id='contact'>
      <div className=" container max-w-[1200px] mx-auto p-10">
        <div className=" w-full lg:w-[60vw] mx-auto">
          <h3 className=' section-title'>Contact Me</h3>
          <p className=" text-xs text-center mt-4 leading-6">
          Feel free to reach out to us for any inquiries or support. We're here to help and respond promptly to your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
          <div>
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactInfoCard icon={<IoPhonePortraitOutline />} text={ABOUT_ME.phone} />
            <ContactInfoCard icon={<MdOutlineWeb />} text={ABOUT_ME.website} />
          </div>
          
          <div className="">
            <h5 className=' md:hidden text-secondary text-lg font-medium mt-4 pb-5'>Contact Form</h5>
          <form action="" className="flex flex-col">
          <input type="text" placeholder='Full Name' className=' input-box' id='' name='fullname' autoComplete='off' />
          <input type="email" placeholder='Email' className=' input-box' id='' name='email' autoComplete='off' />
          <textarea type="text" placeholder='Message' rows={3} className=' input-box' id='' name='message' autoComplete='off' />
          <button className="action-btn btn-scale-anim">Submit</button>
        </form>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default ContactMe