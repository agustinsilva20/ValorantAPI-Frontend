import React from 'react';
import "./Agent-Rate.css"

class AgentRate extends React.Component {
  render() {
    return (
      <div className='dfc'>
            <img src={`/src/Agentes/${this.props.agent}.webp`} alt="" className='agente-img'/>
            <div>
              <h5>Pick: 5 - <span>33%</span></h5>
              <h5>W5 - 0L<br /><span>W: 100%</span></h5>
            </div>
      </div>
    );
  }
}

export default AgentRate;