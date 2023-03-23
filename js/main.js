console.log("ola");
const BASE_URL = "https://pokeapi.co/api/v2/";
const ENDPOINT = "pokemon/"
const hp = document.getElementById("hp")
const attack = document.getElementById("attack")
const defense = document.getElementById("defense")
const special_attack = document.getElementById("specialAttack")
const special_defense = document.getElementById("specialDefense")
const speed = document.getElementById("speed")
const pokemonName = document.getElementById("pokemonName")
const pokemonImg = document.getElementById("pokemonImg")
const menuIcon = document.getElementById("menuIcon")
const menu = document.getElementById("menu")
const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")


/* Eventos */

menuIcon.addEventListener("click", ()=> {
    if(!menu.classList.contains("active")) {
        menu.classList.add("active")
        menuIcon.src = "/images/icons8-pokeball-abierto-48.png"

    } else {
        menu.classList.remove("active")
        menuIcon.src = "/images/icons8-pokeball-48.png"
    }   
})

searchBtn.addEventListener("click", ()=> {
    showPokeStats(searchInput.value.toLowerCase())
})

searchInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        showPokeStats(searchInput.value.toLowerCase())
    }
})


const random = Math.floor(Math.random() * 100 + 1)

// Funcion para obtener data general del Pokemon buscado

async function getPokemonData(id) {

const pokemonData = await fetch(`${BASE_URL}${ENDPOINT}${id}`)
const data = await pokemonData.json()
return data
}

// Funcion para desplegar los datos necesarios

async function showPokeStats(id) {   
    
    try {
        const data = await getPokemonData(id)
   
    pokemonImg.src = `${data.sprites.front_default}`
    pokemonName.textContent = `${data.name.toUpperCase()}`
    hp.textContent = `${data.stats[0].base_stat}`
    attack.textContent = `${data.stats[1].base_stat}`
    defense.textContent = `${data.stats[2].base_stat}`
    special_attack.textContent = `${data.stats[3].base_stat}`
    special_defense.textContent = `${data.stats[4].base_stat}`
    speed.textContent = `${data.stats[5].base_stat}`
    } catch(error) {
        alert ("Ese pokemon no existe")
    }
     
    
}
showPokeStats(random)






