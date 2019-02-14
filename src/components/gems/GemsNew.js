import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'
import Flash from '../../lib/Flash'

import GemsForm from './GemsForm'


class GemsNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        image: '',
        description: '',
        location: null,
        address: ''
      },
      errors: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.suggestionSelect = this.suggestionSelect.bind(this)
  }

  handleChange({ target: { name, value } }) {
    if(name === 'location'){
      console.log('location')
    }

    const data = {...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }

  suggestionSelect(result, lat, lng, text) {
    console.log(lat, lng)
    const data = {...this.state.data,
      location: {
        lat: lat,
        lon: lng
      },
      address: result, text
    }
    const errors = { ...this.state.errors, location: '' }

    this.setState({data, errors})
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/gems', this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/gems'))
      .catch((err) => {
        Flash.setMessage('success', 'Fields Missing')
        return this.setState({errors: err.response.data})
      })
  }

  render() {
    return(
      <div className="section">

        <GemsForm
          data={this.state.data}
          errors={this.state.errors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          suggestionSelect={this.suggestionSelect}
        />

      </div>
    )
  }
}

export default GemsNew
