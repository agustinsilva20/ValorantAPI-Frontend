import React from 'react';
import "./LastGames.css"
import AgentRate from './AgentRate/AgentRate';

class LastGames extends React.Component {
  render() {
    return (
      <div >
        <div className='buble-div df gap'>
              
              <div className='last-15'>
                <h3>Last 15 Games</h3>
                <h4>13W - 2L</h4>
                <h4>K.D: 1.65</h4>
                <h4>Avg Points: 250</h4>
              </div>

              <AgentRate agent='Viper'/>
              <AgentRate agent='Reyna'/>
              <AgentRate agent='Killjoy'/>
              
        </div>
        <div className='shots buble-div nomargin'>
          <h3>Victory winrate by roll</h3>
          <h4> - Sentinel: 10W 0L <span>100%</span></h4>
          <h4> - Controller: 10W 0L <span>100%</span> </h4>
          <h4> - Initiator: 10W 0L <span>100%</span></h4>
          <h4> - Duelist: 10W 0L <span>100%</span></h4>
        </div>
        <div className='shots buble-div nomargin'>
          <h3>Shots %</h3>
          <h4> - Headshot: %25</h4>
          <h4> - Bodyshot: %50</h4>
          <h4> - Legshot: %25</h4>
        </div>
      </div>
    );
  }
}

export default LastGames;