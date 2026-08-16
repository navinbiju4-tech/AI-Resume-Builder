import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTrash } from "react-icons/fa";
import { getAlldownloadApi, getAllResumeApi } from '../services/apiService';
import { resume } from 'react-dom/server';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function Download() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [downloadList, setDownloadList] = useState([])
  console.log(downloadList);
  const [label,setLabel] = useState([])
  const [value,setValue] = useState([])
  const colorPallete = ['#2596be','#ed9f57','#392e18','#1be42c','#9c0046','#c1ebea']
  const backgroundColor = label.map((value,index)=>colorPallete[index%colorPallete.length])

  const data ={
    labels:label,
    datasets:[
      {
        data:value,
        backgroundColor
      }
    ]
  }


  useEffect(() => {
    getAllDownloads()
  }, [])



  const getAllDownloads = async () => {
    const result = await getAlldownloadApi()
    setDownloadList(result.data)
    const output={}
    result.data.forEach(item=>{
      const currentJob = item.jobRole
      const currentCount = 1
      if(currentJob in output){
        output[currentJob] +=1
      }else{
        output[currentJob] =1
      }
    })
    setLabel(Object.keys(output))
    setValue(Object.values(output))
  }


  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h1>Download Resume History</h1>
        <button onClick={handleOpen} className='btn btn-success '>View in chart</button>
      </div>
      {
        downloadList.length > 0 &&
        <p>Total Download resumes from our site is<span className='fw-bold'>{downloadList.length}</span></p>
      }
      <div className='row my-2'>
        {/* duplicate according to download resume content */}
        {
          downloadList?.length > 0 ?
            downloadList?.map(resume => (
              <div key={resume?.id} className='col-lg-4 mb-3'>
                <div style={{ height: '300px' }} className='shadow p-3 rounded' >

                  <h6>Review at :{resume?.timestamp}</h6>

                  <div className="mt-3 text-center">
                    <Link to={`/resume/${resume?.resumeId}`}><img className='w-100' height={'220px'} src={resume?.resumeImg}></img></Link>
                  </div>
                </div>
              </div>
            ))
            :
            <div> candidate does not download any resume yet !!</div>
        }
      </div>
      {/* modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{backgroundColor:'#5c494c',color:'white'}} className='text-center'>
            CV Download count by job role
          </Typography>
         <Box>
          <div className='text-center'>
          <Pie data={data}/>
          </div>
          <p style={{textAlign:'justify'}}>This chart provides an overview of the number of CV downloads associated with different job roles on the website. It helps visualize the demand and engagement for CVs across various career categories, making it easier to identify which job roles attract the highest number of downloads. By comparing download counts across roles, the chart can provide useful insights into user preferences and the popularity of different career opportunities on the platform.</p>
         </Box>
        </Box>
      </Modal>

    </div >
  )
}

export default Download