import React, { Component } from 'react'

import List from './List';
import ItemForm from './ItemForm';

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(name) {
        this.setState(prevState => {
            let items = prevState.items;
            items.push({
                id: items.length + 1,
                name
            });

            return { items }
        });
    }

    render() {
        return (
        <div>
            {/*Test for using this.props.children*/}
            {this.props.children}
            <List items={this.state.items} />
            <ItemForm addItem={this.addItem} name="Welcome"/>
        </div>
        )
    }

}