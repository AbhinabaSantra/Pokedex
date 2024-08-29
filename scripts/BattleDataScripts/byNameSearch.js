import { pokemonDetails } from "../../data/pokemon-details.js";
import { HTMLRenderBattleDataSection,colorBasedOnType,weakness,immunities,intializingVaribles } from "./internalOperationOnclick.js";

const byNameInput=document.querySelector('.pokeName') ;
export function onclickByNameButton(){
    document.querySelector('.byNameButton').
        addEventListener('click',()=>{
            callAllFunctions();
        }); 
    byNameInput.addEventListener('keypress',(event)=>{
        if(event.key==='Enter'){
            callAllFunctions();
        }
    })
}

function searchPokemonName(pokemonName) {
    const inputPokemon = pokemonDetails.find((pokemon) =>
        pokemon.name.toLowerCase() === pokemonName.toLowerCase()
    );
    weakness(inputPokemon.type1);
    immunities(inputPokemon.type1);
}

function callAllFunctions(){
    intializingVaribles();
    HTMLRenderBattleDataSection();
    const pokemonName = byNameInput.value;
    searchPokemonName(pokemonName);
    HTMLRenderBattleDataSection();
    colorBasedOnType();
    byNameInput.value="";
}