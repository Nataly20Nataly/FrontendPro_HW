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
const string = prompt("Add some string", "Hello World")
const action1 = prompt("What kind of action do you want to get?", "add string")
const number = prompt("Add some number", 1)
const action2 = prompt("What kind of action do you want to get?", "add number")
const bigint = prompt("Add some bigint", 12)
const action3 = prompt("What kind of action do you want to get?", "add bigint")
const Null = prompt("Don`t add something")
const action4 = prompt("What kind of action do you want to get?", "add null")
const Undefined = prompt("Add something")
const action5 = prompt("What kind of action do you want to get?")
const boolean = prompt("Add boolean", "1 > 2")
const action6 = prompt("What kind of action do you want to get?", "add boolean")
const object = prompt("Add some object", 1)
const action7 = prompt("What kind of action do you want to get?", "add object")

const symbol = prompt("Add some symbol", "ooo")
const action8 = prompt("What kind of action do you want to get?", "add symbol")

function addString(string) {
  result.push(string)
}

function addNumber(number) {
  result.push(Number(number))
}

function addBigInt(bigint) {
  result.push(BigInt(bigint))
}

function addNull(Null) {
  result.push(null)
}

function addUndefined(undefined) {
  result.push(undefined)
}

function addBoolean(boolean) {
  result.push(Boolean(1 > 2))
}
function addObj(object) {
  result.push(Object(object))
}
function addSmb(symbol) {
  result.push(Symbol(symbol))
}

if (
  action1 === "add string" ||
  action2 === "add number" ||
  action3 === "add bigint" ||
  action4 == "add null" ||
  action5 === undefined ||
  action6 === "add boolean" ||
  action7 === "add object" ||
  action8 === "add symbol"
) {
  addString(string)
  addNumber(number)
  addBigInt(bigint)
  addNull(Null)
  addUndefined(undefined)
  addBoolean(boolean)
  addObj(object)
  addSmb(symbol)
}
console.log("result", result)

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
