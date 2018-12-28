import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import handler from "../../server/utils/handler";
import commentsModel from "../../server/models/commentsModel";

export default class DeleteComment extends Component {

    removeComment = () => {
        const postId = this.props.match.params.id;

        commentsModel.remove(postId)
            .then(handler.showInfo(`Comment deleted.`))
            .catch(handler.handleError);
    };

    render = () => {
        this.removeComment();
        return <Redirect to='/catalog'/>;
    }

}