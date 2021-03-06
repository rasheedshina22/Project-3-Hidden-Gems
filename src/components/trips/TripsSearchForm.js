import React from 'react'

const TripsForm = ({ handleSearch }) => {

  return (
    <div className="field is-flex">
      <div className="control">
        <label className="label is-searchform"> <strong> Explore by category </strong> </label>
      </div>
      <div className="select is-rounded">
        <select
          name="category"
          defaultValue="Please Choose..."
          onChange={handleSearch}
        >
          <option disabled>Please Choose...</option>
          <option value="" > Search All </option>
          <option> Pubs Crawl</option>
          <option> Caravan Trips </option>
          <option> Road Trips </option>
          <option> Rare Trips </option>
          <option> Weekend Trips </option>
          <option> Sunday Trips </option>
          <option> Camping Trips </option>
          <option> Cycling Trips </option>
          <option> Family Trips </option>
        </select>
      </div>
    </div>
  )
}

export default TripsForm
