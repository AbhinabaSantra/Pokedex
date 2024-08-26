import { getPokedexNumber } from "./pokemonDetailsRender/pokemonNumberGetter.js";
import { evolutionRender } from "./pokemonDetailsRender/evolutionLineRender.js";
import { DOMmainRender } from "./pokemonDetailsRender/mainDOMRender.js";

getPokedexNumber()

document.querySelector('.next-arrow').addEventListener('click',()=>{
    const dexNumber = Number(localStorage.getItem('pokemonNumber'));
    localStorage.setItem('pokemonNumber',`${dexNumber+1}`);
    DOMmainRender();
    evolutionRender();
                
});
document.querySelector('.prev-arrow').addEventListener('click',()=>{
    let dexNumber = Number(localStorage.getItem('pokemonNumber'));
    localStorage.setItem('pokemonNumber',`${dexNumber-1}`);
    DOMmainRender();
    evolutionRender();         
});


