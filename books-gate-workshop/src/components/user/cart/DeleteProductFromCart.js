import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class DeleteProductFromCart extends Component {

    addProduct = (cartId, data) => {
        const bookId = this.props.match.params.id;
        const cart = JSON.parse(localStorage.getItem('cart'));

        let productIndex = cart.products.indexOf(bookId);
        cart.products.splice(productIndex, 1);

        localStorage.setItem('cart', JSON.stringify(cart));

        console.log('Product removed successfully from cart!');
    };

    render() {
        this.addProduct();
        return <Redirect to='/user/cart'/>
    }
}