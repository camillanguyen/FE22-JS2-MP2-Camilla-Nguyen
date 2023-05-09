class Tamagotchi {
    #hunger
    #happiness

    constructor(name, animal) {
        this.name = name;
        this.animal = animal;
        this.#hunger = 10;
        this.#happiness = 10;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    decreaseHunger() {
        setInterval(() => {
            if (this.hunger > 0) {
                this.hunger--;
            }
        }, this.getRandomInt(1000, 6000));
    }

    decreaseHappiness() {
        setInterval(() => {
            if (this.happiness > 0) {
                this.happiness--;
            }
        }, this.getRandomInt(1000, 6000));
    }


    getHunger() {
        return this.#hunger;
    }

    getHappiness() {
        return this.#happiness;
    }

    setHunger(updatedHunger) {
        this.#hunger = updatedHunger;
    }

    setHappiness(updatedHappiness) {
        this.#happiness = updatedHappiness;
    }


    createTamagotchi() {
        const input = document.querySelector('input').value;
        const select = document.querySelector('select');
        const animal = select.options[select.selectedIndex].value;

        const container = document.querySelector('#container');
        const tamagotchiContainer = document.createElement('div');


        //Hunger & Happiness
        const hungerP = document.createElement('p');
        const happinessP = document.createElement('p');


        const playButton = document.createElement('button');
        playButton.innerText = 'Play';

        const feedButton = document.createElement('button');
        feedButton.innerText = 'Feed';



        let tamagotchiName = document.createElement('h3');

        let tamagotchi = new Tamagotchi(input, animal);
        let hunger = tamagotchi.getHunger();
        let happiness = tamagotchi.getHappiness();

        feedButton.addEventListener('click', (event) => {
            event.preventDefault();
            if (hunger >= 10) {
                const maxHunger = document.createElement('p');

                maxHunger.innerText = 'Your Tamagotchi is full';
                maxHunger.style.color = 'green';
                tamagotchiContainer.append(maxHunger);
                container.append(tamagotchiContainer);

                setTimeout(function () {
                    maxHunger.remove();

                }, 1000);
            }
            else {
                hunger++
            }
        })

        playButton.addEventListener('click', (event) => {
            event.preventDefault();
            if (happiness >= 10) {
                const maxHappiness = document.createElement('p');

                maxHappiness.innerText = 'Your Tamagotchi is on cloud 9';
                maxHappiness.style.color = 'green';

                tamagotchiContainer.append(maxHappiness);
                container.append(tamagotchiContainer);

                setTimeout(function () {
                    maxHappiness.remove();

                }, 1000);

            }
            else {
                happiness++
            }
        })



        let interval = this.getRandomInt(1000, 6000);
        let hungerInterval = setInterval(function () {
            hungerP.innerHTML = `Hunger: ${hunger--}`;
            if (hunger < 0) {
                clearInterval(hungerInterval);
                clearInterval(happinessInterval)
                const dead = document.createElement('p');
                dead.innerText = 'Your Tamagotchi passed away';
                dead.style.color = 'red';
                hunger += 0;
                tamagotchiContainer.append(dead);
                container.append(tamagotchiContainer);
                feedButton.disabled = true;
                playButton.disabled = true;
            }
        }, interval);

        interval = this.getRandomInt(1000, 3000);
        let happinessInterval = setInterval(function () {
            happinessP.innerHTML = `Happiness: ${happiness--}`;
            if (happiness < 0) {
                clearInterval(happinessInterval);
                clearInterval(hungerInterval);
                const dead = document.createElement('p');
                dead.innerText = 'Your Tamagotchi passed away';
                dead.style.color = 'red';
                happiness += 0;
                tamagotchiContainer.append(dead);
                container.append(tamagotchiContainer);
                feedButton.disabled = true;
                playButton.disabled = true;
            }
        }, interval);



        if (animal == 'Bear') {

            tamagotchiName.innerText = `${input} the ${animal}`;
            const image = document.createElement('img');
            image.src = 'images/bear3.png';

            tamagotchiContainer.append(tamagotchiName, image, happinessP, hungerP, playButton, feedButton);

            tamagotchiContainer.style.border = '2px solid hotpink';
            tamagotchiContainer.style.borderRadius = '2rem'
            tamagotchiContainer.style.width = '200px';
            tamagotchiContainer.style.margin = '10px';
            tamagotchiContainer.style.padding = '10px';
            tamagotchiContainer.style.display = 'flex';
            tamagotchiContainer.style.flexDirection = 'column';


            container.append(tamagotchiContainer);

        }
        else {
            tamagotchiName.innerText = `${input} the ${animal}`;

            const image = document.createElement('img');
            image.src = 'images/koala1.png'


            tamagotchiContainer.append(tamagotchiName, image, happinessP, hungerP, playButton, feedButton);

            tamagotchiContainer.style.border = '2px solid hotpink';
            tamagotchiContainer.style.borderRadius = '2rem'
            tamagotchiContainer.style.width = '200px';
            tamagotchiContainer.style.margin = '10px';
            tamagotchiContainer.style.padding = '10px';
            tamagotchiContainer.style.display = 'flex';
            tamagotchiContainer.style.flexDirection = 'column';

            container.append(tamagotchiContainer);

        }

        tamagotchi.decreaseHappiness();
        tamagotchi.decreaseHunger();
        console.log(tamagotchi)
    }

}

export { Tamagotchi };