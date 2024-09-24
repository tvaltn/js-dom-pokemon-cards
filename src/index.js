// Here we could technically add several images, and store it within the pokemon object in data.js, but this works for just alternating between the two images in the other section of sprites...
const cardImages = ['official-artwork', 'dream_world']

const cards = document.querySelector(".cards")

function populateCardImages() {
    cardImages.push()
}

function renderCards() {
    data.map((pokemon) => {
        // Store the image reference in data
        pokemon.image = 0
        const li = renderCard(pokemon)
        cards.appendChild(li)
    })
}

function renderCard(pokemon) {
    const li = document.createElement("li")
    li.setAttribute("class", "card")

    const h2 = document.createElement("h2")
    h2.setAttribute("class", "card--title")
    h2.innerText = capitalizeName(pokemon.name)

    const img = document.createElement("img")
    img.setAttribute("width", "256")
    img.setAttribute("height", "256")
    img.setAttribute("class", "card--img")
    img.setAttribute("src", pokemon.sprites.other[cardImages[pokemon.image]].front_default)

    const ul = document.createElement("ul")
    ul.setAttribute("class", "card--text")
    const hp = document.createElement("li")
    hp.innerText = "HP: " + pokemon.stats[0].base_stat
    const atk = document.createElement("li")
    atk.innerText = "ATTACK: " + pokemon.stats[1].base_stat
    const def = document.createElement("li")
    def.innerText = "DEFENSE: " + pokemon.stats[2].base_stat
    const specAtk = document.createElement("li")
    specAtk.innerText = "SPECIAL-ATTACK: " + pokemon.stats[3].base_stat
    const specDef = document.createElement("li")
    specDef.innerText = "SPECIAL-DEFENSE: " + pokemon.stats[4].base_stat
    const spd = document.createElement("li")
    spd.innerText = "SPEED: " + pokemon.stats[5].base_stat

    ul.appendChild(hp)
    ul.appendChild(atk)
    ul.appendChild(def)
    ul.appendChild(specAtk)
    ul.appendChild(specDef)
    ul.appendChild(spd)

    li.appendChild(h2)
    li.appendChild(img)
    li.appendChild(ul)

    games = renderGames(pokemon)
    li.appendChild(games)

    // Add a click option on the li, changing the image shown
    li.addEventListener("click", () => {
        // If the array had more than 2 elements, we could keep track of an index, increment by 1 for each click, and after it reaches max length, start at 0 again
        if (pokemon.image === 0) pokemon.image = 1
        else if (pokemon.image === 1) pokemon.image = 0
        img.setAttribute("src", pokemon.sprites.other[cardImages[pokemon.image]].front_default)
    })

    return li
}

// Helper function to call from renderCard to render all games
function renderGames(pokemon) {
    const ul = document.createElement("ul")
    ul.setAttribute("class", "games")
    
    pokemon.game_indices.map((game) => {
        const li = document.createElement("li")
        li.setAttribute("class", "game")
        li.innerText = capitalizeName(game.version.name)
        ul.appendChild(li)
    })

    return ul
}

// Helper functions...
function capitalizeName(name) {
    return name[0].toUpperCase() + name.slice(1)
}

// Initiation...
renderCards()