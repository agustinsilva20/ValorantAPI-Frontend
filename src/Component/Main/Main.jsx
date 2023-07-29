import React from 'react';
import "./main.css"
import Home from '../Home/Home';
import Stats from '../Stats/Stats';

class Main extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {showing:"home"}
  }

  setShowing = (value)=>{
    console.log("click")
    this.setState({showing:value});
  };

  render() {
    return (
        <div className = "body">
        {this.state.showing === "home"? <Home setShowing={this.setShowing}/>: null}
        {this.state.showing === "stats"? <Stats/>: null}
        
        </div>
  
    );
  }
}

export default Main;