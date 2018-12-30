import React, { Component } from 'react';

const withAlert = WrappedComponent =>
    class extends Component {

        componentDidMount() {
            console.log(`${WrappedComponent.displayName || WrappedComponent.name} ready!`);
        }

        render() {
            return (
                <div className="alert">
                    <span className="alert-symbol">&#9888;</span>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    };

export default withAlert;