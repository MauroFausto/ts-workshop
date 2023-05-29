function snippet(text, length) {
    var ellipsis = '...';
    if (text.length < length) {
        return text;
    }
    else {
        var result = text.slice(0, length - ellipsis.length);
        var lastSpace = result.lastIndexOf(' ');
        result = "".concat(result.slice(0, lastSpace)).concat(ellipsis);
        return result;
    }
}
// correct call and usage
var resultOne = snippet('TypeScript is a programming language that is a strict syntactical superset of JavaScript and adds optional static typing to the language.', 150);
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
