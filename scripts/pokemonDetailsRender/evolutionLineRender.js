import { evolution } from "../../data/evolution.js";
import { getPokedexNumber } from "./pokemonNumberGetter.js";
import { pokedex } from "../../data/data.js";

getPokedexNumber();
export function evolutionRender(){
    if(document.querySelector('.evolution')){
        const selectedPokedexNumber = Number(localStorage.getItem('pokemonNumber'));
        searchEvolutionLine(selectedPokedexNumber);
        
    }
}

// Function for searching the evolution line array in evolution.js 
function searchEvolutionLine(selectedPokedexNumber){
    if([133,134,135,136].includes(selectedPokedexNumber)){
        generateBrachedEvolution([133,134,135,136]);
        evolutionStyling([133,134,135,136],selectedPokedexNumber);
    }
    else{
        evolution.forEach((evolutionLine)=>{
            if(evolutionLine.includes(selectedPokedexNumber)){
            generateEvolutionHTML(evolutionLine); 
            evolutionStyling(evolutionLine,selectedPokedexNumber);
            }
        })
    }
}

// For searching the active Pokemon
function searchPokemon(stageNumber){
    for(let pokemon of pokedex){
        if(pokemon.pokedexNumber === stageNumber){
            return pokemon;
        }
    }
}

// For generating the required HTML 
function generateEvolutionHTML(evolutionLine){
    let evolutionHTML = ''
    evolutionLine.forEach((stageNumber,index)=>{
        const pokemonStage = searchPokemon(stageNumber);
        evolutionHTML += `
            <div class= "inner">
                <div class="stage stage${index+1}">
                    <img class="img-pokeEvo" src="images/Pokemon-Dataset/${pokemonStage.name.toLowerCase()}.png" alt=${pokemonStage.name}>
                </div>
                <p> ${pokemonStage.name} </p>
            </div>
            ${(index+1 == evolutionLine.length) ? '' : '<i class="fa-solid fa-chevron-right forward-arrow"></i>'}

        `;
        
    })
    document.querySelector('.evolution').innerHTML = evolutionHTML;
}

// For the interactive styling
function evolutionStyling(evolutionLine,activePokemonNumber){
    evolutionLine.forEach((dexNumber,index)=>{
        if(dexNumber == activePokemonNumber){
            document.querySelector(`.stage${index+1}`).style.filter = 'grayscale(0%)'
        }
        else{
            document.querySelector(`.stage${index+1}`).style.filter = 'grayscale(100%)'
        }
    });
}

// code for Branched Evolution of Eevee
function generateBrachedEvolution(evolutionLine){
    let evolutionHTML = '<div class="branchedEvo">'
    evolutionLine.forEach((stageNumber,index)=>{
        const pokemonStage = searchPokemon(stageNumber);
        if(index == 0){
            evolutionHTML += 
                `
                    <div class= "main">
                        <div class="inner">
                            <div class="stage stage${index+1}">
                                <img class="img-pokeEvo" src="images/Pokemon-Dataset/${pokemonStage.name}.png" alt=${pokemonStage.name}>
                            </div>
                            <p> ${pokemonStage.name} </p>
                        </div>
                        <i class="fa-solid fa-chevron-right forward-arrow "></i>
                    </div>
                    <div class= "branched">
                    `;
        }
        else{
            evolutionHTML += 
                `   
                    
                        <div class="inner">
                            <div class="stage stage${index+1}">
                                <img class="img-pokeEvo" src="images/Pokemon-Dataset/${pokemonStage.name}.png" alt=${pokemonStage.name}>
                            </div>
                            <p> ${pokemonStage.name} </p>
                        </div>
                    
                `
        }
        
    }); 
    evolutionHTML += `</div></div>`
    document.querySelector('.evolution').innerHTML = evolutionHTML;                 
}
