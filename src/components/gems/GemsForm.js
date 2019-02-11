import React from 'react'
import MapboxAutocomplete from 'react-mapbox-autocomplete'



const GemsForm = ({ data, handleChange, handleSubmit, error, suggestionSelect }) => {
  return (

    <div className="container">
      <div className="column is-6 is-offset-3 ">

        <h3 className="title has-text-centered">Add Your Gem</h3>
        {error && <div className="notification is-danger">{error}</div>}
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
              </div>
            </div>


            <label className="label">Location</label>
            <div className="control">
              <MapboxAutocomplete
                publicKey= {process.env.MAP_BOX_TOKEN}
                inputClass="input"
                onSuggestionSelect={suggestionSelect}
                resetSearch={false}/>
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

            <button className="button is-block is-info is-medium is-fullwidth">Submit</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default GemsForm
