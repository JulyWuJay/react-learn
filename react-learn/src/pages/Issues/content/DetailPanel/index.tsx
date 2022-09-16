import React from 'react'
import {  useParams } from 'react-router-dom'

const DetailPanel: React.FC = () => {
  const { id } = useParams()
  console.log(id, 'id')
  return (
    <div>
      DetailPanel
    </div>
  )
}

export default DetailPanel
