
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Saved from './pages/Saved'
import View from './pages/View'
import Info from './pages/Info'
import Pnf from './pages/Pnf'
import Download from './pages/Download'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {


  return (
    <>
     <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/resume-details' element={<Info />}></Route>
        <Route path='/all-resume' element={<Saved />}></Route> 
        <Route path='/resume/:id' element={<View />}></Route>
        <Route path='/downloads' element={<Download />}></Route>
        <Route path='/*' element={<Pnf/>}></Route>
      </Routes>
      <Footer/>

    </>
  )
}

export default App
