import React from 'react'
  import { IoMdDocument } from "react-icons/io";
  import { IoMdDownload } from "react-icons/io";
import { Link } from 'react-router-dom';

  
function Resume() {
  return (
    <div style={{ minHeight: '80vh' }} className='my-5'>
      <h1 className="text-center">Create An Ats Friendly Resume In Minutes with Ai</h1>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-1"></div>

          <div className="col-md-4 rounded p-5 shadow text-center">
          <IoMdDocument />
            <h4>Add Your details</h4>
            <p>Our Ai Will generate skills and summery</p>
            <h5>step 1</h5>
          </div>
          <div className="col-md-2"></div>

          <div className="col-md-4 rounded p-5 shadow text-center">
          <IoMdDownload />
            <h4>Download Tour Resume</h4>
            <p>Download CV as PDF and start applying</p>
            <h5>step 2</h5>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
       <div className='mt-5 text-center'>
          <Link to={'/resume-details'} style={{backgroundColor:'#81634d'}} className='btn text-center text-light'>
          LET'S START</Link>
       </div>
    </div>
  )
}

export default Resume