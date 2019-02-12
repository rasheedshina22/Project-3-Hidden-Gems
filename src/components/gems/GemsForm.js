import React from 'react'
import MapboxAutocomplete from 'react-mapbox-autocomplete'



const GemsForm = ({ data, handleChange, handleSubmit, errors, suggestionSelect }) => {
  return (

    <div className="container">
      <div className="column is-6 is-offset-3 ">

        <h3 className="title has-text-centered">Add Your Gem</h3>
        {errors && <div className="notification is-danger">Missing fields</div>}
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  value={data.name || ''}
                />
                {errors.name && <small>{errors.name}</small>}
              </div>
            </div>

            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Image"
                  name="image"
                  onChange={handleChange}
                  value={data.image || ''}
                />
                {errors.image && <small>{errors.image}</small>}

              </div>
            </div>

            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Description"
                  name="description"
                  onChange={handleChange}
                  value={data.description || ''}
                />
                {errors.description && <small>{errors.description}</small>}

              </div>
            </div>

            <div className="field">
              <label className="label">Category</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    name="category"
                    defaultValue="Please Choose..."
                    onChange={handleChange}
                  >
                    <option disabled>Please Choose...</option>
                    <option value="" > Search All </option>
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
                {errors.category && <small>{errors.category}</small>}
              </div>
            </div>

            <button className="button is-rounded is-medium is-fullwidth is-primary">Submit</button>

            <label className="label">Location</label>
            <div className="control">
              <MapboxAutocomplete
                publicKey= {process.env.MAP_BOX_TOKEN}
                inputClass="input"
                onSuggestionSelect={suggestionSelect}
                resetSearch={false}
                onchange={handleChange}
                name="location"
              />
              {errors.location && <small>{errors.location}</small>}

            </div>


            <div>
              <button className="button is-block is-info is-medium is-fullwidth">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default GemsForm
