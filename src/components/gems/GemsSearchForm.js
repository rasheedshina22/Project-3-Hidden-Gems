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
            <option value="" > Search All </option>
            <option> Pubs </option>
            <option> Bars </option>
            <option> Restaurants </option>
            <option> Bars </option>
            <option> Cafes </option>
            <option> Landmarks </option>
            <option> Viewpoints </option>
            <option> Religious Sites </option>
            <option> Galleries </option>
            <option> Parks </option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default GemsForm
