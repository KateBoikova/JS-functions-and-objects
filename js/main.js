// Таски на условия
// 1) Делится ли число на 5, или на 3, или на 2 без остатка?

const divisibleNum = Number(prompt("Enter any number: "));
if (divisibleNum % 5 === 0) {
  alert("Your number can be divided by 5");
} 
if (divisibleNum % 3 === 0) {
  alert("Your number can be divided by 3");
} 
if (divisibleNum % 2 === 0) {
  alert("Your number can be divided by 2");
} 
if (divisibleNum % 5 !== 0 && divisibleNum % 3 !== 0 && divisibleNum % 2 !== 0) {
  alert("Your number can not be devided by 2, 3 or 5");
}

// Таски на циклы (Only FOR)

// 1) Вывести факториал запрошенного числа. (5!=1*2*3*4*5)

const num = Number(prompt("Enter any number: "));
let factorial = 1;
for (let f = 1; f <= num; f++) {
  factorial = f * factorial;
}
alert("Factorial of " + num + " is " + factorial);


// 2) *вычислить сумму первых N элементов последовательности 1 + 1/2 + 1/3 + ...+ 1/N . параметр N задает пользователь

const denominator = Number(prompt("Enter any number (intended to be denominator): "));
for (let i = 1, sum = 0; i <= denominator; i++) {
  sum = sum + 1 / i;
  console.log(sum);
}

// 3) Найти произведение целых чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение всех чисел от 5 до 12).

let lim1 = Number(prompt("Enter initial number: "));
const lim2 = Number(prompt("Enter final number: "));
let product = 1
for (; lim1 <= lim2; lim1++) {
  product = product * lim1;
}
alert("Product of numbers from " + lim1 + " to " + lim2 + " is " + product);


// Таски на функции
// 0) Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие.
// Ожидаемый вывод:
isAdult(20); // true
isAdult(4); // false

const age = Number(prompt("Enter your age: "));
function isAdult(age) {
  if (age >= 18) {
    return "You are adult";
  } else {
    return "You are not adult";
  }
}
alert(isAdult(age));

// 1) *Функция, которая запрашивает число и проверяет простое ли оно (простое число делится без остатка на себя и на единицу)

const suggestedNumber = Number(prompt("Enter any number to see, if it is a prime number: "));
function isPrimeNumber(suggestedNumber) {
  const squareRoot = Math.sqrt(suggestedNumber);
  if (suggestedNumber === 1) {
    return "This is not a prime number";
  }
  for (let i = 2; i <= squareRoot; i++) {
    if (suggestedNumber % i === 0) {
      return "This is not a prime number";
    }
  }
  return "This is a prime number";
}
alert(isPrimeNumber(suggestedNumber)); 

// 2) Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе:

checkMultiplicity(25, 5) // true
checkMultiplicity(15, 3) // true
checkMultiplicity(15, 5) // true
checkMultiplicity(15, 4) // false

const num1 = Number(prompt("Enter any number: "));
const num2 = Number(prompt("Enter another number: "));
function checkMultiplicity(num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkMultiplicity(num1, num2));

// 3) Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет

const aSide = Number(prompt("Enter first triangle side length: "));
const bSide = Number(prompt("Enter second triangle side length: "));
const cSide = Number(prompt("Enter third triangle side length: "));

function isTriangleProbable(aSide, bSide, cSide) {
  if (aSide + bSide > cSide && aSide + cSide > bSide && bSide + cSide > aSide) {
    return true;
  } else {
    return false;
  }
}

console.log(isTriangleProbable(aSide, bSide, cSide));


// 4) Написать функции расчета площадей (поверхности) следующих фигур/тел: треугольника, прямоугольника (конуса, параллелепипеда)

/************************ Triangle area ************************/ 

const triangleBase = Number(prompt("Enter triangle base: "));
const triangleHeight = Number(prompt("Enter triangle height: "));
function triangleArea(triangleBase, triangleHeight) {
  area = triangleBase / 2 * triangleHeight;
  return area;
}
alert("Triangle area is " + triangleArea(triangleBase, triangleHeight));

/************************ Rectangle area ************************/ 


const rectangleLength = Number(prompt("Enter rectangle length: "));
const rectangleWidth = Number(prompt("Enter rectangle width: "));
function rectangleArea(rectangleLength, rectangleWidth) {
  area = rectangleLength * rectangleWidth;
  return area;
}
alert("Rectangle area is " + rectangleArea(rectangleLength, rectangleWidth));

// (2 функции на выбор реализовать в формате функционального выражения)

/************************ Parallelepiped area ************************/ 


const edge1 = Number(prompt("Enter first parallelepiped edge: "));
const edge2 = Number(prompt("Enter second parallelepiped edge: "));
const edge3 = Number(prompt("Enter third parallelepiped edge: "));
const parallelepipedArea = function(edge1, edge2, edge3) {
  area = 2 * (edge1 * edge2 + edge2 * edge3 + edge1 * edge3);
  return area;
}
alert("Area of parallelepiped is " + parallelepipedArea(edge1, edge2, edge3));


/************************ Cone area ************************/ 

const radius = Number(prompt("Enter the radius of the cone: "));
const slantHeight = Number(prompt("Enter the slant height of the cone: "));
const coneArea = function(radius, slantHeight) {
  area = Math.PI * radius * (radius + slantHeight);
  return area;
}
alert("Area of the cone is " + coneArea(radius, slantHeight));

// Таски на объекты
// 1. создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные, методы: вывод адреса, смена пола.

const student = {
  name: "Peter",
  surname: "Peterson",
  isMale: true,
  contact: "2 Manchester Road London N68 3VY",
  showAdress() {
    console.log(this.contact);
  },
  changeGender(isMale) {
    this.isMale = isMale;
  }
}
student.showAdress();
student.changeGender(false);
console.log(student.isMale);


// 2. создать объект, который содержит свойства, о факультете и кафедре, методы: перевод на другой факультет. (можно на свой выбор)

const education = {
  faculty: "Law and Social Sciences",
  chair: "Jurisprudence",
  transferToAnotherFaculty(faculty) {
    this.faculty = faculty;
  }
}
console.log(education.transferToAnotherFaculty("Medical"));

// 3 Создать функции-конструкторы:
// - Книга (автор, название, год издания, издательство)

function Book(author, title, publicationYear, publisher) {
  this.author = author;
  this.title = title;
  this.publicationYear = publicationYear;
  this.publisher = publisher;
}

const book = new Book("Dostoyevsky", "Idiot", 1931, "Penguin Books");
console.log(book);

// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

function ElectronicBook(author, title, publicationYear, publisher, format, electronicNumber) {
  this.author = author;
  this.title = title;
  this.publicationYear = publicationYear;
  this.publisher = publisher;
  this.format = format;
  this.electronicNumber = electronicNumber;
}

const eBook = new ElectronicBook("Harper Lee", "To Kill a Mockingbird", 2010, "Penguin Books", "epub", 55555);
console.log(eBook);