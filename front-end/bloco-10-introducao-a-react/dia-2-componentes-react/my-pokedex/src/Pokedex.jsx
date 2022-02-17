import React, { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends Component {
    render() {
        const pokemonList = pokemons.map(pokemon => {
            return <Pokemon key={pokemon.id} pokemon={ pokemon } />
        })
        return(pokemonList)
    }
}
export default Pokedex