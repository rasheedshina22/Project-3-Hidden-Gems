import React from 'react'

const GemsForm = ({ data, handleChange, handleSubmit }) => {
  return (
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
          <div className="select is-halfwidth">
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


      <button className="button is-primary">Submit</button>
    </form>
  )
}

export default GemsForm
