const pokemons = [];

module.exports = {
    addPokem:(data)=>{
        pokemons.push(data)
    },
    retrivePokemons:()=>{
        console.log('hello from database');
        return pokemons
    },
    getPokemon: () => {
        return pokemons[pokemons.length - 1];
    }
};