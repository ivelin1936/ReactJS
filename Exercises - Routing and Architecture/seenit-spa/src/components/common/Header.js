import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../../styles/header.css';
import observer from "../utils/observer";

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };

        observer.subscribe(observer.events.loginUser, this.userLoggedIn);
    }

    userLoggedIn = username => this.setState({username});

    componentDidMount() {
        this.userLoggedIn(sessionStorage.getItem('username'));
    }

    render() {
        const loggedIn = (
            <div id="profile">
                <span id="username">Hello, {this.state.username}</span>|
                <Link to="/logout" id="linkMenuLogout">logout</Link>
            </div>
        );

        return (
            <header>
                <span className="logo">☃</span><span className="header">SeenIt</span>
                {this.state.username ? loggedIn : null}
            </header>
        )
    }
}