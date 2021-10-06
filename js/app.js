let money, time;
function start(){
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt("Введите дату в формате", 'YYYY-MM-DD');

    while(isNaN(money) || money == "" || money == null ){
        money = +prompt('Ваш бюджет на месяц?');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: true
};

function chooseExpenses(){
    for( let i=0; i < 2; i++){
        let necExp = prompt("Введите обязательную статью расходов");
        let sumExp = +prompt("Во сколько это обойдется?");
    if((typeof(necExp)) === 'string' && (typeof(necExp)) != null && (typeof(sumExp)) === 'number' 
        && (typeof(sumExp)) != null && necExp != '' && sumExp != '' && necExp.length < 50)
        {
            appData.expences[necExp] = sumExp;
        }else{
            i = i-1;
        }   
    }
}
chooseExpenses();

    appData.moneyPerDay = (appData.budget / 30).toFixed(2);

function chooseOptExpences(){
    for(let i =1; i<3; ++i){
        let optExp = prompt("Статья необязательных расходов");
        appData.optionalExpences[i] = optExp;
    }
    
}
chooseOptExpences();

alert('Бюджет в день: ' + appData.moneyPerDay);

function detectLevel(){
    if(appData.moneyPerDay < 100){
        console.log ('Низкий уровень достатка');
    } else if(appData.moneyPerDay >100 && appData.moneyPerDay <2000){
        console.log ('Средний уровень достaтка');
    }else if (appData.moneyPerDay > 2000){
        console.log ('Высокий уровень достатка');
    }else {
        console.log('Данные неккоректные');
    }
}
detectLevel();    

function checkSavings(){
    if (appData.savings === true){
        let save = +prompt("какова сумма накоплений");
        let percent = +prompt("под какой процент");
        appData.monthIncome = save/100 /12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();


/*
let i = 0;
while(i<2){
    i++;
    let necExp = prompt("Введите обязательную статью расходов");
    let sumExp = +prompt("Во сколько это обойдется?");
if((typeof(necExp)) === 'string' && (typeof(necExp)) != null && (typeof(sumExp)) === 'number' 
     && (typeof(sumExp)) != null && necExp != '' && sumExp != '' && necExp.length < 50)
    {
        appData.expences[necExp] = sumExp;
    }else{

    }
}

do{
    i++;
    let necExp = prompt("Введите обязательную статью расходов");
    let sumExp = +prompt("Во сколько это обойдется?");
if((typeof(necExp)) === 'string' && (typeof(necExp)) != null && (typeof(sumExp)) === 'number' 
     && (typeof(sumExp)) != null && necExp != '' && sumExp != '' && necExp.length < 50)
    {
        appData.expences[necExp] = sumExp;
    }else{

    }
}
while(i<2);
*/
