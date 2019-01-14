import React, {Component} from 'react';

import Navigation from "../../common/Navigation";
import Footer from "../../common/Footer";
import ChoiceUsSection from "../../pages/ChoiceUsSection";
import Singup from "./Singup";
import '../../../styles/login.css';

export default class SingUpPage extends Component {

    render() {
        return (
            <section>
                <Navigation/>

                <header className="masthead text-center text-white">
                    <h1>Sing up</h1>
                    <div className="masthead-content">
                        <div className="container">
                            <Singup {...this.props}/>
                        </div>
                    </div>
                </header>

                <ChoiceUsSection/>
                <Footer/>
            </section>
        )
    }
}