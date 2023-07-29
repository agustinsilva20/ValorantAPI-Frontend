import React from 'react';
import "./login.css"

class Login extends React.Component {
  render() {
    return (
      <div>
        <div className='login' onClick={this.props.setShowing.bind(this,"stats")}>
          <p>Login with Riot ID</p>
        </div>
        <p className='public-profile'>By login in you accept making your profile public</p>
      </div>
    );
  }
}

export default Login;