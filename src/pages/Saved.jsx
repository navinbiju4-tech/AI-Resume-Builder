import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { FaTrash } from "react-icons/fa";
import { deletelResumeApi, getAllResumeApi } from '../services/apiService';
import { resume } from 'react-dom/server';
import { CiSearch } from "react-icons/ci";

function Saved() {

  const [allResumes, setAllResumes] = useState([])

  const [searchKey, setSearchKey] = useState("")

  const [dummyAllResumes, setDummyAllResumes] = useState([])

  console.log(searchKey);


  useEffect(() => {
    getAllResumes()
  }, [])

  const searchCandidate = useMemo(() => {
    setAllResumes(dummyAllResumes.filter(item=>item.job.toLowerCase().includes(searchKey.toLowerCase())))
  }, [searchKey])





  const getAllResumes = async () => {
    const response = await getAllResumeApi()
    if (response.status == 200) {
      setAllResumes(response.data)
      setDummyAllResumes(response.data)
    }
  }

  const removeResumes = async (id) => {
    if (confirm("Are you sure do you want to delete the resume")) {
      const response = await deletelResumeApi(id)
      if (response.status == 200) {
        getAllResumes()
      }
    }
  }


  return (
    <div className="my-5 d-flex justify-content-center align-items-center flex-column">
      <h1>All Saved Resumes</h1>
      <p style={{ textAlign: 'justify' }} className='my-5'>All resumes submitted to the platform in one
        place, allowing administrators or recruiters to efficiently view, search, filter, and manage
        candidate profiles. It provides a quick overview of available candidates and their key details,
        making the recruitment and candidate-selection process more organized and efficient.</p>

      <div className='d-flex justify-content-center align-items-center w-50'>
        <input onChange={(e) => setSearchKey(e.target.value)} type="text" placeholder='Search Candidate By Search Roles' className="form-control" />
        <CiSearch style={{ marginLeft: '-30px' }} />
      </div>
      <table className="my-5 table table-hover table-stripped">
        <thead>
          <tr className='table-dark'>
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {
            allResumes?.length > 0 ?
              allResumes?.map((resume, index) => (
                <tr key={resume?.id}>
                  <td>{index + 1}</td>
                  <td><Link to={`/resume/${resume?.id}`}>{resume?.fullName.toUpperCase()}</Link></td>
                  <td>{resume?.job.toUpperCase()}</td>
                  <td><button onClick={() => removeResumes(resume?.id)} className='btn text-danger'><FaTrash /></button></td>
                </tr>
              ))
              :
              <p className='text-center'>No Resumes added yet !!!</p>
          }
        </tbody>
      </table>
    </div>
  )
}

export default Saved