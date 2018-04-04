import React, { Component } from 'react';
import '../css/custom.css';

class Navbar extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand nav-brand" href="#">
                <i class="fas fa-tint blood-icon"></i> <span>BloodPark</span>
              </a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav navbar-right nav-content">
                <li><a href="#" style={{color:"#fff"}}><i class="fas fa-reply"></i> Blood Request</a></li>
                <li><a href="#" style={{color:"#fff"}}><i class="fas fa-heartbeat"></i> Become a Donor</a></li>
                <li><a href="#" style={{color:"#fff"}}><i class="fab fa-hubspot"></i> About BloodPark</a></li>
                <li><a href="#" style={{color:"#fff"}}><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
