import React, {Component} from 'react';
import Navigation from "../../common/Navigation";
import Footer from "../../common/Footer";
import SecondPagesHeader from "../../common/SecondPagesHeader";
import AccountComponent from "./AccountComponent";

export default class MyAccountPage extends Component {

    render() {
        return (
            <section>
                <Navigation/>
                <SecondPagesHeader title="My Account"/>
                <AccountComponent/>
                <Footer/>
            </section>
        )
    }
}