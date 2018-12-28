import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class PostUlNavigation extends Component {

    render() {
        if (this.props.author === sessionStorage.getItem('username')) {
            return (
                <ul>
                    <li className="action">
                        <Link className="commentsLink" to={`/details/${this.props._id}`}>Details</Link>
                    </li>
                    <li className="action">
                        <Link className="editLink" to={`/edit/${this.props._id}`}>Edit</Link>
                    </li>
                    <li className="action">
                        <Link className="deleteLink" to={`/delete/${this.props._id}`}>Delete</Link>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul>
                    <li className="action">
                        <Link className="commentsLink" to={`/details/${this.props._id}`}>Details</Link>
                    </li>
                </ul>
            );
        }
    }
}