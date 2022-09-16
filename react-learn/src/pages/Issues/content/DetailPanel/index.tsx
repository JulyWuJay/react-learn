import React from 'react'
import {  useParams, useNavigate } from 'react-router-dom'

const DetailPanel: React.FC = () => {
  const navigate = useNavigate()

  const { id } = useParams()
  console.log(id, 'id')
  const toExpand = () => {
    navigate(`/issues/list/1`)
  }
  const toShrink = () => {
    navigate(`/issues/content/list/1`)
  }
  return (
    <div>
      DetailPanel
      <button onClick={() => toExpand()}>放大</button>
      <button onClick={() => toShrink()}>缩小</button>
    </div>
  )
}

export default DetailPanel
