export default class Human {
    constructor() {
        this.strength = 10;
        this.agility = 10;
        this.intelligence = 10;
        this.stamina = 10;
        this._hp = 10 * this.stamina;
        this.primaryAttribute = '';
        this.alive = true;
    }

    get healthPoint () {
        return this._hp;
    }

    set healthPoint(value) {
        this._hp = value;
    }

    get isAttackEvaded() {
        return Math.random() > (100 - this.agility) / 100;
    }

    get isCriticalStrike() {
        return Math.random() > (100 - this.agility) / 100;
    }

    get damage() {
        let crit = this.isCriticalStrike ? 2 : 1;
        if (crit === 2) console.log('CRITICAL DAMAGE!!!!');
        return this[this.primaryAttribute] * 1.5 * crit;
    }

    attackTarget(target) {
        if (target.alive && this.alive) {
            let targetAlive = target.recieveAttack(this.damage);
            console.log(`Your hp: ${this.healthPoint}; Target hp: ${target.healthPoint}`);
            if (!targetAlive) {
                console.log('target has been killed');
            }
        } else {
            console.log(this.alive ? 'Target is dead' : 'You are dead');
        }
    }

    recieveAttack(damage) {
        let evade = this.isAttackEvaded;
        if (evade) console.log('ATTACK HAS BEEN EVADED!!!');
        this.healthPoint = this.healthPoint - (evade ? 0 : damage);
        this.alive = this.healthPoint > 0 ? true : false;
        return this.alive;
    }

}