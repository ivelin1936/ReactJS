import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class SocialIconsAdmin extends Component {

    render() {
        return (
            <ul className="social">
                <li>
                    <Link to={`/books/details/${this.props._id}`} data-tip="Quick View">
                        <i className="fa fa-search"></i>
                    </Link>
                </li>
                <li>
                    <Link to={`/books/edit/${this.props._id}`} data-tip="Edit">
                        <i className="fa fa-edit"></i>
                    </Link>
                </li>
                <li><Link to={`/books/delete/${this.props._id}`} data-tip="Delete"><i className="fa fa-times"></i></Link></li>
            </ul>
        )
    }
}