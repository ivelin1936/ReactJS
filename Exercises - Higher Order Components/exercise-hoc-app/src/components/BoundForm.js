import React, {Component} from 'react';

const DEFAULT_STATE = {};

export default class BoundForm extends Component {
    constructor(props) {
        super(props);

        this.state = initStateFromChildren(this.props.children, DEFAULT_STATE);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        // do stuff
        this.props.onSubmit(Object.assign({}, this.state));

        this.setState(DEFAULT_STATE);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                {React.Children.map(this.props.children, child => {
                    if (child.type === 'input' && child.props.name) {
                        return React.cloneElement(
                            child,
                            {onChange: this.onChange, value: this.state[child.props.name]}
                        );

                        // return <input onChange={this.onChange} value={this.state[child.props.name]} {...child.props}/>;
                    }
                    return child;
                })}
            </form>
        )
    }
}

function initStateFromChildren(children, DEFAULT_STATE) {
    React.Children
        .forEach(children, child => {
            if (child.type === 'input' && child.props.name) {
                DEFAULT_STATE[child.props.name] = '';
            }
        });

    return DEFAULT_STATE;
}