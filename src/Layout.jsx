import React from 'react'
import SideBar from './components/sidebar/SideBar'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'

function Layout() {
  return (
<>
<div className='flex'>
<SideBar/>
<div className='w-3/4'>
  <Header/>
<Outlet/>
</div>
</div>
</>
  )
}

export default Layout