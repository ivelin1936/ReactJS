import React, {Component} from 'react';

import userModel from '../../server/models/userModel';
import observer from "../utils/observer";
import handler from "../../server/utils/handler";

const DEFAULT_STATE = {
    username: '',
    password: '',
    repeatPass: ''
};

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;
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

        userModel.register(this.state.username, this.state.password, this.state.repeatPass)
            .then(data => data.json())
            .then(res => {
                handler.showInfo(`User ${res.username} was register successfully!`);
                observer.trigger(observer.events.loginUser, res.username);
                userModel.saveSession(res);
                this.setState(DEFAULT_STATE);
                this.props.history.push('/catalog');
            })
            .catch(err => {
                handler.handleError(err);
                this.setState(DEFAULT_STATE);
            });
    };

    render() {
        return (
            <form id="registerForm" onSubmit={this.handleSubmit}>
                <h2>Register</h2>
                <label>Username:</label>
                <input name="username" onChange={this.handleChange} type="text" value={this.state.username}/>
                <label>Password:</label>
                <input name="password" onChange={this.handleChange} type="password" value={this.state.password}/>
                <label>Repeat Password:</label>
                <input name="repeatPass" onChange={this.handleChange} type="password" value={this.state.repeatPass}/>
                <input id="btnRegister" value="Sing Up" type="submit"/>
            </form>
        )
    }
}