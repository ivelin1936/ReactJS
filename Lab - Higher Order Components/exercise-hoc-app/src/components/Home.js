import React, {Component} from 'react';
import withLogging from "../higherOrderComponents/WithLogging";
import withLoading from "../higherOrderComponents/withLoading";

class Home extends Component {
    // static displayName = 'Home Header! (with static displayName)';

    render() {
        const message = this.props.message || 'Home';

        return (
            <div>
                {message}
            </div>
        )
    }
}
Home.displayName = 'Home Header! (old way for static)';
Home = withLogging(Home);
// Home = withLoading(Home);

export default Home;