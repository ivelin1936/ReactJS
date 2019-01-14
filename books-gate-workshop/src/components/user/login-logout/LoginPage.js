import React, {Component} from 'react';

import Navigation from "../../common/Navigation";
import Footer from "../../common/Footer";
import ChoiceUsSection from "../../pages/ChoiceUsSection";
import LogIn from "./LogIn";
import '../../../styles/login.css';

export default class LoginPage extends Component {

    render() {
        return (
            <section>
                <Navigation/>

                <header className="masthead text-center text-white">
                    <h1>Login</h1>
                    <div className="masthead-content">
                        <div className="container">
                            <LogIn {...this.props}/>
                        </div>
                    </div>
                </header>

                <ChoiceUsSection/>
                <Footer/>
            </section>
        )
    }
}