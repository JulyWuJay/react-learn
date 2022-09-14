# react-learn

## react-router 使用
1. 安装
`npm i react-router-dom`
  配合ts
`npm i @types/react-dom -s`
2. 创建路由配置文件
```
routes.tsx
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
```
3. 把路由文件放到App.tsx里
```
import React from 'react';
import Route from './routes'
import './App.css';

function App() {
  return (
    <Route/>
  );
}

export default App;

```
4. 外面包裹 BrowserRouter
```
index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```