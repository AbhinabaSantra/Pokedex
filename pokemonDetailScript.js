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



document.addEventListener('DOMContentLoaded',()=>{
    if(document.querySelectorAll('.pkedata')){
        document.querySelectorAll('.pokedata').forEach((pokemon)=>{
            pokemon.addEventListener('click',()=>{
                const name =pokemon.querySelector('.pokemon').dataset.name;
                localStorage.setItem('pokemonName',name);
            });
        });
    }
    if(document.querySelector('.page2')){
        const selectedPokemon = localStorage.getItem('pokemonName');
        if (selectedPokemon) {
            document.title=selectedPokemon; 
            
        }
    }
})






