import React, {Component} from 'react';
import Navigation from "../common/Navigation";
import Header from "../common/Header";
import Footer from "../common/Footer";

import EditBookForm from "./EditBookForm";

export default class EditBookPage extends Component {

    render() {
        return (
            <section>
                <Navigation/>
                <Header title="ADMINISTRATION"/>
                <EditBookForm bookId={this.props.match.params.id} {...this.props}/>
                <Footer/>
            </section>
        )
    }
}