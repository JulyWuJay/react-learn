import React from 'react'
import { useRoutes } from 'react-router-dom'
const Header = React.lazy(() => import('./pages/Header'))

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Header/>
    }
  ])
}
