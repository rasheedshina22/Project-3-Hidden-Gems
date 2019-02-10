import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.MAP_BOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'


class TripMap extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      center: {lng: -0.0793599, lat: 51.5134382 },
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: 12
    })

    // Add geolocate control to the map.
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }))


    console.log('HERE are props (unsorted)', this.props.gems)


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

      console.log('THERE data is flowing down', gem.location.lon)

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

      <div>
        <div className='map' ref={mapDiv => this.mapDiv = mapDiv}></div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default TripMap
