import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

import GemsForm from './GemsForm'

class GemsNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        location: {
          lat: '',
          lon: ''

        }

      },
      error: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    if(name.includes('location')){
      const data = {...this.state.data, location: { ...this.state.data.location, [name.split('.')[1]]: value }  }
      const error = null
      this.setState({ data, error })
    } else {
      const data = {...this.state.data, [name]: value }
      const error = null
      this.setState({ data, error })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/gems', this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/gems'))
      .catch(() => this.setState({ error: 'An error occured' }))
  }

  render() {
    return(
      <div className="section">

        <GemsForm
          data={this.state.data}
          error={this.state.error}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

      </div>
    )
  }
}

export default GemsNew
