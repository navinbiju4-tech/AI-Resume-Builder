import React from 'react'
import { Link } from 'react-router-dom'
import Preview from '../components/Preview'
import { FaFileDownload } from "react-icons/fa";
import Edit from '../components/Edit'
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { IoMdHome } from "react-icons/io";

function View() {
  return (
    <div className='container'>
      <div className='row'>
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* naviagate icon */}
          <div className="d-flex justify-content-center align-items-center">

            {/* download */}
            <button style={{ color: '#714a2f' }} className="btn ">
              <FaFileDownload className='fs-3' />
              Download Cv
            </button>

            {/* edit */}
            <Edit />

            {/* all resume */}
            <Link to={'/all-resume'} style={{ color: '#714a2f' }} className="btn "><IoDocumentTextOutline className='fs-3' />
              All resumes </Link>

            {/* download history */}
            <Link to={'/downloads'} style={{ color: '#714a2f' }} className="btn  "><MdHistory className='fs-3' />
              Download History</Link>
              
            {/* back */}
            <Link to={'/resume-details'} style={{color:'#714a2f'}} className="btn  "><IoMdHome className='fs-3' />
             Home</Link>

          </div>
          {/* preview componenets */}
          <div className="p-5">
            <Preview />
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default View