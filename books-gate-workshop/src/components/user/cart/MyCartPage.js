import React, {Component} from 'react';
import Navigation from "../../common/Navigation";
import Footer from "../../common/Footer";
import SecondPagesHeader from "../../common/SecondPagesHeader";
import CartProducts from "./CartProducts";

export default class MyCartPage extends Component {

    render() {
        return (
            <section>
                <Navigation/>
                <SecondPagesHeader title="Cart"/>
                <CartProducts {...this.props}/>
                <Footer/>
            </section>
        )
    }
}