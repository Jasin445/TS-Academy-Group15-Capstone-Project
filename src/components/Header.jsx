import React from 'react';

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
    </header>
  )
}

export default Header