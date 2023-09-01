let knight = new Knight('Fulano Knight');
console.log(knight.name);
console.log(knight.attack);
console.log(knight.defense);
console.log(knight.life);
console.log(knight.maxLife);

console.log('------------------------------------------------------')

<<<<<<< HEAD
let sorcerer = new Sorcerer('Cicrano Sorcerer');
=======
let sorcerer = new Sorcerer('Fulano Sorcerer');
>>>>>>> 1e9daa4678d05ef51302decabc425cf3e99da82c
console.log(sorcerer.name);
console.log(sorcerer.attack);
console.log(sorcerer.defense);
console.log(sorcerer.life);
console.log(sorcerer.maxLife);

console.log('------------------------------------------------------')

let littleMonster = new LittleMonster();
console.log(littleMonster.name);
console.log(littleMonster.attack);
console.log(littleMonster.defense);
console.log(littleMonster.life);
console.log(littleMonster.maxLife);

console.log('------------------------------------------------------')

let bigMonster = new BigMonster();
console.log(bigMonster.name);
console.log(bigMonster.attack);
console.log(bigMonster.defense);
console.log(bigMonster.life);
console.log(bigMonster.maxLife);

console.log('------------------------------------------------------')

let log = new Log(document.querySelector('.log'));


const stage = new Stage(
    sorcerer,
    littleMonster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log

);

stage.start();