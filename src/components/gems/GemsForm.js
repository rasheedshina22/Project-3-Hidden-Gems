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

      <div className="field">
        <label className="label">Location</label>
        <div className="control">
          <input
            className="input"
            placeholder="Location"
            name="location"
            onChange={handleChange}
            value={data.location || ''}
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
