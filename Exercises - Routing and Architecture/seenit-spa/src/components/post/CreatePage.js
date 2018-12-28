import React, {Component} from 'react';
import Navigation from "../common/Navigation";
import SubmitLink from "./SubmitLink";

export default class CreatePage extends Component {

    render() {
        return (
            <div>
                <Navigation/>
                <SubmitLink {...this.props}/>
            </div>
        )
    }
}