import React, {Component} from 'react';
import PostUlNavigation from "./PostUlNavigation";

export default class Post extends Component {

    calcTime = () => {
        const dateIsoFormat = this.props._kmd.ect;

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
            <article className="post">
                <div className="col rank">
                    <span>{this.props.rank + 1}</span>
                </div>
                <div className="col thumbnail">
                    <a href={this.props.url}>
                        <img src={this.props.imageUrl} alt="some alt"/>
                    </a>
                </div>
                <div className="post-content">
                    <div className="title">
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                    </div>
                    <div className="details">
                        <div className="info">
                            submitted {this.calcTime()} ago by {this.props.author}
                        </div>
                        <div className="controls">
                            <PostUlNavigation {...this.props}/>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}