import React from 'react';
import "./Maps.css"
import AgentRate from '../../LastGames/AgentRate/AgentRate';

class Maps extends React.Component {
  render() {
    return (
      <div className='map-info df'>
            <h3 className='map-txt'>{this.props.map}</h3>
            <h3 className='map-txt'>16V - 6D <span>72%</span></h3>
            <div className='map-txt'>
              <h3 className='map-txt'>ATQ: <span>56%</span></h3>
              <h3 className='map-txt'>DEF: <span>58%</span></h3> 
            </div>
            <div className='map-txt'>
              <h3 className='map-txt'>Plant A: <span>56%</span></h3>
              <h3 className='map-txt'>Plant B: <span>58%</span></h3> 
            </div>
            <div className='map-txt'>
              <h3 className='map-txt'>Defuse A: <span>56%</span></h3>
              <h3 className='map-txt'>Defuse B: <span>58%</span></h3> 
            </div>
            <div className='map-txt'>
            <h3 className='map-txt'> Best Agents</h3>
            <div className='map-txt df gap'>
                <AgentRate agent="Reyna"/>
                <AgentRate agent="Raze"/>
                <AgentRate agent="Cypher"/>
            </div>
            </div>
            
      </div>
    );
  }
}

export default Maps;