/*
# 1) Создать массив содержащий все типы данных которые мы изучили
# - спрашиваем у пользователя 2 операнда (2 промта).
# - первым будет добавляемый тип, вторым экшен для преобразования соответствующего типа.
# - добавляем готовый результат в массив.
# - в конце всех операций выводим получившийся массив в консоль.
# - массив должен содержать все 8 типов данных JavaScript.
#
*/
const result = []
const string = prompt("Add some string", "Hello World");
const action1 = prompt("Do u want to add str?", "Add my string");

const number = prompt("What is your luck number?", 4);
const action2 = prompt("Do u want to add number?", "Add my number");

const bigint = prompt("Add a long number (>16)", 5222457593127564);
const action3 = prompt("Your a long number will be BigInt. Do u want to add?", "Add my bigint");


const boolean = prompt("Compare any number", "6 > 2");
const action6 = prompt("Is this right compare?", "Yes. Add boolean");


const undef = prompt("Don`t write something", "");
const action4 = prompt("Do u want to add undefined role?", "");

const Null = prompt("Write there \"null\"", "null");
const action5 = prompt("We add in array value null", "Okay");

const object = {
  TimeOfITLesson: prompt("How long is the IT lesson?","two hours"),
  HomeworkNumber: prompt("What homework is?", "This`s second hw")
};
const action7 = prompt(
  "What kind of action do you want to get?",
  "Add my info in object"
);

const symbol = prompt("Add something", "name");
const action8 = prompt(
  "What kind of action do you want to get?",
  "Add my symbol"
);

function addString(string) {
  result.push(string);
}

function addNumber(number) {
  result.push((+number));
}

function addBigInt(bigint) {
  result.push(BigInt(bigint));
}

function addUndefined(undef) {
  result.push(undefined);
}

function addNull(Null) {
  result.push(null);
}

function addBoolean(boolean) {
  result.push( Boolean(boolean));
}

function addObj(object) {
  result.push(Object(object));
}

function addSmb(symbol) {
  result.push(Symbol(symbol));
}

if (
  (action1 === "Add my string",
  action2 === "Add my number",
  action3 === "Add my bigint",
  action4 === "",
  action5 === "Okay",
  action6 === "Yes. Add boolean",
  action7 === "Add my info in object",
  action8 === "Add my symbol")
) {
  addString(string)
  addNumber(number)
  addBigInt(bigint)
  addUndefined(undef)
  addNull(Null)
  addBoolean(boolean)
  addObj(object)
  addSmb(symbol)
} else {
  alert("You can try again")
}
console.log("result", result )




/* 
# 2) Написать скрипт который будет выполнять математические операции
# - спрашиваем у пользователя 3 операнда (3 промта).
# - написать функции для всех операций (сложение, вычитание, умножение, деление, деление по модулю).
#   Каждая функция считает результат и выводит в консоль "Результат [название операции]: 2+3 = 5",
#   где 2 и 3 то что ввел пользователь в первых двух промтах, а "+" это операция для которой написана функция,
#   это не обязательно должен быть символ операции (+, -, *, /, %) может быть и текст. 
# - использовать if else или switch case для вызова необходимой функции. 
*/
const a = 2
const b = 5
const firstquest = prompt("Укажите число", a)
const secondtquest = prompt("Укажите число", b)
const thirdquest = prompt(`Укажите тип вычисление из предложенных вариантов: 
* сложение или + ;
* вычитание или - ;
* деление или / ;
* деление без остатка или % ;`)

function sum(a, b) {
  return "Результат сложения: 2 + 5 = " + (a + b)
}

function subt(a, b) {
  return "Результат вычитания: 2 - 5 = " + (a - b)
}

function multi(a, b) {
  return "Результат умножения: 2 * 5 = " + a * b
}

function division(a, b) {
  return "Результат деление: 2 / 5 = " + a / b
}

function withoutBalance(a, b) {
  return "Результат деление без остатка: 2 % 5 = " + (a % b)
}

switch (thirdquest) {
  case "сложение":
  case "+":
    console.log(sum(a, b))
    break
  case "вычитание":
  case "-":
    console.log(subt(a, b))
    break
  case "умножение":
  case "*":
    console.log(multi(a, b))
    break
  case "деление":
  case "/":
    console.log(division(a, b))
    break
  case "деление без остатка":
  case "%":
    console.log(withoutBalance(a, b))
}