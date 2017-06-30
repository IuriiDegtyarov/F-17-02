import Human from './human';

export default class Warrior extends Human {
    constructor() {
        super();
        this.agility = 25;
        this.strength = 15;
        this.stamina = 15;
        this.intelligence = 5;
        this.primaryAttribute = 'strength';
    }
}