import React from 'react'
// const MapboxGeocoder = require('mapbox-gl-geocoder')
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAP_BOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'



class RegMap extends React.Component {



  componentDidUpdate() {


    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/light-v9',
      center: {lng: this.props.location.lon,lat: this.props.location.lat},
      zoom: 13
    })

    const markerElement = document.createElement('div')
    markerElement.className = 'All picgems'

    const marker = new mapboxgl.Marker(markerElement,{
      draggable: true
    })
      .setLngLat({
        lng: this.props.location.lon,
        lat: this.props.location.lat
      })
      .addTo(this.map)

    function onDragEnd() {
      const lngLat = marker.getLngLat()
      console.log(this)
      // setLocation(lngLat.bu.lat, lngLat.bu.lng)

      console.log('NEW LOCATION ON DRAG',lngLat)
    }
    marker.on('dragend', onDragEnd)
  }


  render() {
    console.log('Props location ---',this.props.location)
    return (
      <div>
        <div className="map" ref={el => this.mapDiv = el}/>
      </div>

    )
  }
}

export default RegMap
