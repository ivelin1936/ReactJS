import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {

    render() {
        let btnComponent = null;
        if (this.props.hasBtn) {
           btnComponent = <Link to="/home/about" className="btn btn-primary btn-xl rounded-pill mt-5">{this.props.btnText}</Link>;
        }

        return (
            <header className="masthead text-center text-white">
                <div className="masthead-content">
                    <div className="container">
                        <h1 className="masthead-heading mb-0">{this.props.title}</h1>
                        <p className="masthead-subheading mb-0">{this.props.description}</p>
                        {btnComponent}
                    </div>
                </div>
                <div className="bg-circle-1 bg-circle"></div>
                <div className="bg-circle-2 bg-circle"></div>
                <div className="bg-circle-3 bg-circle"></div>
                <div className="bg-circle-4 bg-circle"></div>
            </header>
        )
    }
}