import React, {Component} from 'react';
import withAlert from "../higher-order-components/withAlert";

class Navigation extends Component {

    render() {
        return (
            <nav>
                <header><span className="title">Navigation</span></header>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Catalog</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        )
    }
}

Navigation = withAlert(Navigation);

export default Navigation;