import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class AddProductToCart extends Component {

    addProduct = () => {
        const bookId = this.props.match.params.id;
        const cart = JSON.parse(localStorage.getItem('cart'));
        cart.products.push(bookId);
        localStorage.setItem('cart', JSON.stringify(cart));

        console.log('Product added successfully in cart!');

        this.props.history.push('/home/store');
    };

    render() {
        this.addProduct();
        return <Redirect to='/home/store'/>
    }
}