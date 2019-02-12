import React from 'react'
import { Link } from 'react-router-dom'

const GemCard = ({ _id, name, image, category, address }) => {
  return (

    <Link to={`/gems/${_id}`}>
      <div className="isImage">

        <figure className="image is-4by3">
          <img src={image} alt={name}  className="gemImage"/>
          <div className="middle">
            <div className="text">{name}</div>
            <div className="text">{address}</div>
          </div>
        </figure>

      </div>
    </Link>

  )
}

export default GemCard
