import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/contact-transperant.css';

export default class ContactTransperant extends Component {

    render = () => {
        const withLink = (
            <Link to="/home/contact">{this.props.description}</Link>
        );

        return (
            <div className="jumbotron jumbotron-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <h1 className="h1">
                                {this.props.title} <small>{this.props.hasLink ? withLink : this.props.description}</small></h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}