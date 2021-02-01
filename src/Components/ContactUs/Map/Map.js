import React from 'react';
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';

import './MapContainer.css';

const containerStyle = {
    width: '100%',
    height: '100%'
}

const center = {
    lat: -36.743178,
    lng: 174.725203
}

const map = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyA3vAG1Tz1ois4WhbCxADXL-DKdohH-Bns"
      })

      if(!isLoaded) return "Loading Maps";
    
      return (
        <div className="MapContainer">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={17}
            />
        </div>
      )
}

export default React.memo(map);