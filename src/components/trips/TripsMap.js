import React from 'react'
import mapboxgl from 'mapbox-gl'
// import { Link, withRouter } from 'react-router-dom'


mapboxgl.accessToken = process.env.MAP_BOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'


class TripMap extends React.Component {

  componentDidMount() {

    let totalLat = 0
    let totalLng = 0

    // Default centre
    this.props.gems.forEach(gem => {
      totalLat += parseFloat(gem.location.lat)
      totalLng += parseFloat(gem.location.lon)
    })
    const averageLat = totalLat / this.props.gems.length
    const averageLng = totalLng / this.props.gems.length

    // Creates bounds
    const bounds = this.props.gems.map(gem => {
      return [gem.location.lon, gem.location.lat]
    })

    // MAP Component new map made
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      center: {lng: averageLng, lat: averageLat },
      style: 'mapbox://styles/mapbox/light-v9'
    })
    this.map.fitBounds(bounds,{ padding: 120 })

    // Add geolocate control to the map.
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }))

    this.markers = this.props.gems.map(gem => {
      const latitude = gem.location.lat
      const longitude = gem.location.lon
      const type = gem.category

      // Added type to be category so can be diffrent colors for Category
      const markerElement = document.createElement('DIV')
      markerElement.className = `All ${type}`

      return new mapboxgl.Marker(markerElement)
        .setLngLat({ lat: latitude, lng: longitude })
        .addTo(this.map)

    })
  }


  componentDidUpdate() {
    console.log('DID UPDATE!!!!!!')
    if(!this.props.userLocation) return false
    const { lat, lng } = this.props.userLocation


    this.props.gems.map((gem, index) => {
      console.log(gem)

      const { location, name, image, _id } = gem

      //add a popup NOTE: view gem Link using needs to be updated for heroku

      this.markers[index].setPopup(
        new mapboxgl.Popup({offset: 20})
          .setHTML(
            `
              <div class="event-image">
              <img src="${image}" alt="${name}" />
              </div>
              <h4>${name}</h4>
              <a href="https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${location.lat},${location.lon}" target="_blank" > Directions </a>
              <a href="http://localhost:8000/gems/${_id}">View Gem</a>
            `
          )
      )
    })
  }

  render() {
    return (

      <div>
        <div className='map' ref={mapDiv => this.mapDiv = mapDiv}></div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default TripMap
