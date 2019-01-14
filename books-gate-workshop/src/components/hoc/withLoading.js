import React, {Component} from 'react';
import '../../styles/withLoading.css';

export default function withLoading(WrappedComponent) {
    return class extends Component {
        // constructor(props) {
        //     super(props);
        //         this.state = {
        //             isReady: false,
        //             data: []
        //         };
        // }
        //
        // receiveData = (data) => this.setState({ data: data, isReady: true });
        //
        // componentDidMount() {
        //     this.props.request()
        //         .then(res => res.json())
        //         .then(response => {
        //                 const sortData = response
        //                     .sort((b1, b2) => new Date(b2._kmd.ect) - new Date(b1._kmd.ect));
        //
        //                 this.receiveData(sortData);
        //                 this.props.changeState(sortData);
        //             }
        //         )
        //         .catch(err => console.log(err));
        // }

        render() {
            if (this.props.isReady) {
                return <WrappedComponent data={this.props.data} {...this.props}/>;
            }

            return (
                <div className='loading'>
                    Loading &hellip;
                </div>
            )
        }
    }
}