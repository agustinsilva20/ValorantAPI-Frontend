
import React from 'react';
import "./Home.css"
import Login from './Login/Login';

class Home extends React.Component {
  // El método "render" es obligatorio en un componente de clases.
  render() {
    return (
        <div className="home">
          <div className ="opaco">
            <div class="logo">
                <h1 className="titulo"><span>PuRe</span> Data Analytics</h1>
                <p className='subtitulo'>Valorant PRO tool for analyzing your games!</p>
            </div>
            <Login setShowing={this.props.setShowing}/>
          </div>
        </div>

    );
  }
}

export default Home;