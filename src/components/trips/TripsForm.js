import React from 'react'
import Select from 'react-select'


const TripsForm = ({ options, data, handleChange, handleSubmit }) => {
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

          <Select className="multi" isMulti
            options={options} />

        </div>
      </div>


      <button className="button is-primary">Submit</button>
    </form>
  )
}

export default TripsForm
