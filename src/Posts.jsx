import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Posts({ posts }) {
    const navigate = useNavigate();
    return (
        <div>
            {
                posts.map((post) => {
                    return (
                        <h2 key={post.id}>{post.title}</h2>
                    )
                })
            }
             <button onClick={() => {
                navigate(-1)
            }}>go back</button>
        </div>
    )
}
