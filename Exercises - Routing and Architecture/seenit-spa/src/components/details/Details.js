import React, {Component} from 'react';
import postModel from "../../server/models/postModel";
import handler from "../../server/utils/handler";
import CommentUlNavigation from "./CommentUlNavigation";

const DEFAULT_STATE = {
    author: '',
    url: '',
    title: '',
    imageUrl: '',
    description: ''
};

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;
    }

    loadPostDetails = () => {
        const postId = this.props.match.params.id;

        postModel.getById(postId)
            .then(data => data.json())
            .then(res => this.setState({
                id: postId,
                author: res.author,
                url: res.url,
                title: res.title,
                imageUrl: res.imageUrl,
                description: res.description,
                submittedTime: this.props.calcTime(res._kmd.ect)
            })).catch(handler.handleError);
    };

    componentDidMount = () => this.loadPostDetails();

    render() {
        return (
            <div className="post">
                <div className="col thumbnail">
                    <a href={this.state.url}>
                        <img src={this.state.imageUrl} alt='some alt'/>
                    </a>
                </div>
                <div className="post-content">
                    <div className="title">
                        <a href={this.state.url}>
                            {this.state.title}
                        </a>
                    </div>
                    <div className="details">
                        <p>{this.state.description}</p>
                        <div className="info">
                            submitted {this.state.submittedTime} ago by {this.state.author}
                        </div>
                        <div className="controls">
                            <CommentUlNavigation {...this.state}/>
                        </div>

                    </div>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
}