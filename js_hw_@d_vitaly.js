//  1. Создать переменную a
let a;

//  2. Создать переменную b
let b;

//  4. Присвоить a - число 50, b - число 20
a = 50;
b = 20;

//  3. Создать переменную c и присвоить ей сумму a и b, деленную на произведение a и b
let c = (a + b) / (a * b);

//  4. Вывести c
console.log('c = ' + c);

//  5. Вывести с, a и b в одну строку через запятую
console.log(`a = ${a}, b = ${b}, c = ${c}`);

//  6. Вывести сумму a + b + с , разницу между a и b и остаток от деления a на b в одну строку, не используя других переменных в виде:
//      "Сумма a, b и с == ... , Дельта a и b == ... , Остаток от деления a на b == ... "
console.log(`Сумма a, b и с == ${a + b + c} , Дельта a и b == ${a - b} , Остаток от деления a на b == ${a % b} `);

//  1* Создать функцию, которая будет выводить утроенное значение остатка от деления произведения переменных "a" и "b" на их сумму.
function tripl(a, b) {
    console.log('Утроенное значение остатка от деления произведения переменных "a" и "b" на их сумму: ' + ((a * b) % (a + b)) * 3);
}

tripl(a, b);

//  2* Создать функцию, которая будет получать на вход число и на выходе будет писать - делится ли оно на 5 или делится ли оно на 11
//  Если число не делится ни на 5, ни на 11 - вывести " ... - скучное число "
function foobar(a) {
    if (!(a % 5) && !(a % 11)) {
        console.log(`${a} - супер веселое число, которое делится и на 5, и на 11 без остатка!`);
    } else if (!(a % 5)) {
        console.log(`${a} - слегка забавное число, которое делится только на 5 без остатка!`);
    } else if (!(a % 11)) {
        console.log(`${a} - слегка забавное число, которое делится только на 11 без остатка!`);
    } else {
        console.log(`${a} - скучное число`);
    }
}

foobar(5);

//  3*** Подумать и предусмотреть, какие случаи могут баговать предыдущую функцию и добавить проверки на невалидные вводы
//  в таких случаях вывести в чем ошибка ввода

const superFooBar = (a) => {
    if (typeof a == 'string') {console.log('О, я смотрю Вы тестировщик) Буквы нельзя делить!');}
    else if (typeof a == 'boolean') {console.log('О, я смотрю Вы тестировщик) Значения логического типа тоже нельзя делить!');}
    else if (typeof a == 'undefined') {console.log('О, я смотрю Вы тестировщик) Неопределенность тоже нельзя делить!');}
    else if (typeof a == 'null') {console.log('О, я смотрю Вы тестировщик) Ничто тоже нельзя делить!');}                // возможно лишее, т.к. это частный случай объекта
    else if (typeof a == 'object') {console.log('О, я смотрю Вы тестировщик) Объекты тоже нельзя делить!');}

else if (!(a % 5) && !(a % 11)) {
        console.log(`${a} - супер веселое число, которое делится и на 5, и на 11 без остатка!`);
    } else if (!(a % 5)) {
        console.log(`${a} - слегка забавное число, которое делится только на 5 без остатка!`);
    } else if (!(a % 11)) {
        console.log(`${a} - слегка забавное число, которое делится только на 11 без остатка!`);
    } else {
        console.log(`${a} - скучное число`);
    }

}
let r = [];
superFooBar(r);
