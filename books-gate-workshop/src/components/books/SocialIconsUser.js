import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class SocialIconsUser extends Component {

    render() {
        return (
            <ul className="social">
                <li>
                    <Link to={`/books/details/${this.props._id}`} data-tip="Quick View">
                        <i className="fa fa-search"></i>
                    </Link>
                </li>
                <li>
                    <Link to="" data-tip="Add to Wishlist">
                        <i className="fa fa-stack-exchange"></i>
                    </Link>
                </li>
                <li>
                    <Link to={`/user/cart/add/${this.props._id}`} data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart"></i>
                    </Link>
                </li>
            </ul>
        )
    }
}