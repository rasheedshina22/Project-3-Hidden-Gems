import React from 'react'

const TripsForm = ({ handleSearch }) => {

  return (
    <div className="field">
      <div className="control">
        <label> <strong> Explore by category </strong> </label>
      </div>
      <div className="select">
        <select
          name="category"
          defaultValue="Please Choose..."
          onChange={handleSearch}
        >
          <option disabled>Please Choose...</option>
          <option> Pubs </option>
          <option> Museum </option>
          <option> Restaurants </option>
        </select>
      </div>
    </div>
  )
}

export default TripsForm
