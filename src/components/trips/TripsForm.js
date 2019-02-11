import React from 'react'
import Select from 'react-select'


const TripsForm = ({ options, data, handleChange, handleSubmit, handleMultiChange, error }) => {
  return (

    <div className="container">
      <div className="column is-6 is-offset-3 ">

        <h3 className="title has-text-centered">Create Your Trip</h3>
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
              <label className="label">Category</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Category"
                  name="category"
                  onChange={handleChange}
                  value={data.category || ''}
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
              <label className="label">Gems</label>
              <div className="control">
                <Select
                  className="multi"
                  isMulti
                  options={options}
                  // value={data.gems || ''}

                  onChange={handleMultiChange}

                />
              </div>
            </div>

            <button className="button is-primary is-block is-info is-medium is-fullwidth">Create Trip</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TripsForm
