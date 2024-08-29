import { pokemonDetails } from "../../data/pokemon-details.js";
import { typeChart } from "../../data/typeAdvantage.js";
import { searchColor } from "./colorSearch.js";

let sectionHTML="";
let weak=[];
let immunity = []
const byNameInput=document.querySelector('.pokeName') ;
export function onclickByNameButton(){
    document.querySelector('.byNameButton').
        addEventListener('click',()=>{
            sectionHTML="";
            weak=[];
            immunity = [];
            HTMLRenderBattleDataSection();
            const pokemonName = byNameInput.value;
            searchPokemonName(pokemonName);
            HTMLRenderBattleDataSection();
            colorBasedOnType();
            
        }); 
    byNameInput.addEventListener('keypress',(event)=>{
        if(event.key==='Enter'){
            sectionHTML="";
            weak=[];
            immunity = [];
            HTMLRenderBattleDataSection();
            const pokemonName = byNameInput.value;
            searchPokemonName(pokemonName);
            HTMLRenderBattleDataSection();
            colorBasedOnType();
            byNameInput.value=""
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

function searchType(type){
    
    for(let i = 0;i<typeChart.length;i++){
        if(typeChart[i].type.toLowerCase() === type.toLowerCase()){
            return typeChart[i];
        }
    }
}
function weakness(type){
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

function colorBasedOnType(){
    const types=weak.concat(immunity);
    types.forEach((type)=>{
        document.querySelector(`.${type}`).style.background = searchColor(type);
    })
}
function immunities(type){
    const typeAdvDetails = searchType(type);
    Object.entries(typeAdvDetails).forEach(([key,value])=>{
        if(value===0){
            immunity.push(key.slice(8))
        }
    })
    if(immunity.length !== 0){
        DOMHTMLImmunity(immunity);
    }
    console.log(immunity);
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
function HTMLRenderBattleDataSection(){
    document.querySelector('section').innerHTML = sectionHTML || "<p class='error'>Pokemon not found. Please check the spelling</p>"        
}