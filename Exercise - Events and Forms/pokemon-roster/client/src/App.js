import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import SingUpForm from './components/SingUpForm';
import LoginForm from './components/LoginForm';
import LoggedPage from './components/logged-in/LoggedPage';

class App extends Component {
    constructor(props) {
        super(props);

        let route = 'register';
        if (localStorage.getItem('token')) {
            route = 'loggedIn';
        }

        this.state = {
            route: route,
            btnText: 'Login Form'
        };

        this.showAppropriateComponent = this.showAppropriateComponent.bind(this);
        this.switchLoginSingup = this.switchLoginSingup.bind(this);
        this.switchRoute = this.switchRoute.bind(this);
    }

    showAppropriateComponent() {
        if (this.state.route === 'login') {
            return <LoginForm router={this.switchRoute}/>;
        } else if (this.state.route === 'loggedIn') {
            const username = localStorage.getItem('username');
            return (
                <div>
                    <p>Welcome {username}</p>
                    <LoggedPage/>
                </div>
            );
        }
        return <SingUpForm router={this.switchRoute}/>;
    }

    switchRoute(route) {
        this.setState({
            route
        });
    }

    switchLoginSingup() {
        if (this.state.route === 'login') {
            this.setState({
                route: 'register',
                btnText: 'Login Form'
            });
        } else {
            this.setState({
                route: 'login',
                btnText: 'Register Form'
            });
        }
    }

    render() {
        return (
            <div className="App wrraper">
                <button onClick={this.switchLoginSingup} className='btn btn-link'>{this.state.btnText}</button>
                {this.showAppropriateComponent()}
            </div>
        );
    }
}

export default App;
