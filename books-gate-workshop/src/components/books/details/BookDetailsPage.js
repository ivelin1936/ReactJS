import React, {Component} from 'react';
import Navigation from "../../common/Navigation";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import BookDetails from "./BookDetails";
import BookDetailsSummary from "./BookDetailsSummary";
import BookDetailsAuthor from "./BookDetailsAuthor";

import '../../../styles/book-details.css';
import bookModel from '../../../models/bookModel';

const DEFAULT_STATE = {
    author: '',
    cover: '',
    description: '',
    first_img: '',
    language: '',
    name: '',
    pages: '',
    price: '',
    publisher: '',
    second_img: '',
    author_img: '',
    about_author: '',
    inStock: ''
};

export default class BookDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;
    }

    componentDidMount() {
        const bookId = this.props.match.params.id;

        bookModel.getById(bookId)
            .then(res => res.json())
            .then(res => this.setState({ ...res }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <section>
                <Navigation/>
                <Header title={this.state.name}/>

                <section className="mainDiv">
                    <BookDetails data={this.state} {...this.props}/>
                    <BookDetailsSummary data={this.state}/>
                    <BookDetailsAuthor data={this.state}/>
                </section>

                <Footer/>
            </section>
        )
    }
}