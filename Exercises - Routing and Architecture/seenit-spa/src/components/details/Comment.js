import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Comments extends Component {
    render() {
        const submittedTime = this.props.calcTime(this.props._kmd.ect);
        let infoDiv;
        if (this.props.author === sessionStorage.getItem('username')) {
            infoDiv = (
                <div className="info">
                    submitted {submittedTime} ago by {this.props.author} | <Link
                    to={`/delete/comments/${this.props._id}`} className="deleteLink">delete</Link>
                </div>
            )
        } else {
            infoDiv = (
                <div className="info">
                    submitted {submittedTime} ago by {this.props.author}
                </div>
            )
        }

        return (
            <article className="post post-content">
                <p>{this.props.content}</p>
                {infoDiv}
            </article>
        )
    }
}