// Задача №1
// Дано => массив различный данных (у нас это в основном типы просто для разнообразия).
// Необходимо => c помощью цикла for вывести в консоль только те элементы массива
// которые являются ложными (falsy) а так же их порядковый номер в массиве (или его еще называют индексом)
// пример вывода в консоль для одного из элементов - undefined, index - 1
// Где:
// 'undefined' - это элемент массива;
// ', ' - запятая и пробел просто для разделения значений
// 'index - ' - это просто строка которая обозначает что следом идет порядковый номер
// '1' - это сам порядковый номер массива (индекс) о чем предупреждает строка выше

const data1 = [
  null,
  undefined,
  false,
  "string",
  0,
  9999999999999999n,
  Symbol("id"),
  { itIsObject: true },
  [0, 11, 22, 33],
]


 for (let i = 0; i <= data1.length-1; ++i){
     let filtered = (!data1[i]) ? console.log(`${data1[i]}, index-${i}`) : null;
 }

// Задача №2
// Дано => все тот же массив 'data'
// Необходимо => используя все тот же цикл for а так же логические операторы
// вывести в консоль только те элементы массива которые являются или объектом (object) или массивом

// const data2 = [
//     null,
//     undefined,
//     false,
//     'string',
//     0,
//     9999999999999999n,
//     Symbol('id'),
//     { itIsObject: true },
//     [0, 11, 22, 33],
// ];

//  for (let i = 0; i <= data2.length; ++i) {
//         if (
//           typeof data2[i] === "object" ||
//           typeof data2[i] === "array"
//         ) {
//           console.log(data2[i] + `, index-${i}`)
//         }
//     }



// Задача №3
// Существует пустой объект 'personInfo'
// Необходимо заполнить его информацией и использовать при этом минимум кода
// Полная свобода действий, никаких ограничений по использованию функций / методов / циклов для заполнения объекта
// Базовый объект можно редактировать / модифицировать как вам удобно

// let personInfo = {
//     firstName: null,
//     surName: null,
//     sex: null,
//     age: null,
//     weight: null,
//     height: null,
//     isMarried: null,
//     hasChildren: null,
// }
// for (let key in personInfo){
//     personInfo.firstName = "Nick";
//     personInfo.surName = "Smith";
//     personInfo.sex = "Male";
//     personInfo.age = +"14";
//     personInfo.weight = +"40";
//     personInfo.height = +"140";
//     personInfo.isMarried ="single";
//     personInfo.hasChildren = "No kids";
// }
// console.log(personInfo)