
import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className="flex h-screen font-poopins">
      <Sidebar />
      <div className="flex-1 p-4 bg-[#F1F5F9] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout