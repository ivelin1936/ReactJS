import React, {Component} from 'react';
import postModel from "../../server/models/postModel";
import handler from "../../server/utils/handler";

const DEFAULT_STATE = {
    author: '',
    url: '',
    title: '',
    imageUrl: '',
    description: ''
};

export default class SubmitLink extends Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;
    }

    handleChange = event => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        // let newState = this.state;
        // newState[fieldName] = fieldValue;
        // this.setState(newState);

        this.setState({[fieldName]: fieldValue});
    };

    handleSubmit = event => {
        event.preventDefault();

        this.setState({author: sessionStorage.getItem('username')});
        const data = this.state;

        postModel.add(data)
            .then(res => res.json())
            .then(res => {
                handler.showInfo(`Post created.`);
                this.setState(DEFAULT_STATE);
                this.props.history.push('/catalog');
            }).catch(handler.handleError);
    };

    render() {
        return (
            <section id="viewSubmit">
                <div className="submitArea">
                    <h1>Submit Link</h1>
                    <p>Please, fill out the form. A thumbnail image is not required.</p>
                </div>
                <div className="submitArea formContainer">
                    <form id="submitForm" className="submitForm" onSubmit={this.handleSubmit}>
                        <label>Link URL:</label>
                        <input name="url" value={this.state.url} type="text" onChange={this.handleChange}/>
                        <label>Link Title:</label>
                        <input name="title" value={this.state.title} type="text" onChange={this.handleChange}/>
                        <label>Link Thumbnail Image (optional):</label>
                        <input name="imageUrl" value={this.state.imageUrl} type="text"
                               onChange={this.handleChange}/>
                        <label>Comment (optional):</label>
                        <textarea name="description" value={this.state.description}
                                  onChange={this.handleChange}></textarea>
                        <input id="btnSubmitPost" value="Submit" type="submit"/>
                    </form>
                </div>
            </section>
        )
    }
}