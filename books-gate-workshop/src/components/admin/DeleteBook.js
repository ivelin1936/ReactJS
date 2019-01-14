import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import bookModel from '../../models/bookModel';
import observer from "../utils/observer";

export default class DeleteBook extends Component {

    removeBook = () => {
        const bookId = this.props.match.params.id;

        bookModel.remove(bookId)
            .then(res => {
                console.log('Successfully removed!');
                observer.trigger(observer.events.deleteBooks)
            })
            .catch(err => console.log(err));
    };

    render = () => {
        this.removeBook();
        return <Redirect to='/home/store'/>;
    }
}