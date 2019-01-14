import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import withLoading from "../hoc/withLoading";
import BookStoreView from "../books/BookStoreView";

class Store extends Component {

    render() {
        const isAdmin = sessionStorage.getItem('role') === 'admin';
        let addBookBtn = (
            <div className="text-center">
                <Link to="/home/store/admin/addbook" className="btn btn-primary btn-xl rounded-pill mt-2">AddBook</Link>
                <br/>
                <br/>
            </div>
        );

        return (
            <section className="container">
                {isAdmin ? addBookBtn : <h3 className="h3">Browse over our collection...</h3>}
                <div className="row">
                    {this.props.data.map(b => <BookStoreView key={b._id} {...b} />)}
                </div>
                <br/>
            </section>
        )
    }
}

Store = withLoading(Store);
export default Store;