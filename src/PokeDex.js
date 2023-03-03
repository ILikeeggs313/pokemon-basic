//create a poke dex via props an array of objects describing diff pokemons,
//and renders a sequence of poke cards with their components
import PokeCard from "./PokeCard.js";
import React from "react";

const PokeDex = (props) => {
    return(
        <div className = "PokeDex">
            <h2 className = "PokeDex-title"> Pokedex</h2>
            <div className = "PokeDex-cards">
                {props.pokemon.map(p => (
                    <PokeCard 
                    id = {p.id}
                    name = {p.name}
                    type = {p.type}
                    exp = {p.base_experience}
                    />
                ))}
            </div>
        </div>
    )
}
export default PokeDex;
