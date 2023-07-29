import React from 'react';
import "./MapPerformance.css"
import Maps from "./Maps/Maps"

class MapPerformance extends React.Component {
  render() {
    return (
      <div className='buble-div hauto'>
            
            <Maps map ="Ascent"/>
            <Maps map ="Bind"/>
            <Maps map ="Split"/>
            <Maps map ="Heaven"/>
            <Maps map ="Icebox"/>
            <Maps map ="Pearl"/>
            <Maps map ="Fracture"/>
            
      </div>
    );
  }
}

export default MapPerformance;