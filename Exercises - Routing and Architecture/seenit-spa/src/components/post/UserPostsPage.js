import React, {Component} from 'react';
import Navigation from "../common/Navigation";
import '../../styles/post.css';
import PostsList from "./PostsList";
import postModel from "../../server/models/postModel";

export default class UserPostsPage extends Component {

    getPosts = () => {
        return postModel.getPosts()
            .then(data => data.json())
            .then(data => data.filter(p =>
                p.author === sessionStorage.getItem('username')
            ))

    };

    render() {
        return (
            <div>
                <Navigation/>
                <section id="viewMyPosts">
                    <div className="post post-content">
                        <h1>{sessionStorage.getItem('username')} Posts</h1>
                    </div>
                    <div className="posts">
                        <PostsList getPosts={this.getPosts} {...this.props}/>
                    </div>
                </section>
            </div>
        )
    }
}