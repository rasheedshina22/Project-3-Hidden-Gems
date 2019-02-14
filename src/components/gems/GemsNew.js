import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'
// import RegMap from '../common/RegMap'
import GemsForm from './GemsForm'



class GemsNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        image: '',
        description: '',
        userLocation: null,
        address: '',
        location: {
          lat: 51.5327045,
          lon: -0.1507498
        }
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
    console.log('THis is lat lng of suggestionSelect',lat, lng)
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
      .catch((err) => this.setState({errors: err.response.data}))
  }


  componentDidMount() {
    console.log('IT"S HERE USER LOCATION!',this.state.userLocation)

    // also get the user location...
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log('LOCATION FOUND')
        this.setState({
          userLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      })
    }
  }
  render() {
    console.log('this is GemsNEW state---', this.state.data)

    return(
      <div className="section">

        <GemsForm
          data={this.state.data}
          errors={this.state.errors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          suggestionSelect={this.suggestionSelect}
          location={location}
          userLocation={this.state.userLocation}
        />



      </div>
    )
  }
}

export default GemsNew
