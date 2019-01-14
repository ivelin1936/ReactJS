import React, {Component} from 'react';

export default class SecondPagesHeader extends Component {

    render() {

        return (
            <header className="masthead text-center text-white">
                <div className="masthead-content">
                    <div className="container">
                        <h1 className="masthead-heading mb-0">{this.props.title}</h1>
                    </div>
                </div>
            </header>
        )
    }
}