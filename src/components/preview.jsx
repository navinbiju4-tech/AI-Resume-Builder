import React from 'react'
import Divider from '@mui/material/Divider'
import { Button } from '@mui/material'


function Preview({resumeDetails}) {
  return (
    <div className='w-100'>
      <h2>{resumeDetails?.fullName}</h2>
      <p className="fs-6 lh-1">Phone:{resumeDetails?.phone}</p>
      <p className="fs-6 lh-1">Email:{resumeDetails?.email}</p>
      <p className="fs-6 lh-1">LinkedIn:{resumeDetails?.linkedin}</p>
      <p className="fs-6 lh-1">GitHub:{resumeDetails?.github}</p>
      <p className="fs-6 lh-1">Location:{resumeDetails?.location}</p>
      <Divider className='bg-dark my-3' />
      <h4>Professional Summary</h4>
      <p>{resumeDetails?.summary}</p>
      <Divider className='bg-dark my-3' />
      {/*duplicate according to skilll number  */}
      <h4>Technical Skills</h4>
      {resumeDetails?.skills?.map(item=>(
        <span key={item}> <Button variant="text" className='text-dark'>{item}</Button></span>
      ))}
      
      <Divider className='bg-dark my-3' />
      <h4>Education</h4>
      <p className="fs-6 lh-1">Bachelors Degree in: {resumeDetails?.degree}</p>
      <p className="fs-6 lh-1">University/College name: {resumeDetails?.college}</p>
      <p className="fs-6 lh-1">Year of Graduation: {resumeDetails?.year}</p>
    </div>
  )
}

export default Preview