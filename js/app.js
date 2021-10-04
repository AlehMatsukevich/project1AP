let money = +prompt('Ваш бюджет на месяц?');
let time = prompt("Введите дату в формате", 'YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: []
};

for( let i=0; i < 2; i++){
    let necExp = prompt("Введите обязательную статью расходов");
    let sumExp = +prompt("Во сколько это обойдется?");
if((typeof(necExp)) === 'string' && (typeof(necExp)) != null && (typeof(sumExp)) === 'number' 
     && (typeof(sumExp)) != null && necExp != '' && sumExp != '' && necExp.length < 50)
    {
        appData.expences[necExp] = sumExp;
    }else{

    }
    
}
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
appData.moneyPerDay = appData.budget / 30;
alert('Бюджет в день: ' + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
    console.log ('Низкий уровень достатка');
} else if(appData.moneyPerDay >100 && appData.moneyPerDay <2000){
    console.log ('Средний уровень достфтка');
}else if (appData.moneyPerDay > 2000){
    console.log ('Высокий уровень достатка');
}else {
    console.log('Данные неккоректные');
}
