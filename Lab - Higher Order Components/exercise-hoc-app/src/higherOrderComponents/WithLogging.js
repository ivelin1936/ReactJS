import React, {Component} from 'react';

const withLogging = WrappedComponent =>
    class extends Component {

        componentDidMount() {
            console.log(`${WrappedComponent.displayName || WrappedComponent.name} ready!`)
        }

        render() {
            return <WrappedComponent {...this.props}/>
        }
    };

export default withLogging;
