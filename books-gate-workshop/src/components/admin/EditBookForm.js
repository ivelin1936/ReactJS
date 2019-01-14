import React, {Component} from 'react';
import '../../styles/add-form.css';

import bookModel from '../../models/bookModel';

const DEFAULT_STATE = {
    name: '',
    price: '',
    description: '',
    author: '',
    pages: '',
    cover: '',
    publisher: '',
    language: '',
    genre: '',
    first_img: '',
    second_img: '',
    author_img: '',
    about_author: '',
    inStock: ''
};

export default class EditBookForm extends Component {
    constructor(props) {
        super(props);

        this.state = DEFAULT_STATE;

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        bookModel.getById(this.props.bookId)
            .then(res => res.json())
            .then(res => this.setState({ ...res }))
            .catch(err => console.log(err));
    }

    onChange(e) {
        const targetName = e.target.name;
        const targetValue = e.target.value;

        this.setState({
            [targetName]: targetValue
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const data = Object.assign({}, this.state);

        bookModel.edit(this.props.bookId, data)
            .then(res => res.json())
            .then(res => {
                this.props.history.push('/home/store');
            })
            .catch(error => console.log(error));

        this.setState(DEFAULT_STATE);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form_main">
                            <h4 className="heading"><strong>Edit </strong> Book Panel <span></span></h4>
                            <div className="form">
                                <form id="contactFrm" name="contactFrm" onSubmit={this.onSubmit}>
                                    <input type="text" required="" placeholder="Title" value={this.state.name}
                                           name="name" className="txt" onChange={this.onChange}/>
                                    <input type="text" required="" placeholder="Author" value={this.state.author}
                                           name="author" className="txt" onChange={this.onChange}/>
                                    <input type="text" required="" placeholder="First image url"
                                           value={this.state.first_img}
                                           name="first_img" className="txt" onChange={this.onChange}/>
                                    <input type="text" required="" placeholder="Second image url"
                                           value={this.state.second_img}
                                           name="second_img" className="txt" onChange={this.onChange}/>
                                    <input type="text" required="" placeholder="Genre" value={this.state.genre}
                                           name="genre" className="txt" onChange={this.onChange}/>
                                    <input type="text" required="" placeholder="Language" value={this.state.language}
                                           name="language" className="txt" onChange={this.onChange}/>
                                    <input type="text" required="" placeholder="Publisher" value={this.state.publisher}
                                           name="publisher" className="txt" onChange={this.onChange}/>
                                    <input type="text" required="" placeholder="Cover" value={this.state.cover}
                                           name="cover" className="txt" onChange={this.onChange}/>
                                    <input type="number" required="" placeholder="Pages" value={this.state.pages}
                                           name="pages" className="txt" onChange={this.onChange}/>

                                    <textarea placeholder="Book Description" name="description" type="text"
                                              className="txt_3" value={this.state.description}
                                              onChange={this.onChange}></textarea>

                                    <input type="number" required="" placeholder="Price" value={this.state.price}
                                           name="price" className="txt" onChange={this.onChange}/>
                                    <input type="number" required="" placeholder="Amount in stock" value={this.state.inStock}
                                           name="inStock" className="txt" onChange={this.onChange}/>

                                    <input type="text" required="" placeholder="Author img" value={this.state.author_img}
                                           name="author_img" className="txt" onChange={this.onChange}/>
                                    <input type="text" required="" placeholder="About the author" value={this.state.about_author}
                                           name="about_author" className="txt" onChange={this.onChange}/>

                                    <div className="text-center">
                                        <input type="submit" value="Edit Book" name="submit" className="txt2"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}