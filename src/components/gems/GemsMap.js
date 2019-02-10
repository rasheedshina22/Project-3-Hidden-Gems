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

    console.log(this.props)


    const markerElement = document.createElement('div')
    markerElement.className = 'custom-marker'
    return new mapboxgl.Marker(markerElement)
      .setLngLat({lng: this.props.location.lon, lat: this.props.location.lat})
      .addTo(this.map)
  }

  render() {
    return (
      <div className="map" ref={el => this.mapDiv = el}/>
    )
  }
}

export default Map
