// 1. Write a function that takes an input string and returns it uppercased.

let func = (input) => input.toUpperCase();
module.exports = func;

// 2. Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.

let repeat = (operation, num) => {
  return operation() * num;
};
module.exports = repeat;

/* 3. Convert the following code from a for-loop to Array.map:

    function doubleAll(numbers) {
      var result = []
      for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
      }
      return result
    }

    module.exports = doubleAll
*/

function doubleAll(numbers) {
  return numbers.map((x) => x * 2); // Also could be done in one line: const doubleAll = numbers.map(x => x * 2)
}
module.exports = doubleAll;

/* 4. Use Array.filter to write a function called getShortMessages.
getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.
The function should return an array containing the messages themselves, without their containing object.
Arguments:
messages: an Array of 10 to 100 random objects that look something like this:
    {
      message: 'Esse id amet quis eu esse aute officia ipsum.'
    } */

//solution:
const getShortMessages = (messages) => messages
  .filter(m => m.message.length <= 50)
  .map(m => m.message);

module.exports = getShortMessages;

//5. Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users. You only need to check that the ids match.

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function (submittedUser) {
      return goodUsers.some(function (goodUser) {
        return goodUser.id === submittedUser.id;
      });
    });
  };
}

module.exports = checkUsersValid;
