import React from 'react'
import { useRoutes } from 'react-router-dom'
const Issues = React.lazy(() => import('./pages/Issues'))
export default function Router() {
  return useRoutes([
    {
      path: '/issues',
      element: <Issues/>,
    }
  ])
}
