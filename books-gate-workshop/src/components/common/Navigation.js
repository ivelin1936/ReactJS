import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import observer from '../utils/observer';
import LoggedInUser from "./navComponents/LoggedInUser";
import DefaultNav from "./navComponents/DefaultNav";

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };

        observer.subscribe(observer.events.loginUser, this.userLoggedIn);
    }

    userLoggedIn = (username) => {
        const name = username || '';
        this.setState({username : name})
    };

    componentDidMount() {
        this.userLoggedIn(sessionStorage.getItem('username'));
    }

    render() {
        // const isAdmin = sessionStorage.getItem('role') === 'admin';

        return (
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">Book's Gate &trade;</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {this.state.username ? <LoggedInUser/> : <DefaultNav/>}
                </div>
            </nav>
        )
    }
}