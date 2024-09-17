import React from 'react'
import { Link } from 'react-router-dom'

import './MyNavbar.css'

export default function MyNavbar() {
  return (
    <nav className='navbar'>
        <div className="navbar__links">
          <Link to="/">Главная</Link>
          <Link to="/about">О сайте</Link>
          <Link to="/posts">Посты</Link>
        </div>
      </nav>
  )
}