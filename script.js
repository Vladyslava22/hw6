// – Знайти та вивести довжину наступних стрінгових значень
//
//  ‘hello world’
//
// ‘lorem ipsum’
//
// ‘javascript is cool’

let s1 = 'hello world';
console.log(s1.length);
let s2 = 'lorem ipsum';
console.log(s2.length);
let s3 = 'java is cool';
console.log(s3.length);

// – Перевести до великого регістру наступні стрінгові значення
// ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
let s = 'hello world';
const s4 = s.toUpperCase();
console.log(s4);

let i = 'lorem ipsum';
const i1 = i.toUpperCase();
console.log(i1);

let y = 'javascript is cool';
const y2 = y.toUpperCase();
console.log(y2);

// – Перевести до нижнього регістру наступні стрінгові значення
// ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’
//
let v = 'HELLO WORLD';
const v1 = v.toLowerCase();
console.log(v1);
let d = 'LOREM IPSUM';
const d1 = d.toLowerCase();
console.log(d1);
let x = 'JAVASCRIPT IS COOL';
const x1 = x.toLowerCase();
console.log(x1);

// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
let str = ' dirty string   '
const n = str.trim;
console.log(n);

// – Напишіть функцію stringtoArray(str), яка перетворює рядок на масив слів.
//     let str = ‘Ревуть воли як ясла повні’;
// let arr = strintgoArray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
function stringToArray (str) {
    if (str) {
        return str.split('');
    }
    return '';
}
console.log(stringToArray(null));

// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.
const numbers = [10,8,-7,55,987,-1011,0,1050,0];
const strings = numbers.map(number => { return number + ''})
console.log(strings);

// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
function sortNums(arrayOfNums, direction) {
    const sort = arrayOfNums.sort((a,b) => a-b);
    if (direction === 'ascending') {
        return sort;
    }
    if (direction === 'descending') {
        return sort.reverse();
    }
}
console.log(sortNums(numbers,'ascending'))

// – є масив
//
// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//
// {title: ‘Java Complex’, monthDuration: 6},
//
// {title: ‘Python Complex’, monthDuration: 6},
//
// {title: ‘QA Complex’, monthDuration: 4},
//
// {title: ‘FullStack’, monthDuration: 7},
//
// {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
//  — відсортувати його за спаданням за monthDuration
// — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];

// 1. sort
coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);

console.log(coursesAndDurationArray);

// 2. filter
let filteredCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);

console.log(filteredCourses);

// 3. map
let mappedCourses = coursesAndDurationArray.map((course, index) => {
    return {
        id: index + 1,
        title: course.title,
        monthDuration: course.monthDuration
    };
});
console.log(mappedCourses);













