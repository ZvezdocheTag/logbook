import React from 'react';
import { Map, Marker, Popup, TileLayer, Polyline, Polygon } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'

L.Icon.Default.imagePath = '.';
// OR
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
const sfdu ={

  position: 'relative',
  width: "100%",
  height: '400px',
  overflow: 'hidden'
  }
  const TravelMap = (props) => (
    <div style={sfdu}>
      <Map center={props.coords[0]} zoom={props.zoom} style={{co: 'static !important'}}>
          <TileLayer style={{color: 'blue'}}
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          {
            props.coords.map((item, i) => (
              <Marker position={item} key={i}>
                <Popup>
                  <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                </Popup>
              </Marker>
            ))
          }
    
          <Polyline positions={props.positionsLine} style={{color: 'red'}}>
        </Polyline>
      </Map>
    </div>
    )

    export default TravelMap;