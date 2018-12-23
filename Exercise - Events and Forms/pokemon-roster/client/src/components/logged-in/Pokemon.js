import React, {Component} from 'react';

export default class Pokemon extends Component {

    render() {
        let pokemons = this.props.pokeArray || [];
        return (
            <div>
                <h2>Pokemon Collection</h2>
                <div className="row">
                    {pokemons.map((pokemon, index) => (
                        <div className="col-md-4 thumbnail" key={index}>
                            <div className="thumbnail">
                                <h5>{pokemon.pokemonName}</h5>
                                <p>{pokemon.pokemonInfo}</p>
                                <img className="img-thumbnail" src={pokemon.pokemonImg}
                                     alt={pokemon.pokemonImg} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}