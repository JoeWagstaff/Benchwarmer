import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import ReviewBench from './ReviewBench.jsx';

const key = require('/home/joe/hackreactor/mvp/config.js');

const MapContainer = (props) => {
  const [selected, setSelected ] = useState({});

  const mapStyles = {
    height: "90vh",
    width: "100%",
  };

  const styles = [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#aee2e0"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#abce83"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#769E72"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7B8758"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#EBF4A4"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#8dab68"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#5B5B3F"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ABCE83"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#A4C67D"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#9BBF72"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#EBF4A4"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#87ae79"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7f2200"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            },
            {
                "weight": 4.1
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#495421"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
];

  const defaultCenter = {
    lat: 39.197594, lng: -119.933764
  }

  const onSelect = bench => {
    setSelected(bench);
    console.log(bench)
    return (<ReviewBench />)
  }

  return (
     <LoadScript
       googleMapsApiKey={key}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          options={{
            styles: styles
            }
          }
          zoom={17}
          center={defaultCenter} >
          {
            props.benches.map(bench => {
              return (
                <Marker key={bench.name}
                  position={bench.location}
                  onClick={() => onSelect(bench)}
                  icon={{
                    url: "https://i.ibb.co/j4C5shZ/tinybench.png"
                  }}
                />
              )
            })
          }
          <Marker position={defaultCenter} />
          {
            selected.location &&
            (
              <InfoWindow
                position={selected.location}
                clickable={true}
                onCloseClick={() => setSelected({})}
              >
                <ReviewBench bench={selected}/>
              </InfoWindow>
            )
          }
          </GoogleMap>
     </LoadScript>
  )
}
export default MapContainer;