import React, {Component} from 'react';
import AddBookForm from "./AddBookForm";
import Navigation from "../common/Navigation";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default class AddBookPage extends Component {

    render() {
        return (
            <section>
                <Navigation/>
                <Header title="ADMINISTRATION"/>
                <AddBookForm {...this.props}/>
                <Footer/>
            </section>
        )
    }
}