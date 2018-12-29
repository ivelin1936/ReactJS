import React, {Component} from 'react';
import '../styles/withLoading.css';

export default function withLoading(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                ready: false,
                data: []
            }
        }

        componentDidMount() {
            this.props.request()
                .then(data => this.receiveData(data));
        }

        receiveData(data) {
            this.setState({
                ready: true,
                data: data
            })
        }

        render() {
            if (this.state.ready) {
                return <WrappedComponent data={this.state.data} {...this.props}/>;
            }

            return (
                <div className='loading'>
                    Loading &hellip;
                </div>
            )
        }
    }
}