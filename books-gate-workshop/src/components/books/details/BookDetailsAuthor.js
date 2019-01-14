import React, {Component} from 'react';

export default class BookDetailsAuthor extends Component {

    render() {
        if (this.props.data.about_author !== '') {
            return (
                <section className="author">
                    <h3>About the author</h3>
                    <figure>
                        <img src={this.props.data.author_img}
                             alt=""/>
                    </figure>
                    <p>{this.props.data.about_author}</p>
                </section>
            )
        }

        return (
            <section className="author">
                <h3>About the author</h3>
                <h6>No available information.</h6>
            </section>
        )
    }
}