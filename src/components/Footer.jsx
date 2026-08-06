import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

function Footer() {
  return (
    <div style={{ height: '350px', backgroundColor: '#8f7664'}} className='container-fluid p-5 '>
      <div className='row'>
        <div className="col-lg-4">
          <h4 className='mb-2'>AI rBuilder</h4>
          <p style={{ textAlign: 'justify' }}>An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes.
          </p>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <h4 className='mb-3'>Contact us</h4>
          <p><CiMail />resumebuilder@gmail.com </p>
          <p><FaPhoneAlt />9025252525</p>
          <h5 className='my-3'>Connect with us</h5>
          <div className='fs-5'>
            <FaInstagram></FaInstagram>
            <FaFacebook className='mx-2'></FaFacebook>
            <FaWhatsappSquare />
          </div>
        </div>
      </div>
      <h6 className='text-center my-2'> Desgined a AI rBuilder</h6>
    </div>
  )
}

export default Footer