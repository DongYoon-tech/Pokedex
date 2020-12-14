import React from 'react';
import "./Pokecard.css"

let baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

const Pokecard = (props) => {

    let imgUrl = `${baseUrl}${props.id}.png`
    return (
        <div className="pokecard">
            <div className="pokecard-name">{props.name}</div>
            <img className="pokecard-img" src={imgUrl}></img>
            <div className="pokecard-type">Type: {props.type}</div>
            <div className="pokecard-exp">EXP: {props.exp}</div>

        </div>
    )
}

export default Pokecard