import React from 'react'
import { useRoutes } from 'react-router-dom'
const Issues = React.lazy(() => import('./pages/Issues'))
const Content = React.lazy(() => import('./pages/Issues/content'))
const DetailPanel = React.lazy(() => import('./pages/Issues/content/DetailPanel'))
export default function Router() {
  return useRoutes([
    {
      path: '/issues',
      element: <Issues/>,
      children: [
        {
          // 这个是包含listpanel
          path: 'content',
          element: <Content/>,
          children: [
            {
              path: 'list/:id',
              element: <DetailPanel/>
            }
          ]
        },
        {
          // 这个不包含listpanel
          path: 'list/:id',
          element: <DetailPanel/>
        }
      ]
    }
  ])
}
