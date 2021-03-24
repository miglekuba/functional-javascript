// Hello World
let func = (input) => input.toUpperCase();
module.exports = func;

// Higher Order Functions

let repeat = (operation, num) => {
  return operation() * num;
};
module.exports = repeat;

// // Map

function doubleAll(numbers) {
  return numbers.map((x) => x * 2);  // Also could be done in one line: const doubleAll = numbers.map(x => x * 2)
}
module.exports = doubleAll;

// Filter
const getShortMessages = (messages) => messages
  .filter(m => m.message.length <= 50)
  .map(m => m.message);

module.exports = getShortMessages;

//Every Some

