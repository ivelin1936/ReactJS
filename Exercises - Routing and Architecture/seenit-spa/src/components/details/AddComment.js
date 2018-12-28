import React, {Component} from 'react';

import '../../styles/submit.css';
import commentsModel from "../../server/models/commentsModel";
import handler from "../../server/utils/handler";

const DEFAULT_STATE = {
    author: '',
    content: '',
    postId: ''
};

export default class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: sessionStorage.getItem('username'),
            content: '',
            postId: this.props.match.params.id
        };
    }

    handleChange = event => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        this.setState({[fieldName]: fieldValue});
    };

    handleSubmit = event => {
        event.preventDefault();

        commentsModel.add(this.state)
            .then(res => res.json())
            .then(res => {
                handler.showInfo('Comment created.');
                this.setState(DEFAULT_STATE);
                this.props.addComment(res);
            })
            .catch(handler.handleError);
    };

    render() {
        return (
            <form id="commentForm" onSubmit={this.handleSubmit}>
                <label>Comment</label>
                <textarea name="content" type="text" value={this.state.content} onChange={this.handleChange}></textarea>
                <input type="submit" value="Add Comment" id="btnPostComment"/>
            </form>
        )
    }
}