import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import '../../styles/menu.css';

export default class Navigation extends Component {

    render() {
        return (
            <div id="menu">
                <div className="title">Navigation</div>
                {/*<NavLink className="nav" to='/' activeClassName="selected">Home</NavLink>*/}
                <NavLink className="nav" to='/catalog' activeClassName="selected">Catalog</NavLink>
                <NavLink className="nav" to="/create" activeClassName="selected">Submit Link</NavLink>
                <NavLink className="nav" to="/myPosts" activeClassName="selected">My Posts</NavLink>
            </div>
        )
    }
}