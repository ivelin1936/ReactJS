import React, {Component} from 'react';

export default class SingUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                name: '',
                email: '',
                password: '',
                // confirmPassword: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch(
            'http://localhost:5000/auth/signup',
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
                this.props.router('login');
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
                <h1>SingUp Form</h1>
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
                    <label htmlFor="input-username">Username</label>
                    <input data-name="name" type="text" onChange={this.handleChange} className="form-control"
                           id="exampleInputUsername" placeholder="Username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="input-password">Password</label>
                    <input data-name="password" type="password" onChange={this.handleChange} className="form-control"
                           id="exampleInputPassword" placeholder="Password"/>
                </div>
                {/*<div className="form-group">*/}
                    {/*<label htmlFor="input-confirmPassword">Confirm Password</label>*/}
                    {/*<input data-name="confirmPassword" type="password" onChange={this.handleChange}*/}
                           {/*className="form-control"*/}
                           {/*id="exampleInputConfirmPassword" placeholder="Confirm Password"/>*/}
                {/*</div>*/}
                <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        );
    }
}