/**
 * Once upon a time...
 */

class Vampire {
    constructor(props) {
        this.location = props.location;
        this.birthDate = props.birthDate;
        this.deathDate = props.deathDate;
        this.weakness = props.weakness;
    }

    get age() {
        return this.calcAge();
    }

    calcAge() {
        return this.deathDate - this.birthDate;
    }
}

// ...there was a woman named Camula

const Camula = new Vampire({
    location: 'Styria',
    birthDate: 1428,
    deathDate: 1476,
    weakness: ['Sunlight', 'Garlic']
});
