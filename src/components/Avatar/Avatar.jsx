import React from 'react'
import './avatar.css'




export default function Avatar(props) {
  return (
    <img className='avatar'
      src={props.avatarUrl}
      alt={props.name}
    />
  )
}
