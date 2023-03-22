const API = "https://pokeapi.co/api/v2/pokemon/"
const hp = document.getElementById("hp")
const attack = document.getElementById("attack")
const defense = document.getElementById("defense")
const special_defense = document.getElementById("specialDef")
const specil_attack = document.getElementById("specialAtk")
const speed = document.getElementById("speed")
const searchBtn = document.getElementById("search")
const searchInput = document.getElementById("searchInput")
const pokemonName = document.getElementById("pokeName")

searchInput.addEventListener("keydown", (event)=> {    
    if (event.key === "Enter") {
        console.log(data);
        showStats(data)
    
       }          
})
searchBtn.addEventListener("click", ()=> {
    if(!searchInput.value) {
       return alert("El campo no puede estar vacio!")
    }
    console.log(searchInput.value)
    showStats(searchInput.value.toLowerCase())
})

async function showStats(pokemon) {
   try {
    const pokeData = await getPokemonStats(pokemon)
    const stats = pokeData.stats
    pokemonName.textContent = pokeData.name.toUpperCase()
    hp.textContent = `HP: ${stats[0].base_stat}`
    attack.textContent = `ATK: ${stats[1].base_stat}`
    defense.textContent = `DEF: ${stats[2].base_stat}`
    special_defense.textContent = `SPDEF: ${stats[3].base_stat}`
    specil_attack.textContent = `SPATK: ${stats[4].base_stat}`
    speed.textContent = `SPEED: ${stats[5].base_stat}`
   
     console.log(stats);
    }catch(error) {
        pokemonName.textContent = "Pokemon Not Found!"
        hp.textContent = `HP: 0`
        attack.textContent = `ATK: 0`
        defense.textContent = `DEF: 0`
        special_defense.textContent = `SPDEF: 0`
        specil_attack.textContent = `SPATK: 0`
        speed.textContent = `SPEED: 0`
   }
   

} 




async function getPokemonStats(nameOrId) {
    
    const pokemonInfo = await fetch(`${API}${nameOrId}`)
    const pokemon = await pokemonInfo.json()
     
    
    return pokemon
   
    
   
}

showStats(Math.floor(Math.random() * 150 + 1))

