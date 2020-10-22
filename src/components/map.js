import React from 'react'
import GoogleMapReact from 'google-map-react'
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text }) => (
    <div className="pin">
      {/* <Icon icon={locationIcon} /> */}
      <p>{text}</p>
    </div>
  )

  const Map = ({ location, zoomLevel }) => (
    <div>
      
      <div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'd17413c989ca6af5' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

export default Map