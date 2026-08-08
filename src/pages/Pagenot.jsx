import React from 'react'
import { Link } from 'react-router-dom'

function Pagenot() {
  return (
     <div style={{height:'90vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <img className='w-25' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGirznB1IzuqWaYRpMQfw5EYcvy2Hc9B72GpAmuxu6eJwaZyerPqacaTy&s=10' alt=''/>
      <h6 className='mt-5'> WE ARE SORRY LOOK LIKE YOU ARE LOST</h6>
      <p>page your are looking is not available</p>
      <Link to={'/'} className='btn btn-dark'>Back to Home</Link>
    </div>
  )
}

export default Pagenot