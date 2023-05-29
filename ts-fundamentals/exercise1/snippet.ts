function snippet (text: string, length: number): string {
  const ellipsis = '...';
  
  if (text.length < length) {
    return text;
  } else {
    let result = text.slice(0, length - ellipsis.length);
    const lastSpace = result.lastIndexOf(' ');
    result = `${result.slice(0, lastSpace)}${ellipsis}`;
    return result;
  }
}

// correct call and usage
const resultOne = snippet(
  'TypeScript is a programming language that is a strict syntactical superset of JavaScript and adds optional static typing to the language.', 150
);
console.log(resultOne);

// missing second parameter
// const resultTwo = snippet(
// "Lorem ipsum dolor sit amet, consectetur adipiscing"
// );
//console.log(resultTwo);

// the first parameter is of incorrect type
//const resultThree = snippet(false, 40);
//console.log(resultThree);

// the second parameter is of incorrect type
// const resultFour = snippet(
//   "Lorem ipsum dolor sit amet, consectetur adip", false
// );
// console.log(resultFour);

// The result is assingned to a variable of incorrect type
// var resultFive: number = snippet("Lorem ipsum dolor sit amet, consectetur adip", 20);
// console.log(resultFive);
