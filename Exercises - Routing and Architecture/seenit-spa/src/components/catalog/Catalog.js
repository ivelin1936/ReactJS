import React, {Component} from 'react';
import Navigation from "../common/Navigation";
import PostsList from "../post/PostsList";
import postModel from "../../server/models/postModel";

export default class Catalog extends Component {

    getPosts = () => {
        return postModel.getPosts()
            .then(data => data.json());
    };

    render() {
        return (
            <div>
                <Navigation/>
                <PostsList getPosts={this.getPosts}/>
            </div>
        )
    }
}