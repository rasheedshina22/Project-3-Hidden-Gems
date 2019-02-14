import React from 'react'
import mapboxgl from 'mapbox-gl'
// import { Link, withRouter } from 'react-router-dom'

mapboxgl.accessToken = process.env.MAP_BOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {

  componentDidMount() {
    console.log('props there on Mount', this.props)

    // Creates bounds
    const bounds = new mapboxgl.LngLatBounds()

    // MAP Component new map made
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/light-v9'
    })

    // Add geolocate control to the map.
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }))

    this.markers = this.props.gems.map(gem => {
      const { lat, lon } = gem.location
      const type = gem.category

      bounds.extend([lon, lat])

      // Added type to be category so can be diffrent colors for Category
      const markerElement = document.createElement('DIV')
      markerElement.className = `All ${type}`

      return new mapboxgl.Marker(markerElement)
        .setLngLat({ lat: lat, lng: lon })
        .addTo(this.map)

    })

    if(this.props.type !== 'gem'){
      this.map.fitBounds(bounds, { padding: 50 })
    } else {
      const { lat, lon } = this.props.gems[0].location
      this.map.flyTo({
        center: { lat: lat-0.001, lng: lon },
        zoom: 15
      })
    }
    this.generatePopups()
  }

  componentDidUpdate() {
    if(!this.popupsGenerated) this.generatePopups()

  }

  generatePopups() {
    if(!this.props.userLocation) return false
    this.popupsGenerated = true
    const { lat, lng } = this.props.userLocation

    this.props.gems.map((gem, index) => {

      const { location, name, image, _id } = gem

      //add a popup
      // NOTE: view gem Link needs to be updated for heroku
      this.markers[index].setPopup(
        this.popup = new mapboxgl.Popup({offset: 20})
          .setHTML(
            `
              <div class="event-image">
              <img src="${image}" alt="${name}" />
              </div>
              <h4>${name}</h4>
              <a href="https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${location.lat},${location.lon}" target="_blank" > Directions </a>
            `)
      )
      if(this.props.type === 'gem'){
        this.popup.addTo(this.map)
      }else{
        this.popup.setHTML(`
          <div class="event-image">
          <img src="${image}" alt="${name}" />
          </div>
          <h4>${name}</h4>
          <a href="https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${location.lat},${location.lon}" target="_blank" > Directions </a>
          <a href="${process.env.PATH}/gems/${_id}">View Gem</a>
          `)
      }
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

export default Map
