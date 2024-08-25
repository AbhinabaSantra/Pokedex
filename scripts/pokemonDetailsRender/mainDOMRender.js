/* The function test is a demo function which helps to understand how the same javascript can be used 
    in different html files*/

// function test(){
// document.addEventListener("DOMContentLoaded", () => {
//     // Check if we are on index.html
//     if (document.getElementById('page1')) {
//         console.log('This is Page 1');
//         // Perform Page 1 specific JavaScript operations here
//     }
//     // Check if we are on about.html
//     if (document.getElementById('page2')) {
//         console.log('This is Page 2');
//         // Perform Page 2 specific JavaScript operations here
//     }
// });
// }

import { pokemonDetails } from "../../data/pokemon-details.js";

export function DOMmainRender(){
    document.addEventListener('DOMContentLoaded',()=>{
        if(document.querySelectorAll('.pkedata')){
            document.querySelectorAll('.pokedata').forEach((pokemon)=>{
                pokemon.addEventListener('click',()=>{
                    const pokedexNumber =pokemon.querySelector('.pokemon').dataset.pokedexnumber;
                    localStorage.setItem('pokemonNumber',pokedexNumber);
                });
            });
        }
        if(document.querySelector('main')){
            const selectedPokemonNumber = localStorage.getItem('pokemonNumber');
            if (selectedPokemonNumber){ 
                pokemonDetails.forEach((pokemon)=>{
                    if(pokemon.pokedex_number.toString() === selectedPokemonNumber){
                        const pokeData = pokemon;
                        updatePageNameIcon(pokeData);
                        const pokemonData=displayPokemondata(pokeData);
                        document.querySelector('main').innerHTML = pokemonData;
                    }
                });
            }
        }
    });
    function displayPokemondata(pokeData){
        const pokemonDetailsHTML = `
            <div class="head">
                <p class="name">${pokeData.name}</p>
                <p class="number">#${pokeData.pokedex_number.toString().padStart(3,'0')}</p>
            </div>
            <div class="details">
                <div class="image">
                    <img src="images/Pokemon-Dataset/${pokeData.name}.png" alt="${pokeData.name}">
                </div>
                <div class="pokemon-info">
                    <div class="basic">
                        <p class="height"> height : ${pokeData.height_m} m</p>
                        <p class="weight"> weight : ${pokeData.weight_kg} kg</p>
                        <p class="ability">ability : ${displayAbility(pokeData.abilities)}</p>
                    </div>  
                    <div class="progress">
                        <span>HP</span>
                        <progress class="stat hp" value="${pokeData.hp}" max="250"></progress>
                        <span>ATK</span>
                        <progress class="stat attack" value="${pokeData.attack}" max="165"></progress>
                        <span>DEF</span>
                        <progress class="stat defense" value="${pokeData.defense}" max="200"></progress>
                        <span>SPA</span>
                        <progress class="stat sp-attack" value="${pokeData.sp_attack}" max="170"></progress>
                        <span>SPD</span>
                        <progress class="stat sp-defense" value="${pokeData.sp_defense}" max="200"></progress>
                        <span>SPE</span>
                        <progress class="stat speed" value="${pokeData.speed}" max="150"></progress>
                        <span>BST</span>
                        <progress class="stat base Total" value="${pokeData.base_total}" max="780"></progress>
                    </div>
                    
                </div>
            </div>
        `;
        return pokemonDetailsHTML;
    }
    function displayAbility(abilities){
        
        let outputAbility = '';
        abilities.forEach((ability,index)=>{
            if(index != abilities.length-1){
                outputAbility += `${ability}, `;
            }
            else{
                outputAbility += `${ability}`;
            }
        });
        return outputAbility;
    }
    function updatePageNameIcon(pokeData){
        document.title = pokeData.name;
        let link = document.createElement('link');
        link.rel="icon";
        link.href=`images/Pokemon-Dataset/${pokeData.name}.png`;
        document.querySelector('head').appendChild(link);
    }
}




