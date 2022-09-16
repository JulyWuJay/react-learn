import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
const ListPanel: React.FC = () => {
  interface Issues{
    id: string
    title: string
  }
  const list: Issues[] = [
    {
      id: '11111',
      title: '第一个错误'
    },
    {
      id: '2222',
      title: '第2个错误'
    }
  ]
  return (
    <div>
      <ul className='list'>
        {
          list.map(value => {
            return (
              <li key={value.id}>
                <Link to={`/issues/content/list/${value.id}`}>
                  {value.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ListPanel
