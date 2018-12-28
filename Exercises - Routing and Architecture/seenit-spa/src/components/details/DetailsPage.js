import React, {Component} from 'react';
import Navigation from "../common/Navigation";
import Details from "./Details";
import Comment from "./Comment";
import AddComment from "./AddComment";
import '../../styles/post.css';
import commentsModel from "../../server/models/commentsModel";
import handler from "../../server/utils/handler";

export default class DetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
        this.addComment = this.addComment.bind(this);
    }

    addComment(newComment) {
        let comments = this.state.comments;
        comments.unshift(newComment);
        this.setState({ comments: comments });
    }

    loadComments() {
        const postId = this.props.match.params.id;

        commentsModel.getAll()
            .then(res => res.json())
            .then(res => {
                const data = res
                    .filter(c => c.postId === postId)
                    .sort((c1, c2) => new Date(c2._kmd.ect).valueOf() - new Date(c1._kmd.ect).valueOf());

                this.setState({comments: data});
            })
            .catch(handler.handleError);
    }

    componentDidMount = () => this.loadComments();

    calcTime = (dateIsoFormat) => {
        let diff = new Date() - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);

        function pluralize(value) {
            if (value !== 1) return 's';
            else return '';
        }
    };

    render() {
        return (
            <div>
                <Navigation/>
                <section id="viewComments">
                    <Details calcTime={this.calcTime} {...this.props}/>
                    <div className="post post-content">
                        <AddComment addComment={this.addComment} {...this.props}/>
                    </div>
                    {this.state.comments.map(c => <Comment key={c._id} {...c} calcTime={this.calcTime}/>)}
                </section>
            </div>
        )
    }
}