import { pokemonDetails } from "../../data/pokemon-details.js";
import { typeChart } from "../../data/typeAdvantage.js";
import { searchColor } from "./colorSearch.js";

const byNameInput=document.querySelector('.pokeName') ;
export function onclickByNameButton(){
    document.querySelector('.byNameButton').
        addEventListener('click',()=>{
            const pokemonName = byNameInput.value;
            searchPokemonName(pokemonName);
            
            
        }); 
}

function searchPokemonName(pokemonName){
    let inputPokemon;
    pokemonDetails.forEach((pokemon)=>{
        if(pokemon.name.toLowerCase() === pokemonName.toLowerCase()){
            inputPokemon = pokemon;
        }
    });
    weakness(inputPokemon.type1);
}
function searchType(type){
    
    for(let i = 0;i<typeChart.length;i++){
        if(typeChart[i].type.toLowerCase() === type.toLowerCase()){
            return typeChart[i];
        }
    }
}
function weakness(type){
    let weak = []
    const typeAdvDetails = searchType(type);
    Object.entries(typeAdvDetails).forEach(([key,value])=>{
        if(value===0.5){
            weak.push(key.slice(8))
        }
    })
    DOMRender(weak);
}

function DOMRender(weak){
    let sectionHTML = `
        <div class="weakness">
            <p class="heading"> WEAKNESS </p>
            <div class = "weak-type">
    `;
    weak.forEach((typeWeakness)=>{
        sectionHTML += `    
            <p class="${typeWeakness}"> ${typeWeakness} </p>
        `;
    })
    sectionHTML += `
            </div>
        </div>
    `;
    document.querySelector('section').innerHTML = sectionHTML;
    colorBasedOnType(weak)
}

function colorBasedOnType(weak){
    weak.forEach((typeWeakness)=>{
        document.querySelector(`.${typeWeakness}`).style.background = searchColor(typeWeakness);
    })
}