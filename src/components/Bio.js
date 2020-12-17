import React from 'react'

const Bio = (props) => {
  const { image, name, title, blurb } = props
  return (
    <div>
      <img className="shadow-md mb-4" src={image}></img>
      <h3 className="text-lg mb-0 text-blue-900">{name}</h3>
      <h3 className="text-lg text-blue-400">{title}</h3>
      <p className="text-gray-600">{blurb}</p>
      <p>{props.expandedText}</p>
    </div>
  )
}

export default Bio
