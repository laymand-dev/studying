// 1. Посчитать количество символов в строке, **не используя `length`**.
function firstTask(word = "программирование") {
  let lengthOfWord = 0;

  for (let index = 0; index < word.length; index++) {
    lengthOfWord = lengthOfWord + 1;
  }

  return lengthOfWord;
}

function firstTaskTest() {
  const expectedResult = 5;
  const actualResult = firstTask("abcde");
  console.log(`Task 1. Test 1. Arguments 'abcde', expected ${expectedResult}`);

  if (expectedResult !== actualResult) {
    console.log(`Test failed, actyally result is ${expectedResult}`);
  } else console.log("Test passed");
}

// 2. Вывести каждый символ отдельной строкой.
function secondTask(word = "hello") {
  const result = [];

  for (let index = 0; index < word.length; index++) {
    const alphabet = word[index];
    result.push(alphabet);
    console.log(alphabet);
  }

  return result;
}

function secondTaskTest() {
  const expectedResult = ["e", "e", "e"];
  const actualResult = secondTask("eee");

  console.log(`Task 2. Test 1. Arguments 'eee', expected ${expectedResult}`);
  if (JSON.stringify(expectedResult) !== JSON.stringify(actualResult)) {
    console.log(`Test failed, actyally result is ${expectedResult}`);
  } else console.log("Test passed");
}

// 3. Посчитать определённый символ. Посчитать, сколько раз символ `target` встречается в строке.
function thirdTask(word = "abracadabra", target = "a") {
  let counter = 0;

  for (let index = 0; index < word.length; index++) {
    const alphabet = word[index];
    if (alphabet == target) {
      counter = counter + 1;
    }
  }

  return counter;
}

function thirdTaskTest() {
  const expectedResult = 5;
  const actualResult = thirdTask("eeeeef", "e");

  console.log(
    `Task 3. Test 1. Arguments 'eeeeef, e', expected ${expectedResult}`,
  );
  if (expectedResult !== actualResult) {
    console.log(`Test failed, actyally result is ${expectedResult}`);
  } else console.log("Test passed");
}

// 4. Развернуть строку.
function fourthTask(word = "hello") {
  let revertedString = "";

  for (let index = word.length - 1; index >= 0; index--) {
    const alphabet = word[index];
    revertedString = revertedString + alphabet;
  }

  return revertedString;
}

function fourthTaskTest() {
  const expectedResult = "asor";
  const actualResult = fourthTask("rosa");

  console.log(`Task 4. Test 1. Arguments 'rosa', expected ${expectedResult}`);
  if (expectedResult !== actualResult) {
    console.log(`Test failed, actyally result is ${expectedResult}`);
  } else console.log("Test passed");
}

// 5. Палиндром. Определить, читается ли она одинаково слева направо и справа налево.
// "привет", "шалаш", "топот"
function fifthTask(word = "комок") {
  let pollidromWord = "";

  for (let index = word.length - 1; index >= 0; index--) {
    const alphabet = word[index];
    pollidromWord = pollidromWord + alphabet;
  }

  return word == pollidromWord;
}

function fifthTaskTest() {
  const expectedResult = true;
  const actualResult = fifthTask("шалаш");

  console.log(`Task 5. Test 1. Arguments 'шалаш', expected ${expectedResult}`);
  if (expectedResult !== actualResult) {
    console.log(`Test failed, actyally result is ${expectedResult}`);
  } else console.log("Test passed");
}

function main() {
  firstTaskTest();
  secondTaskTest();
  thirdTaskTest();
  fourthTaskTest();
  fifthTaskTest();
}
