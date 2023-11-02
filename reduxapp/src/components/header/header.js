import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render(){
        return(
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark ">
                <Link className="mr-4" to="/">Star DB</Link>
                <div className="navbar-collapse" id="navbarColor02">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/people/">People</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/planets/">Planets</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/starships/">Starships</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/secret">Secret</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
        )
    }; 
}