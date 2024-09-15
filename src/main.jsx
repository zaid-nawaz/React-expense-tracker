import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Categories from './components/Categories/Categories.jsx'
import History from './components/TransHis/History.jsx'

import Layout from './Layout.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Dashboard/>}/>
      <Route path='categories/:cate' element={<Categories/>}/>
      <Route path='history' element={<History/>}/>


    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  
)


