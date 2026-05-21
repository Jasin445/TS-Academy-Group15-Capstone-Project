import React from 'react';
import NavBar from './NavBar'; 

const Header = () => {
  return (
     <header className="bg-slate-900 px-8 py-4 flex justify-between items-center">
      <div className="header-wrapper">
        <img
          src="https://res.cloudinary.com/jasond/image/upload/v1770026324/graphics_fcihct.png"
          width="121px"
          height="52px"
          alt="logo"
        />
      </div>
      
      {/* This renders your nav links on the right side of the header */}
      <NavBar />
    </header>
  )
}

export default Header