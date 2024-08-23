import {pokedex} from "./data/data.js";

let wrapperInner = '';
//updating the webpage using DOM
pokedex.forEach((pokemon)=>{
    wrapperInner+=`
        <div class="pokemon" data-name=${pokemon.name}>
            <img src="images/Pokemon-Dataset/${pokemon.name}.png">
            <span class="name">${pokemon.name}</span>
            <div class="type">
                <span class="type1">${pokemon.type1}</span>
                <span class="type2">${(pokemon.type2) ? `/${pokemon.type2}` : ''}</span>
            </div>
            <div>
                <span class="pokedex-number">${pokemon.pokedexNumber}</span>
            </div>
        </div>
    `;
})
document.querySelector('.wrapper').innerHTML=wrapperInner;
//Creating the search bar
document.querySelector('.searchbar')
    .addEventListener('keydown',(event)=>{
        console.log(event.key);
    })