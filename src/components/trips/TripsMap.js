import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.MAP_BOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'


class TripMap extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/dark-v9',
      zoom: 12
    })
    this.props.gems.map(gem => {
      const latitude = gem.location.lat
      const longitude = gem.location.lon
      const name = gem.name
      const desc = gem.description
      const image = gem.image
      const type = gem.category

      //add a popup
      const popup = new mapboxgl.Popup({offset: 20})
        .setHTML(`
        <div class="event-image">
        <img src="${image}" alt="${name}" />
        </div>
        <h4>${name}</h4>
        <p>${desc}</p>
        <a href="https://www.google.com/maps/dir/?api=1&origin=${this.props.userLat},${this.props.userLng}&destination=${latitude},${longitude}" target="_blank" > Directions </a>
        `)



      // Added type to be category so can be diffrent colors for Category
      const markerElement = document.createElement('DIV')
      markerElement.className = `${type}`
      return new mapboxgl.Marker(markerElement)
        .setLngLat({ lat: latitude, lng: longitude })
        .addTo(this.map)
        .setPopup(popup)
    })
  }

  render() {
    return (
      <div className="map" ref={el => this.mapDiv = el}/>
    )
  }
}

export default TripMap
