/* this code remembers the pokedex number of the pokemon clicked in index.html, 
stores the value in local storage as 'pokemonNumber'*/

export function getPokedexNumber(){
    document.addEventListener('DOMContentLoaded',()=>{
        if(document.querySelectorAll('.pokedata')){
            document.querySelectorAll('.pokedata').forEach((pokemon)=>{
                pokemon.addEventListener('click',()=>{
                    const pokedexNumber =pokemon.querySelector('.pokemon').dataset.pokedexnumber;
                    localStorage.setItem('pokemonNumber',pokedexNumber);
                });
            });
        }
        
    })
}