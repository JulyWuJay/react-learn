import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom' 
import './index.css'
const Issues: React.FC = () => {
  return (
    <div className='issues'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Issues
