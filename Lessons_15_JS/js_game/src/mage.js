import Human from './human';

export default class Mage extends Human {
    constructor() {
        super();
        this.agility = 25;
        this.strength = 5;
        this.stamina = 10;
        this.intelligence = 20;
        this.primaryAttribute = 'intelligence';
    }

    get spellDamage() {
        return this.intelligence + this.intelligence * 0.8;
    }

    castFireBall(target) {
        if (target.alive && this.alive) {
            let targetAlive = target.recieveAttack(this.spellDamage);
            console.log(`Your hp: ${this.healthPoint}; Target hp: ${target.healthPoint}`);
            if (!targetAlive) {
                console.log('target has been killed');
            }
        } else {
            console.log(this.alive ? 'Target is dead' : 'You are dead');
        }
    }
}