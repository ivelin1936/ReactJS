import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class BookMiniView extends Component {

    render() {
        return (
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">
                        <Link to="#">
                            <img className="pic-1"
                                 src={this.props.first_img} alt=""/>
                            <img className="pic-2"
                                 src={this.props.second_img} alt=""/>
                        </Link>
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
                            <li><Link to={`/user/cart/add/${this.props._id}`} data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></Link></li>
                        </ul>
                        <span className="product-new-label">New</span>
                    </div>
                    <ul className="rating">
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star disable"></li>
                    </ul>
                    <div className="product-content">
                        <h3 className="title"><Link to="#">{this.props.name}</Link></h3>
                        <p>Leo Tolstoy</p>
                        <div className="price">${(+this.props.price).toFixed(2)}
                        <span>30.00</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}