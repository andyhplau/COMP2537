toAdd = ''

function processPokeResp(data) {
    console.log(data)
    // 3- process the response and extract the img
    toAdd += `
    ${data.name}
    <div class='image_container'>
    <a href='/profile/${data.id}'>
    <img src='${data.sprites.other["official-artwork"].front_default}'>
    </a>
    </div>`
}

async function loadNineImages() {
    for (i = 1; i <= 9; i++) { // add 9 times
        if (i % 3 == 1) { // only when i = 1, 4, 7
            toAdd += `<div class='images_col'>`
        }

        // 1- generate random numbers
        x = Math.floor(Math.random() * 100) + 1

        // 2- init a AJAX request to pokeapi.co
        await $.ajax({
            type: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${x}/`,
            success: processPokeResp
        })

        if (i % 3 == 0) { // only when i = 3, 6, 9
            toAdd += `</div>`
        }
    }
    $('#images_div').html(toAdd)
}

function setup() {
    loadNineImages();
}

$(document).ready(setup)