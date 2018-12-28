import React, {Component} from 'react';
import Navigation from "../common/Navigation";
import EditLink from "./EditLink";

export default class EditPage extends Component {

    render() {
        return (
            <div>
                <Navigation/>
                <EditLink {...this.props}/>
            </div>
        )
    }
}