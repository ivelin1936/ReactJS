import React, {Component} from 'react';

import handler from "../../server/utils/handler";
import Post from "./Post";

import '../../styles/post.css'

export default class PostsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            posts: []
        };
    }

    componentDidMount = () => {
        this.props.getPosts()
            .then(response =>
                this.setState({
                    isReady: true,
                    posts: response
                })
            )
            .catch(handler.handleError)
    };

    render() {
        if (this.state.isReady) {
            if (this.state.posts.length === 0) {
                return (
                    <section id="viewCatalog">
                        No posts in database
                    </section>
                )
            }

            return (
                <section id="viewCatalog">
                    {this.state.posts.map((p, i) => <Post key={p._id} rank={i} {...p} />)}
                </section>
            )
        } else {
            return (
                <section id="viewCatalog">
                    <div id="notifications">
                        <div id="loadingBox" className="notification">
                            <span>Loading ...</span>
                        </div>
                    </div>
                </section>
            )
        }
    }
}