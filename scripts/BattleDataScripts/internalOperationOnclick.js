import { typeChart } from "../../data/typeAdvantage.js";
import { searchColor } from "./colorSearch.js";

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
export function HTMLRenderBattleDataSection(){
    document.querySelector('section').innerHTML = sectionHTML || "<p class='error'>Pokemon not found. Please check the spelling</p>"        
}
