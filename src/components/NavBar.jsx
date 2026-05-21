import React from 'react';

const NavBar = () => {
  return (
      <nav className="flex gap-6 items-center">
      <a href="#hero" className="text-white hover:text-blue-400 transition-colors">
        Home
      </a>
      <a href="#video-section" className="text-white hover:text-blue-400 transition-colors">
        Explore
      </a>
      <a href="#facts-table" className="text-white hover:text-blue-400 transition-colors">
        Planetary Facts
      </a>
      <a href="#contact-section" className="text-white hover:text-blue-400 transition-colors">
        Contact
      </a>
    </nav>
  )
}

export default NavBar