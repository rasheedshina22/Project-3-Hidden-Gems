import React from 'react'

const GemsForm = ({ data, handleChange, handleSubmit, error }) => {
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
            <h4>Location</h4>
            <div className="field">
              <label className="label">Lat</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Lat"
                  name="location.lat"
                  onChange={handleChange}
                  value={data.location.lat || ''}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Lon</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Lon"
                  name="location.lon"
                  onChange={handleChange}
                  value={data.location.lon || ''}
                />
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

                    <option> Pubs </option>

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
