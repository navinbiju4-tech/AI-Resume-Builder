import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaEdit } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaXmark } from "react-icons/fa6";
import jobRole from '../assets/jobRole (1).json'


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

function Edit({ resumeDetails, setResumeDetails }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const removeSkill = (skill)=>{
    setResumeDetails({...resumeDetails,skills:resumeDetails.skills.filter(item=>item!=skill)})
  }

  return (
    <div>
      <button onClick={handleOpen} className='btn'><FaEdit className='fs-4' />Edit Cv</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personal details */}
            <div>
              <h3>Personal Details</h3>
              <div className="p-3 row">

                <TextField value={resumeDetails.fullName} onChange={e => setResumeDetails({ ...resumeDetails, fullName: e.target.value })} id="standard-basic-name" label="Full Name" variant="standard" />

                <TextField value={resumeDetails.location} onChange={e => setResumeDetails({ ...resumeDetails, location: e.target.value })} id="standard-basic-loc" label="Location" variant="standard" />

                <FormControl variant="standard">
                  <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>

                  <Select value={resumeDetails.job} onChange={e => setResumeDetails({ ...resumeDetails, job: e.target.value })}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Job" >
                    {
                      jobRole.jobRoles.map(job => (
                        <MenuItem key={job} value={job}>{job}</MenuItem>))
                    }

                  </Select>
                </FormControl>


              </div>
            </div>
            {/* contact details */}
            <div>
              <h3>Contact Details</h3>
              <div className="p-3 row">
                <TextField value={resumeDetails.email} onChange={e => setResumeDetails({ ...resumeDetails, email: e.target.value })} id="standard-basic-email" label="Email" variant="standard" />

                <TextField value={resumeDetails.phone} onChange={e => setResumeDetails({ ...resumeDetails, phone: e.target.value })} id="standard-basic-num" label="Contact Number" variant="standard" />

                <TextField value={resumeDetails.linkedin} onChange={e => setResumeDetails({ ...resumeDetails, linkedin: e.target.value })} id="standard-basic-linkedIn" label="linkedIn" variant="standard" />

                <TextField value={resumeDetails.github} onChange={e => setResumeDetails({ ...resumeDetails, github: e.target.value })} id="standard-basic-Github" label="github Link" variant="standard" />

              </div>
            </div>
            {/* educational details */}
            <div>
              <h3>Educational Details</h3>
              <div className="p-3 row">
                <TextField value={resumeDetails.degree} onChange={e => setResumeDetails({ ...resumeDetails, degree: e.target.value })} id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />

                <TextField value={resumeDetails.college} onChange={e => setResumeDetails({ ...resumeDetails, college: e.target.value })} id="standard-basic-college" label="College/University" variant="standard" />

                <TextField value={resumeDetails.year} onChange={e => setResumeDetails({ ...resumeDetails, year: e.target.value })} id="standard-basic-year" label="Year of Graduation" variant="standard" />

              </div>
            </div>
            {/* skills */}
            <div>
              <h3>skills</h3>
              <div className='d-flex p-3'>
                <input type='text' placeholder='Add new skills'
                  className='form-control'></input>
                <Button>ADD</Button>
              </div>
              <h6>Added Skills :</h6>
              <div className='p-3 d-flex justify-content-between flex-wrap'>
                {/* all skills - duplocate */}
                {
                  resumeDetails?.skills?.map(skill => (
                    <Button onClick={()=>removeSkill(skill)} key={skill} varient="contained" sx={{ backgroundColor: '#534444' }} className='my-1'>{skill}<FaXmark className='ms-2' /></Button>
                  ))}

              </div>
            </div>
            {/* summary */}
            <div>
              <h3>Summary</h3>
              <div className='p-3 row'>
                <TextField value={resumeDetails.summary} onChange={e => setResumeDetails({ ...resumeDetails, summary: e.target.value })} id='summary' label="summary" multiline varient='standard'></TextField>
              </div>
            </div>
            {/* update button */}
            <button className='btn text-light mt-3' style={{ backgroundColor: '#213a5d' }}>UPDATE CV</button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit