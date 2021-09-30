let money = +prompt('Ваш бюджет на месяц?');
let time = prompt("Введите дату в формате", 'YYYY-MM-DD');
let necExp = prompt("Введите обязательную статью расходов");
let sumExp = +prompt("Во сколько это обойдется?");
let expences ={
    [necExp]: sumExp
};

let optionalExpences ={}; 
let income =[];
let appData = {
    budget: money,
    timeData: time,
    expences,
    optionalExpences,
    income
};

let budgetPerDay = alert("Бюджет в день: " + money/30);

console.log(expences);
console.log(budgetPerDay);
console.log(appData);
console.log(expences);
console.log(money);
console.log(time);
