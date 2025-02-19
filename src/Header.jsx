import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <Link to={'/'}>home</Link>
        <Link to={'/posts'}>posts</Link>
        <Link to={'/users'}>users</Link>
    </div>
  )
}
