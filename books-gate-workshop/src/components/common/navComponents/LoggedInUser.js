import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class LoggedInUser extends Component {

    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/home/store">BookStore</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/home/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/home/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/home/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/user/account">My Account</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">LogOut</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to=""> | </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/user/wishlist" title="Wish List"><i className="fa fa-stack-exchange"></i></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/user/cart" title="My Cart"><i className="fa fa-shopping-cart"></i></Link>
                    </li>
                </ul>
            </div>
        )
    }
}