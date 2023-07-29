import React from 'react';
import "./Weapons.css"
import Weapon from './Weapon/Weapon';

class Weapons extends React.Component {
  render() {
    return (
      <div className='buble-div hauto'>
        <h1>Weapon Performance</h1>
          <h2>Tier 1 Weapons</h2>
          <Weapon weapon="Vandal"/>
          <Weapon weapon="Phantom"/>
          <Weapon weapon="Operator"/>
          <br />
          <h2>Tier 2 Weapons</h2>
          <Weapon weapon="Odin"/>
          <Weapon weapon="Marshal"/>
          <Weapon weapon="Bulldog"/>
          <Weapon weapon="Guardian"/>
          <br />
          <h2>Tier 3</h2>
          <Weapon weapon="Judge"/>
          <Weapon weapon="Bucky"/>
          <Weapon weapon="Stinger"/>
          <Weapon weapon="Ares"/>
          <br />
          <h2>Eco Weapons</h2>
          <Weapon weapon="Clasic"/>
          <Weapon weapon="Ghost"/>
          <Weapon weapon="Shorty"/>
          <Weapon weapon="Sherif"/>
          <Weapon weapon="Frenzy"/>
      </div>
    );
  }
}

export default Weapons;