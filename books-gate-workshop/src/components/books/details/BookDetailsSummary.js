import React, {Component} from 'react';

export default class BookDetailsSummary extends Component {

    render() {
        return (
            <section className="about-the-book">
                <article className="details">
                    <h3>Details</h3>
                    <table className="table thead-dark">
                        <tbody>
                        <tr>
                            <td>Pages</td>
                            <td>{this.props.data.pages} Pages</td>
                        </tr>
                        <tr>
                            <td>Cover</td>
                            <td>{this.props.data.cover}</td>
                        </tr>
                        <tr>
                            <td>Publisher</td>
                            <td>{this.props.data.publisher}</td>
                        </tr>
                        <tr>
                            <td>Language</td>
                            <td>{this.props.data.language}</td>
                        </tr>
                        <tr>
                            <td>Published</td>
                            <td>{this.props.data.publishedDate}</td>
                        </tr>
                        <tr>
                            <td>Genre</td>
                            <td>{this.props.data.genre}</td>
                        </tr>
                        </tbody>
                    </table>

                </article>
                <article className="summary">
                    <h3>Summary</h3>
                    <p>{this.props.data.description}</p>
                </article>
            </section>
        )
    }
}