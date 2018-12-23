import React, {Component} from 'react';

import AddPokemonForm from './AddPokemonForm';
import Pokemon from './Pokemon';

export default class LoggedPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokeArray: []
        };

        this.updateRoster = this.updateRoster.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:5000/pokedex/pokedex')
            .then(data => data.json())
            .then(response => this.setState({ pokeArray: response.pokemonColection }))
            .catch(err => console.log(err))
    }

    updateRoster() {
        this.componentDidMount();
    }

    render() {
        return (
           <div>
               <AddPokemonForm updateRoster={this.updateRoster}/>
               <Pokemon pokeArray={this.state.pokeArray}/>
           </div>
        );
    }
}