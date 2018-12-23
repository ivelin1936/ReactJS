import React, {Component} from 'react';

export default class AddPokemonForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                pokemonName: '',
                pokemonImg: '',
                pokemonInfo: '',
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch(
            'http://localhost:5000/pokedex/create',
            {
                method: 'POST',
                body: JSON.stringify(this.state.form),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(data => data.json())
            .then(response => this.props.updateRoster())
            .catch(err => console.log('Error: ' + err));
    }

    handleChange(event) {
        const name = event.target.dataset.name;
        const value = event.target.value;

        const form = this.state.form;
        form[name] = value;

        this.setState({
            form
        });
    }

    render() {
        return (
            <form className="SingUpForm">
                <h1>Create Pokemon</h1>
                <div className="form-group">
                    <label htmlFor="input-pokeName">Pokemon name</label>
                    <input data-name="pokemonName" type="text" onChange={this.handleChange} className="form-control"
                           id="input-pokeName" aria-describedby="name"
                           placeholder="Enter name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="input-pokeImg">Pokemon image</label>
                    <input data-name="pokemonImg" type="text" onChange={this.handleChange} className="form-control"
                           id="input-pokeImg" placeholder="Enter image url"/>
                </div>
                <div className="form-group">
                    <label htmlFor="input-pokeInfo">Pokemon info</label>
                    <input data-name="pokemonInfo" type="text" onChange={this.handleChange} className="form-control"
                           id="input-pokeInfo" placeholder="Enter info"/>
                </div>
                <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        );
    }
}