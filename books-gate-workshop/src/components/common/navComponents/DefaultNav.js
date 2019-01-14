import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class DefaultNav extends Component {

    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/singup">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Log In</Link>
                    </li>
                </ul>
            </div>
        )
    }
}