import React from 'react'
import './review.css'

export default function Review(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.avatarUrl}
          alt={props.name}
        />
        <div className="UserInfo-name">
          {props.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  )
}
