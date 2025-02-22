import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Home() {
    return (
        <div>
            <Link className='link-4' to={'/'}>home</Link>
            <Link className='link-4' to={'/posts'}>posts</Link>
            <Link  className='link-4'to={'/users'}>users</Link>
        </div>
    )
}
