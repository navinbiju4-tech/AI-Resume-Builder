import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';



function Header() {
    const aboutusContent = " An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF."
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#8f7664" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* app icon */}
                        <img width={'30px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIz-fhOeueFVeSNEp53bX7HwYOqvo1tiSG2ehiLRBXQ&s=10"
                            alt="icon" />

                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        <Link to={'/'} className='text-light text-decoration-none'>AI rBuilder</Link>
                    </Typography>
                    <Link to={'/all-resume'} className="text-light text-decoration-none"> All resumes </Link>
                    <Link to={'/downloads'} className="text-light text-decoration-none mx-5"> All downloads </Link>
                    <Tooltip title={aboutusContent}>
                        <Button color="inherit" className='fs-5 fw-bolder' sx={{ fontFamily: "Poppins" }} >ABOUT US</Button></Tooltip>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header