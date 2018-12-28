import React, {Component} from 'react';

import userModel from '../../server/models/userModel';
import observer from "../utils/observer";
import handler from "../../server/utils/handler";

const DEFAULT_STATE = {
    username: '',
    password: ''
};

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        // let newState = this.state;
        // newState[fieldName] = fieldValue;
        // this.setState(newState);

        this.setState({[fieldName]: fieldValue});
    };

    handleSubmit = event => {
        event.preventDefault();

        userModel.login(this.state.username, this.state.password)
            .then(data => data.json())
            .then(res => {
                if (res.error) {
                    handler.handleError(res);
                    this.setState(DEFAULT_STATE);
                    return;
                }

                handler.showInfo(`Successfully logged in.`);
                observer.trigger(observer.events.loginUser, res.username);
                userModel.saveSession(res);
                this.setState(DEFAULT_STATE);
                this.props.history.push('/catalog');
            });
    };

    render() {
        return (
            <form id="loginForm" onSubmit={this.handleSubmit}>
                <h2>Sign In</h2>
                <label>Username:</label>
                <input name="username" onChange={this.handleChange} type="text" value={this.state.username}/>
                <label>Password:</label>
                <input name="password" onChange={this.handleChange} type="password" value={this.state.password}/>
                <input id="btnLogin" value="Sign In" type="submit"/>
            </form>
        )
    }
}