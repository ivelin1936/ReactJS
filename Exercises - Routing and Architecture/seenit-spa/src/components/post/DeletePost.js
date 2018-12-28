import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import handler from "../../server/utils/handler";
import postModel from "../../server/models/postModel";

export default class DeletePost extends Component {

    logout = () => {
        const postId = this.props.match.params.id;

        postModel.remove(postId)
            .then(handler.showInfo(`Post deleted.`))
            .catch(handler.handleError);
    };

    render = () => {
        this.logout();
        return <Redirect to='/catalog'/>;
    }

}