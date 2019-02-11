import React from 'react'

const GemsForm = ({handleSearch}) => {

  return (
    <div className="field">
      <div className="control">
        <label className="label"> <strong> Explore by category </strong> </label>
        <div className="select">
          <select
            name="category"
            defaultValue="Please Choose..."
            onChange={handleSearch}
          >
            <option disabled>Please Choose...</option>
            <option> Pubs </option>
            <option> Pub </option>
            <option> Restaurant </option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default GemsForm
