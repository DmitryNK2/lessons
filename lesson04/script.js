
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

let butgetDay;
money = prompt("Введите ваш месячный доход");
addExpenses = prompt('Перечислите возможные  расходы за рассчитываемый период через запятую');
console.log(addExpenses);
deposit = confirm("Есть ли у вас депозит в банке?");
expenses1 = prompt("Введите обязательную статью расходов");
amount1 = prompt("Во сколько это обойдется?");
expenses2 = prompt("Введите обязательную статью расходов");
amount2 = prompt("Во сколько это обойдется?");  

function getExpensesMonth(){
    let x = parseFloat(amount1) + parseFloat(amount2);
    return x;
}
console.log(getExpensesMonth());

function getAccumulatedMonth(){
    let x = money-amount1-amount2;
    return x;
}
let accumulatedMonth = getAccumulatedMonth();

butgetDay = accumulatedMonth/30;
console.log(Math.floor(accumulatedMonth/30));

function getTargetMonth(){
    let x = Math.ceil(mission/accumulatedMonth);
    return x;
}
console.log(getTargetMonth())

if(butgetDay > 1200){
    alert('У вас высокий уровень дохода');
}
if(butgetDay > 600 && butgetDay <= 1200){
    alert('У вас средний уровень дохода');
}
if(butgetDay >= 0 && butgetDay <= 600){
    alert('К сожалению у вас уровень дохода ниже среднего');
}
if(butgetDay < 0){
    alert('Что то пошло не так');
}