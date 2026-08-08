import React from 'react'
import { Link } from 'react-router-dom'
import { FaTrash } from "react-icons/fa";

function Download() {
  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h1>Download Resume History</h1>
        <Link to={'/resume-details'}>back</Link>
      </div>
      <h6>Total Download resumes from our site is<span className='fw-bold'>10</span></h6>
      <div className='row my-2'>
        {/* duplicate according to download resume content */}
        <div className='col-lg-4 mb-3'>
          <div style={{height:'300px'}} className='shadow p-3 rounded' >
            <div className="d-flex justify-content-between align-items-center">
              <h6>Review at : timestamp</h6>             
            </div>
            <div className="mt-3 text-center">
              <Link to={'/resume/:id'}><img className='w-100' height={'220px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgeKWjX538uw85f2OrWrbFWY2vLyIqs1dbPsJzr0Ywg&s=10"></img></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download