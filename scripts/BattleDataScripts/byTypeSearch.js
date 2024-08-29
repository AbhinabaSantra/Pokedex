const byTypeInput=document.querySelector('.pokeType1') ;
export function onclickByTypeButton(){
    document.querySelector('.byTypeButton').
    addEventListener('click',()=>{
        const pokemonType = byTypeInput.value;
        console.log(pokemonType);
    }); 
}