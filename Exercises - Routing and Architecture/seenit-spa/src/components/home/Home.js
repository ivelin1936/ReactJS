import React, {Component} from 'react';
import LoginForm from "../user/LoginForm";

import '../../styles/submit.css';
import RegisterForm from "../user/RegisterForm";
import About from "./About";

export default class Home extends Component {

    render = () => {
        return (
            <section id="viewWelcome">
                <div className="welcome">
                    <div className="signup">
                        <LoginForm {...this.props}/>
                        <RegisterForm {...this.props}/>
                    </div>
                    <About/>
                </div>
            </section>
        )
    }
}