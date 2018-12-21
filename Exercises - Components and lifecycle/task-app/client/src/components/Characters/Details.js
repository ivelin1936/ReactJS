import React from 'react';

export default class Details extends React.Component {

    render = () => {
        let content = this.props.bio
            ? (<div>
                    <div className="image">
                        <img src={this.props.url} alt='someAlt'/>
                    </div>
                    <div className="info">
                        <p>Name: <strong>{this.props.name}</strong></p>
                        <p>Bio:</p>
                        <p>{this.props.bio}</p>
                    </div>
                </div>)
            : <i>Select a character</i>;

        return (
            <section id ="bio">
                {content}
            </section>
        )
    }
};