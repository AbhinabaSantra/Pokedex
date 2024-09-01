import { typeChart } from "../../data/typeAdvantage.js";
import { searchColor } from "./colorSearch.js";
import { pokedex } from "../../data/data.js";

let sectionHTML="";
let weak=[];
let immunity = []
export function intializingVaribles(){
    sectionHTML="";
    weak=[];
    immunity = [];
}
function searchType(type){
    for(let i = 0;i<typeChart.length;i++){
        if(typeChart[i].type.toLowerCase() === type.toLowerCase()){
            return typeChart[i];
        }
    }
}
export function weakness(type){
    const typeAdvDetails = searchType(type);
    Object.entries(typeAdvDetails).forEach(([key,value])=>{
        if(value===0.5){
            weak.push(key.slice(8))
        }
    })
    DOMHTMLWeakness(weak);
}

function DOMHTMLWeakness(weak){
    sectionHTML += `
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
}

export function colorBasedOnType(){
    const types=weak.concat(immunity);
    types.forEach((type)=>{
        document.querySelector(`.${type}`).style.background = searchColor(type);
        document.querySelector(`.${type}`).style.border= '1px solid black'
    })
}
export function immunities(type){
    const typeAdvDetails = searchType(type);
    Object.entries(typeAdvDetails).forEach(([key,value])=>{
        if(value===0){
            immunity.push(key.slice(8))
        }
    })
    if(immunity.length !== 0){
        DOMHTMLImmunity(immunity);
    }
}
function DOMHTMLImmunity(immunity){
    sectionHTML += `
        <div class="immunity">
            <p class="heading"> IMMUNITIES </p>
            <div class = "immune-type">
    `;
    immunity.forEach((typeImmune)=>{
        sectionHTML += `    
            <p class="${typeImmune}"> ${typeImmune} </p>
        `;
    })
    sectionHTML += `
            </div>
        </div>
    `;
    
}
export function suggestedPokemon(){
    const types = immunity.concat(weak);
    let suggestion = []
    pokedex.forEach((pokemon)=>{
        if(types.includes(pokemon.type1.toLowerCase())){
            suggestion.push(pokemon)
        }
        if(pokemon.type2){
            if(types.includes(pokemon.type2.toLowerCase()) && !suggestion.includes(pokemon)){
                suggestion.push(pokemon);
            }
        }
    })
    suggestion.sort((a,b)=>{
        if(immunity.includes(a.type1.toLowerCase())){
            return -1;
        }
        else if(weak.includes(a.type1.toLowerCase())){
            return 1;
        }
    })
    console.log(suggestion);
    suggestionDOMHTML(suggestion);
}
export function HTMLRenderBattleDataSection(){
    
    document.querySelector('section').innerHTML = sectionHTML || `<p class='error'>Pokemon not found. Please check the spelling. <a href="index.html">Click to go to Index Page</a></p> `       
}

function suggestionDOMHTML(suggestion){
    let i=0;
    sectionHTML += `
        <div class="suggestion">
            <p class="heading"> SUGGESTIONS </p>
            <div class = "sugest-pokemon">
    `;
    while(i!=12 && i<suggestion.length){
        sectionHTML += `
                <div class="pokedata">
                    <div class="pokemon" data-name=${suggestion[i].name} data-pokedexNumber='${suggestion[i].pokedexNumber}'>
                        <img src="images/Pokemon-Dataset/${suggestion[i].name.toLowercase()}.png">
                        <span class="name">${suggestion[i].name}</span>
                        <div class="type">
                            <span class="type1">${suggestion[i].type1}</span>
                            <span class="type2">${(suggestion[i].type2) ? `/ ${suggestion[i].type2}` : ''}</span>
                        </div>
                        <div>
                            <span class="pokedex-number">${suggestion[i].pokedexNumber}</span>
                        </div>
                    </div>
                </div>
        `;
        i++
    };
    sectionHTML+='</div></div>'
}
