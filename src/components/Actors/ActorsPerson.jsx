import React from 'react'
import './actors.css'

export default function ActorsPerson(props) {
  return (
    <div className='actors'>
        <img src={props.ActorsAvaUrl} alt="" />
        <h3><strong>{props.RoleName}</strong></h3>
        <h4>{props.ActorsName}</h4>
    </div>
  )
}
