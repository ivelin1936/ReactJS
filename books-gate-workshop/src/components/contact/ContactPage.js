import React, {Component} from 'react';
import Navigation from "../common/Navigation";
import Footer from "../common/Footer";

import '../../styles/contact-us.css';
import Contact from "./Contact";
import SecondPagesHeader from "../common/SecondPagesHeader";

export default class ContactPage extends Component {

    //TODO.... (Contact form doesn't work, it's only static!!! make it work)

    render = () => {
        return (
            <section>
                <Navigation {...this.props}/>
                <SecondPagesHeader title="Contact Us"/><br/>
                <Contact/>
                <Footer/>
            </section>
        )
    }
}