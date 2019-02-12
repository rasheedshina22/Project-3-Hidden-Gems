import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAP_BOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'


class Map extends React.Component {


  componentDidMount() {
    console.log('IN COMPONENT DID MOUNT', this.props.userLocation)
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/light-v9',
      center: {lng: this.props.location.lon, lat: this.props.location.lat},
      zoom: 16
    })

    const markerElement = document.createElement('div')
    markerElement.className = 'Gem Gem:after'

    this.marker = new mapboxgl.Marker(markerElement)
      .setLngLat({
        lng: this.props.gem.location.lon,
        lat: this.props.gem.location.lat
      })
      .addTo(this.map)

    this.generatePopups()
  }



  componentDidUpdate() {
    if(!this.popupsGenerated) this.generatePopups()
  }
  generatePopups() {
    if(!this.props.userLocation) return false
    this.popupsGenerated = true
    if(!this.props.userLocation) return false
    const { lat, lng } = this.props.userLocation

    this.popup = new mapboxgl.Popup({offset: 20 })
      .setHTML(`
        <div class="event-image">
        <img src="${this.props.gem.image}" alt="${this.props.gem.name}" />
        </div>
        <h4>${this.props.gem.name}</h4>
        <a href="https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${this.props.location.lat},${this.props.location.lon}" target="_blank" > Directions </a>
      `)
      .addTo(this.map)

    console.log('inside componentDidUpdate',this.props.userLocation)


    this.marker.setPopup(this.popup)
  }


  render() {
    return (
      <div className="map" ref={el => this.mapDiv = el}/>
    )
  }
}

export default Map
