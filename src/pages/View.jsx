import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Preview from '../components/Preview'
import { FaFileDownload } from "react-icons/fa";
import Edit from '../components/Edit'
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { viewResumeApi } from '../services/apiService';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

function View() {
   
  const previewRef=useRef()
  const[resume,setResume]=useState({})
  const {id} = useParams()
  console.log(resume);

  useEffect(()=>{
    getResumeDetails()
  },[])
  
  const getResumeDetails = async ()=>{
    const response = await viewResumeApi(id)
    if(response.status=200){
      setResume(response.data)
    }
  }

  const downloadCV = async()=>{
    const previewTag = previewRef.current
    const canvas = await html2canvas(previewTag)
    const pdf = new jsPDF()
    const imageWidth = pdf.internal.pageSize.getWidth()
    const imageHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(canvas,"PNG",0,0,imageWidth,imageHeight)
    pdf.save("resume.pdf")
  }
  




  return (
    <div className='container'>
      <div className='row'>
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* naviagate icon */}
          <div className="d-flex justify-content-center align-items-center">

            {/* download */}
            <button onClick={downloadCV} style={{ color: '#714a2f' }} className="btn ">
              <FaFileDownload className='fs-3' />
              Download Cv
            </button>

            {/* edit */}
            <Edit  resumeDetails = {resume} setResumeDetails = {setResume}/>

            {/* all resume */}
            {/* <Link to={'/all-resume'} style={{ color: '#714a2f' }} className="btn "><IoDocumentTextOutline className='fs-3' />
              All resumes </Link> */}

            {/* download history */}
            {/* <Link to={'/downloads'} style={{ color: '#714a2f' }} className="btn  "><MdHistory className='fs-3' />
              Download History</Link>
               */}
            {/* back */}
            <Link to={'/resume-details'} style={{color:'#714a2f'}} className="btn  "><IoMdHome className='fs-3' />
             Home</Link>

          </div>
          {/* preview componenets */}
          <div ref={previewRef} className="p-5">
           <Preview resumeDetails={resume}/>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default View