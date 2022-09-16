import React from 'react'
import ListPanel from './ListPanel'
import { Outlet } from 'react-router-dom'
const Content: React.FC = () => {
  return (
    <>
      <ListPanel/>
      <Outlet/>
    </>
  )
}

export default Content
