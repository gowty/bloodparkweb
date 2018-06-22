import React, { Component } from 'react';
import '../css/custom.css';

class Navbar extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand nav-brand">
                <i className="fas fa-tint blood-icon"></i> <span>BloodPark</span>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right nav-content">
                <li><a style={{color:"#fff"}}><i className="fas fa-reply"></i> Blood Request</a></li>
                <li><a style={{color:"#fff"}}><i className="fas fa-heartbeat"></i> Become a Donor</a></li>
                <li><a style={{color:"#fff"}}><i className="fab fa-hubspot"></i> About BloodPark</a></li>
                <li><a style={{color:"#fff"}}><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
