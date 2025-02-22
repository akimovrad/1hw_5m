import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className="text">
     <div className="logo">
     <h1>logo</h1>
     </div>
      <div className="link">
      <Link className='link-2' to={'/'}>home</Link>
        <Link className='link-2' to={'/posts'}>posts</Link>
        <Link  className='link-2'to={'/users'}>users</Link>
      </div>
      </div>
    </div>
  )
}
