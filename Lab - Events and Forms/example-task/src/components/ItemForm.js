import React, {Component} from 'react';

/** PropTypes need to be installed - "npm install prop-types" */
import PropTypes from 'prop-types';

class ItemForm extends Component {

    // //It's the new way for using prop-types
    // static propTypes = {
    //     name: PropTypes.string.isRequired
    // };

    constructor(props) {
        super(props);
        this.state = {
            itemName: '',
            error: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onItemSaved = this.onItemSaved.bind(this);
    }

    onInputChange(event) {
        this.setState({
            itemName: event.target.value
        })
    }

    onItemSaved(event) {
        event.preventDefault();

        if (!this.state.itemName) {
            this.setState({
                error: 'Item cannot be empty!'
            });
            return;
        } else {
            this.setState({
                error: ''
            });
        }

        this.props.addItem(this.state.itemName);
    }

    render() {
        let formName = 'My Form';
        if (this.props.name && this.props.name.length > 6) {
            formName = this.props.name;
        }

        return (
            <form onSubmit={this.onItemSaved}>
                <div>{formName}</div>
                <div style={{color: "red"}}>{this.state.error}</div>
                Item Name:
                <input
                    type='text'
                    name='name'
                    onChange={this.onInputChange}
                    value={this.state.itemName}
                />
                <br />
                <input type='submit' />
            </form>
        );
    }
}

/** using prop-types (save us initially, working only in development) */
ItemForm.propTypes = {
    //need to to be String and in same time is Required too
    name: PropTypes.string.isRequired
};

//If no one supply us a name, that guarantee us that will have a name
ItemForm.defaultProps = {
    name: 'Ivan'
};

export default ItemForm
