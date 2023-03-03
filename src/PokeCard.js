//shows a single pokemon, wiht name, image, type and base exp
import React from "react";

const PokeCard = (props) => {
    let imgSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return(
        <div className = "PokeCard">
            <div className = "PokeCard-title "> {props.name} </div>
            <img className = "PokeCard-image" src = {imgSource} alt = {props.name} />
            <div className = "PokeCard-type"> {props.type} </div>
            <div className = "Pokecard-base_experience"> {props.exp} </div>

        </div>
    )
}

export default PokeCard;

