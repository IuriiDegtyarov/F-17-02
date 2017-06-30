import Mage from './mage';
import Warrior from './warrior';

let mage = new Mage();
let warrior = new Warrior();

console.log(mage, warrior);

window.mage = mage;
window.warrior = warrior;