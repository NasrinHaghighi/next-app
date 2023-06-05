import React from 'react'
import Header from './Header'



function Layout({children}) {
  return (
    <div className="bg-gray-50 min-h-screen">
    <Header />
    <div className="container p-2 xl:max-w-screen-xl mx-auto">{children}</div>
  
  </div>
  )
}

export default Layout