import React from 'react';
import "./Stats.css"
import AccountData from './AccountData/AccountData';
import LastGames from './LastGames/LastGames';
import MapPerformance from './MapPerformance/MapPerformance';
import Weapons from './Weapons/Weapons';
class Stats extends React.Component {
  render() {
    return (
      <div className='stats-div'>
            <h3>MockPlayer#LAS</h3>
            <AccountData/>
            <LastGames/>
            <Weapons/>
            <MapPerformance/>
      </div>
    );
  }
}

export default Stats;