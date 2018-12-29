import React, {Component} from 'react';
import withLoading from "../higherOrderComponents/withLoading";

class ComponentWithData extends Component {

    render() {
        return (
            <ul>
                {this.props.data.map(i => <li key={i.id}><a href="">{i.name}</a></li>)}
            </ul>
        )
    }
}

ComponentWithData = withLoading(ComponentWithData);

export default ComponentWithData;