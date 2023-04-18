// 使用懒加载的话，需要用 React 中的 Suspense 配置加载中的内容
import React, { lazy } from 'react'
const Home = lazy(() => import("@/views/Home"))

import { Navigate } from "react-router-dom"

const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>loading</div>}>
      {comp}
    </React.Suspense>
)

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" /> 
  },
  {
    path: "/home",
    element: withLoadingComponent(<Home></Home>)
  },
]

export default routes