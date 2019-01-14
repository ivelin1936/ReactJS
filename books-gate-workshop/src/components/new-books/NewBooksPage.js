import React, {Component} from 'react';
import '../../styles/book-shop.css';
import bookModel from '../../models/bookModel';
import NewBooksComponent from "./NewBooksComponent";

export default class NewBooksPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            books: []
        };
    }

    componentDidMount = () => {
       bookModel.getAllBooks()
           .then(res => res.json())
            .then(response => {
                 const sortData = response
                     .sort((b1, b2) => new Date(b2._kmd.ect) - new Date(b1._kmd.ect))
                     .slice(0, 4);

                    this.setState({
                        isReady: true,
                        books: sortData
                    })
                }
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <NewBooksComponent data={this.state.books} isReady={this.state.isReady}/>
        )
    }
}