import React from 'react';
import "./Weapon.css"

class Weapon extends React.Component {
  render() {
    return (
      <div className='dfc'>
          <h3> - {this.props.weapon}: K.D: <span>1.1</span>  HS : <span>75%</span></h3>
      </div>
    );
  }
}

export default Weapon;