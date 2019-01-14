import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../../styles/products-cart-style.css';
import ProductComponent from "./ProductComponent";
import bookModel from '../../../models/bookModel';

export default class CartProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            total: 0
        };
    }

    fetchProducts = (productsIds) => {
        let promisesArr = [];
        productsIds.forEach(id => {
            promisesArr.push(
                bookModel.getById(id)
                    .then(res => res.json())
            );
        });

        return Promise.all(promisesArr);
    };

    componentDidMount() {
        const cart = JSON.parse(localStorage.getItem('cart'));
        this.fetchProducts(cart.products)
            .then(products => {
                const total = products
                    .map(p => +p.price)
                    .reduce((acc, cur) => acc + cur)
                    .toFixed(2);

                this.setState({products, total})
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <table id="cart" className="table table-hover table-condensed">
                    <thead>
                    <tr>
                        <th className="th1">Product</th>
                        <th className="th2">Price</th>
                        <th className="th3">Quantity</th>
                        <th className="th4 text-center">Subtotal</th>
                        <th className="th5"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.products.map(b => <ProductComponent key={b._id} {...b} />)}
                    </tbody>
                    <tfoot>
                    <tr className="visible-xs">
                        <td className="text-center"><strong>Total {this.state.total}</strong></td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="/home/store" className="btn btn-warning">
                                <i className="fa fa-angle-left"></i><i className="fa fa-angle-left"></i> Continue Shopping
                            </Link>
                        </td>
                        <td colSpan="2" className="hidden-xs"></td>
                        <td className="hidden-xs text-center"><strong>Total ${this.state.total}</strong></td>
                        <td>
                            <Link to="#" className="btn btn-success btn-block">
                                Checkout <i className="fa fa-angle-right"></i><i className="fa fa-angle-right"></i>
                            </Link>
                        </td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}