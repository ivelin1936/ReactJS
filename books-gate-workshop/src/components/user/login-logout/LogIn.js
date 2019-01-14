import React, {Component} from 'react';
import userModel from '../../../models/userModel';
import observer from "../../utils/observer";

const DEFAULT_STATE = {
    username: '',
    password: ''
};

export default class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = DEFAULT_STATE;

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const targetName = e.target.name;
        const targetValue = e.target.value;

        this.setState({
            [targetName]: targetValue
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const data = Object.assign({}, this.state);

        userModel.login(data)
            .then(data => data.json())
            .then(res => {
                if (res.error) {
                    console.log('Login failed: ' + res.error);
                    this.setState(DEFAULT_STATE);
                    return;
                }
                console.log(`Successfully logged in.`);
                userModel.saveSession(res);
                observer.trigger(observer.events.loginUser, res.username);
                this.props.history.push('/');
            });

        this.setState(DEFAULT_STATE);
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="text-uppercase">Username</label>
                    <input name="username"
                           type="text"
                           className="form-control"
                           placeholder=""
                           onChange={this.onChange}
                           value={this.state.username}/>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                    <input name="password"
                           type="password"
                           className="form-control"
                           placeholder=""
                           onChange={this.onChange}
                           value={this.state.password}/>
                </div>


                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input"/>
                        <small>Remember Me</small>
                    </label>
                    <button type="submit" className="btn btn-login btn-primary float-right">Submit</button>
                </div>
            </form>
        )
    }
}