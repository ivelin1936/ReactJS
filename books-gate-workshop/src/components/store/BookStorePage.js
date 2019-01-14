import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import bookModel from '../../models/bookModel';
import '../../styles/book-shop.css';

import Navigation from "../common/Navigation";
import Footer from "../common/Footer";
import Store from "./Store";
import Header from "../common/Header";
import observer from "../utils/observer";

export default class BookStorePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            data: []
        };

        observer.subscribe(observer.events.deleteBooks, this.loadData)
    }

    loadData = () => {
        bookModel.getAllBooks()
            .then(res => res.json())
            .then(response => {
                    const sortData = response
                        .sort((b1, b2) => new Date(b2._kmd.ect) - new Date(b1._kmd.ect));

                    this.receiveData(sortData);
                }
            )
            .catch(err => console.log(err));
    };

    receiveData = (data) => this.setState({data: data, isReady: true});

    componentWillMount() {
        this.loadData();
    }

    render() {
        if (!sessionStorage.getItem('authtoken')) {
            return <Redirect to='/login'/>;
        }

        const isAdmin = sessionStorage.getItem('role') === 'admin';

        return (
            <section>
                <Navigation {...this.props}/>
                {isAdmin ? <Header title="Book's Store" description='Administration Mode'/> : <Header title="Book's Store"/>}
                <Store data={this.state.data} isReady={this.state.isReady} {...this.props}/>
                {/*<Store request={bookModel.getAllBooks} changeState={this.receiveData} {...this.props}/>*/}
                <Footer/>
            </section>
        )
    }
}

