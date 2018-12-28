import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import userModel from "../../server/models/userModel";
import handler from "../../server/utils/handler";

export default class Logout extends Component {

    logout = () => {
        userModel.logout()
            .then(res => sessionStorage.clear())
            .then(handler.showInfo(`Successful logged out.`))
            .catch(handler.handleError);
    };

    render = () => {
        this.logout();
        console.log(this.props.userLoggedIn);
        return <Redirect to='/'/>;
    }

}
