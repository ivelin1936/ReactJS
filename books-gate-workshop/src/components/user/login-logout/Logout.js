import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import observer from '../../utils/observer';
import userModel from '../../../models/userModel';

export default class Logout extends Component {

    logout = () => {
        userModel.logout()
            .then(sessionStorage.clear())
            .then(observer.trigger(observer.events.loginUser, ''))
            .then(localStorage.clear())
            .then(console.log(`Successful logged out.`))
            .catch(err => console.log(err));
    };

    render = () => {
        this.logout();
        return <Redirect to='/'/>;
    }
}