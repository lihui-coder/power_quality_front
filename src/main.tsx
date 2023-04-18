import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式初始化
import 'reset-css'
// UI框架样式

// 全局样式
import '@/assets/styles/global.scss'

// 组件样式
import App from './App'
// BrowserRouter 是 history 模式
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
