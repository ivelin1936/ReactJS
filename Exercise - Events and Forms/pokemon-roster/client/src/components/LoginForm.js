import React, {Component} from 'react';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                email: '',
                password: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch(
            'http://localhost:5000/auth/login',
            {
                method: 'POST',
                body: JSON.stringify(this.state.form),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(data => data.json())
            .then(response => {
                if (response.success && response.token) {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('username', response.user.name);

                    this.props.router('loggedIn');
                }
            })
            .catch(err => console.log('Error: ' + err));
    }

    handleChange(event) {
        const name = event.target.dataset.name;
        const value = event.target.value;

        const form = this.state.form;
        form[name] = value;

        this.setState({
            form
        });
    }

    render() {
        return (
            <form className="SingUpForm">
                <h1>Login Form</h1>
                <div className="form-group">
                    <label htmlFor="input-email">Email address</label>
                    <input data-name="email" type="email" onChange={this.handleChange} className="form-control"
                           id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="input-password">Password</label>
                    <input data-name="password" type="password" onChange={this.handleChange} className="form-control"
                           id="exampleInputPassword" placeholder="Password"/>
                </div>
                <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        );
    }
}