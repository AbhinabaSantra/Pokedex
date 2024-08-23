import {pokedex} from "./data/data.js";

let wrapperInner = '';
//updating the webpage using DOM
pokedex.forEach((pokemon)=>{
    wrapperInner+=`<div class="pokedata">
        <div class="pokemon" data-name=${pokemon.name} data-pokedexNumber='${pokemon.pokedexNumber}'>
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
        </div>
    `;
})
document.querySelector('.wrapper').innerHTML=wrapperInner;
//Creating the search bar
document.querySelector('.searchbar')
    .addEventListener('keyup',()=>{
        let x=document.querySelector('.searchbar').value.toLowerCase();
        console.log(document.querySelector('.pokemon').dataset);
        document.querySelectorAll('.pokedata').forEach((pokemon)=>{
            if(pokemon.querySelector('.pokemon').dataset.name.toLowerCase().includes(x) ||
                pokemon.querySelector('.pokemon').dataset.pokedexnumber.includes(x))
            {
                pokemon.style.display = "block";
            }else{
                pokemon.style.display = "none";
            }
        })
    });
