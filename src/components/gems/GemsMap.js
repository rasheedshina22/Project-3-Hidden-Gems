import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAP_BOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'


class Map extends React.Component {




  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/light-v9',
      center: {lng: this.props.location.lon, lat: this.props.location.lat},
      zoom: 16
    })

    console.log('HERE are all propslook', this.props)

    //add a popup NOTE: view gem Link using needs to be updated for heroku
    const popup = new mapboxgl.Popup({offset: 20})
      .setHTML(`
      <div class="event-image">
      <img src="${this.props.gems.image}" alt="${this.props.gems.name}" />
      </div>
      <h4>${this.props.gems.name}</h4>
      <a href="https://www.google.com/maps/dir/?api=1&origin=${this.props.userLat},${this.props.userLng}&destination=${this.props.location.lat},${this.props.location.lon}" target="_blank" > Directions </a>
    `)



    const markerElement = document.createElement('div')
    markerElement.className = 'custom-marker'
    return new mapboxgl.Marker(markerElement)
      .setLngLat({lng: this.props.gems.location.lon, lat: this.props.gems.location.lat})
      .addTo(this.map)
      .setPopup(popup)
  }


  render() {
    return (
      <div className="map" ref={el => this.mapDiv = el}/>
    )
  }
}

export default Map
