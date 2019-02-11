import React from 'react'

const GemsForm = ({ handleChange }) => {

  return (
    <div className="field">
      <div className="control">

        <label className="label"> <strong> Explore by category </strong> </label>
        <div className="select is-rounded">
          <select
            name="category"
            onChange={handleChange}
          >
            <option> All </option>
            <option> Pubs </option>
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

        <div className="field">
          <div className="control">
            <label className="label"> <strong> Search By City </strong> </label>
            <form>
              <input name="location" className="input" type="text" placeholder="Location" onChange={handleChange} />
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default GemsForm
