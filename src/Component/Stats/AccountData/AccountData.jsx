import React from 'react';
import "./Buble.css"

class AccountData extends React.Component {
  render() {
    return (
      <div className='buble-div df'>
            
              <img className='rank-logo' src="./src/Ranks/radiant.svg" alt="" />
           
            <div className='current-stats'>
              <h2>Current Rank: <span>Radiant</span></h2>
              <h2>Rank points: <span>100</span></h2>
              <h3>Season winrate: 80V 25D <span>76%</span></h3>
            </div>
            
      </div>
    );
  }
}

export default AccountData;