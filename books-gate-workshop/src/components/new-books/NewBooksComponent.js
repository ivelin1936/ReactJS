import React, {Component} from 'react';
import withLoading from "../hoc/withLoading";
import BookMiniView from "./BookMiniView";

class NewBooksComponent extends Component {

    render = () => {
        return (
            <section className="container">
                <br/>
                <h2>New Books</h2>
                <div className="row">
                    {this.props.data.map(b => <BookMiniView key={b._id} {...b} />)}
                </div>
            </section>
        )
    }
}

NewBooksComponent = withLoading(NewBooksComponent);
export default NewBooksComponent;