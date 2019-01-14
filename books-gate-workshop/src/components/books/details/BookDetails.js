import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class BookDetails extends Component {

    //TODO... Buy form doesn't work!

    render() {
        const isAdmin = sessionStorage.getItem('role') === 'admin';
        const editBtn = (
            <section className="administration">
                <Link to={`/books/edit/${this.props.data._id}`} className="btn btn-primary btn-lg rounded-pill mt-5">Edit</Link>
                <Link to={`/books/delete/${this.props.data._id}`} className="btn btn-primary btn-lg rounded-pill mt-5">Delete</Link>
            </section>
        );

        const inStock = this.props.data.inStock && +this.props.data.inStock ? 'In Stock' : 'Out Stock';
        const inStockClassName = this.props.data.inStock && +this.props.data.inStock ? 'inStock' : 'outStock';

        return (
            <section className="book-details">
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-1">
                        <figure>
                            <img className="book-img"
                                 src={this.props.data.first_img}
                                 alt={this.props.data.second_img}/>
                            {isAdmin ? editBtn : null}
                        </figure>
                    </div>


                    <div className="col-sm-7 sm-margin-b-50">
                        <article>
                            <h2>{this.props.data.name}</h2>
                            <h6>By {this.props.data.author}</h6>
                            <span>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                            </span>
                            <span>(customer rating)</span>
                            <p>
                                <span>Genre:&emsp;</span><Link to="#">{this.props.data.genre}</Link>
                                <br/>
                                Availability:&emsp;<span className={inStockClassName}>{inStock}</span>
                            </p>

                            <div className="praise">
                                <p className="quote">{this.props.data.praise}</p>
                            </div>

                        </article>
                    </div>

                    <div className="buy-box">
                        <h4>${(+this.props.data.price).toFixed(2)}</h4>
                        <form>
                            <input type="number" min="0" max="15" value="1"/>
                            <Link to={`/user/cart/add/${this.props.data._id}`}><button><i className="fa fa-shopping-cart" aria-hidden="true"></i>&emsp;ADD TO CART
                            </button></Link>
                        </form>
                    </div>
                </div>

            </section>
        )
    }
}