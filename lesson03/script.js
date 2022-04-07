
let money = 11000;
let income = "фриланс";
let addExpenses = "Интернет, такси, коммуналка";
let deposit = true;
let mission = 500000;
let period = 12;
let budgetMonth;
let expenses1;
let expenses2;
let amount1;
let amount2;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log(addExpenses.length);

console.log("Период равен " + period + " месяцев");
console.log("цель заработать " + mission + " рублей");

console.log(addExpenses.toLowerCase());

let butgetDay = money / 30;

console.log(butgetDay);

money = prompt("Введите ваш месячный доход");
console.log(money);
addExpenses = prompt('Перечислите возможные  расходы за рассчитываемый период через запятую');
console.log(addExpenses);
deposit = confirm("Есть ли у вас депозит в банке?");
expenses1 = prompt("Введите обязательную статью расходов");
amount1 = prompt("Во сколько это обойдется?");
expenses2 = prompt("Введите обязательную статью расходов");
amount2 = prompt("Во сколько это обойдется?");  

budgetMonth = money-amount1-amount2;
console.log(budgetMonth);
console.log(`Количество месяцев, за которые будет достигнута цель равно ${Math.ceil(mission/budgetMonth)}`);

butgetDay = budgetMonth/30;
console.log(Math.floor(budgetMonth/30));

if(butgetDay > 1200){
    console.log('У вас высокий уровень дохода');
    alert('У вас высокий уровень дохода');
}
if(butgetDay > 600 && butgetDay <= 1200){
    console.log('У вас средний уровень дохода');
    alert('У вас средний уровень дохода');
}
if(butgetDay >= 0 && butgetDay <= 600){
    console.log('К сожалению у вас уровень дохода ниже среднего');
    alert('К сожалению у вас уровень дохода ниже среднего');
}
if(butgetDay < 0){
    console.log('Что то пошло не так');
    alert('Что то пошло не так');
}
