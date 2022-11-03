import React from 'react'

export default function Text(props) {
  return (
    <div>
        <h4>{props.TitleText}</h4>
        <p>{props.ParagraphText}</p>
        <p>{props.ParametrText}</p>
    </div>
  )
}
