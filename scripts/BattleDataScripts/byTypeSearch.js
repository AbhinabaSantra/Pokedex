import { HTMLRenderBattleDataSection,colorBasedOnType,weakness,immunities,intializingVaribles } from "./internalOperationOnclick.js";

const byTypeInput=document.querySelector('.pokeType1') ;
export function onclickByTypeButton(){
    document.querySelector('.byTypeButton').
    addEventListener('click',()=>{
        callAllFunctions();
    }); 
    byTypeInput.addEventListener('keypress',(event)=>{
        if(event.key==='Enter'){
            callAllFunctions();
        }
    })
}
function callAllFunctions(){
    intializingVaribles();
    HTMLRenderBattleDataSection();
    const pokemonType = byTypeInput.value;
    weakness(pokemonType);
    immunities(pokemonType);
    HTMLRenderBattleDataSection();
    colorBasedOnType();
    byTypeInput.value="";
}