import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

import GemsForm from './GemsForm'


class GemsNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        image: '',
        description: '',
        location: {
          lat: '',
          lon: ''
        },
        address: ''
      },
      error: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.suggestionSelect = this.suggestionSelect.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = {...this.state.data, [name]: value }
    const error = null
    this.setState({ data, error })
  }

  suggestionSelect(result, lat, lng, text) {
    console.log(result, lat, lng, text)
    const data = {...this.state.data,
      location: {
        lat: lat,
        lon: lng
      },
      address: result, text
    }
    this.setState({data})
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
          suggestionSelect={this.suggestionSelect}
        />

      </div>
    )
  }
}

export default GemsNew
