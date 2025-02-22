import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Users({users}) {
    const navigate = useNavigate();

  return (
    <div>
         {
                users.map((user) => {
                    return (
                        <h2 key={user.id}>{user.name}</h2>
                    )
                })
            }
            <button onClick={() => {
                navigate(-1)
            }}>go back</button>
    </div>
  )
}
