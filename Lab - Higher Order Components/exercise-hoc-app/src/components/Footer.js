import React, {Component} from 'react';
import withLogging from "../higherOrderComponents/WithLogging";

class Footer extends Component {

    render() {
        return (
            <div>
                Some Footer 2018 ...
            </div>
        )
    }
}

Footer = withLogging(Footer);

export default Footer;