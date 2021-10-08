
// Уровень 1) 
// Есть два корабля, первый корабль имеет  HP (Health Points) 100, Damage 4, второй корабль имеет HP 40, damage 15. Описать объектами.
// В одной итерации стреляют друг в друга. Вывести лог боя. Определить победителя.

const ship1 = {    
  healthPoints1: 100, 
	damage1: 4,
};

const ship2 = {    
  healthPoints2: 40, 
	damage2: 15,
};

let shut1 = ship1.damage1;
let shut2 = ship2.damage2;

let hp1 = ship1.healthPoints1;
let hp2 = ship2.healthPoints2;

 do {
  hp1 -= shut2;
  hp2 -= shut1;
} while (hp1 > 0 || hp2 > 0);

console.log(hp1, hp2);

if (hp1 > hp2) {
  alert(`Победитель Первий корабль`)
} else {
  alert(`Победитель Второй корабль`)
}

// Уровень 2) 
// Два флота, во флотах 4 типа кораблей: эсминцы hp 45 dmg 10, линкоры hp 100 dmg 4, авианосцы hp 15 dmg 40, крейсеры hp 60 dmg 8. 
// Создаются флот из 10 кораблей случайного типа. Выстрел по случайному кораблю, случайным кораблём. Как только у корабля заканчиваются HP он утонул и бой продолжается пока не закончатся корабли


// const arrWar = [
// 	{name: 'destroyer' , healthPoints: 45, damage: 10},
// 	{name: 'battleship' , healthPoints: 100, damage: 4},
// 	{name: 'aerocarrier' , healthPoints: 15, damage: 40},
// 	{name: 'cruiser' , healthPoints: 60, damage: 8},
// ];

// arrFlot[i] = arrWar[i];
// const arrFlot = [];
// for ( i = 0; i < 10; i++ ) {
//       let a = Math.round( Math.random() * arrWar.length);
//       arrFlot.push(a);
      

//   }
// arrFlot[1] = arrWar[1];
//   console.log(arrFlot); 
