import React, {Component} from 'react';
import ErrorBoundary from "./higher-order-components/ErrorBoundary";
import Article from "./components/Article";
import RegisterForm from "./components/RegisterForm";
import Navigation from "./components/Navigation";

import './App.css';
import './styles/warning.css';
import BoundForm from "./components/BoundForm";

/** Simulate someone API for requests / only will log the date for the current example */
function onSubmitLogin(data, e) {
    console.log(data);
}

class App extends Component {
    render() {
        return (
            <section>
                <ErrorBoundary>
                    <Article/>
                    <RegisterForm/>
                    <Navigation/>
                </ErrorBoundary>

                <BoundForm onSubmit={onSubmitLogin}>
                    Username:
                    <input name="username"/>
                    Password:
                    <input name="password" type="password"/>
                    <input type="submit" value="Login"/>
                </BoundForm>

            </section>
        );
    }
}

export default App;
