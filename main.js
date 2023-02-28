import {Tamagotchi} from "./module/script.js";

document.querySelector('#tamagotchiButton').addEventListener('click', (event) => {
    event.preventDefault();
    
    let input = document.querySelector('#tamagotchiName').value;
    let select = document.querySelector('#tamagotchiAnimal').value;

    let tamagotchi = new Tamagotchi (input, select);
    tamagotchi.createTamagotchi();
})