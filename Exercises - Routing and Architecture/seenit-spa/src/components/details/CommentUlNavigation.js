import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class CommentUlNavigation extends Component {
    render() {
        if (this.props.author === sessionStorage.getItem('username')) {
            return (
                <ul>
                    <li className="action">
                        <Link className="editLink" to={`/edit/${this.props.id}`}>edit</Link>
                    </li>
                    <li className="action">
                        <Link className="deleteLink" to={`/delete/${this.props.id}`}>delete</Link>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul></ul>
            )
        }
    }
}