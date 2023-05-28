enum Operator {
    Add = 'add',
    Subtract = 'subtract',
    Multiply = 'multiply',
    Divide = 'divide'
}

const calculator = function calculator (first: number, second: number, op: Operator): number {
  return 0;
}

type Operation = (x: number, y: number) => number;

const operations: [Operator, Operation][] = [];