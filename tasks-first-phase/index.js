// 1. Посчитать количество символов в строке, **не используя `length`**.
function firstTask() {
  const word = "программирование";
  let lengthOfWord = 0;

  for (let index = 0; index < word.length; index++) {
    lengthOfWord = lengthOfWord + 1;
  }
}

// 2. Вывести каждый символ отдельной строкой.
function secondTask() {
  const word = "hello";

  for (let index = 0; index < word.length; index++) {
    const alphabet = word[index];
    console.log(alphabet);
  }
}

// 3. Посчитать определённый символ. Посчитать, сколько раз символ `target` встречается в строке.
function thirdTask() {
  const word = "abracadabra";
  const target = "a";
  let counter = 0;

  for (let index = 0; index < word.length; index++) {
    const alphabet = word[index];
    if (alphabet == target) {
      counter = counter + 1;
    }
  }
}

// 4. Развернуть строку.
function fourthTask() {
  const word = "hello";
  let revertedString = "";

  for (let index = word.length - 1; index >= 0; index--) {
    const alphabet = word[index];
    revertedString = revertedString + alphabet;
  }
}

// 5. Палиндром. Определить, читается ли она одинаково слева направо и справа налево.
// "привет", "шалаш", "топот"

function fifthTask(word = "комок") {
  let pollidromWord = "";

  for (let index = word.length - 1; index >= 0; index--) {
    const alphabet = word[index];
    pollidromWord = pollidromWord + alphabet;
  }
  console.log(word == pollidromWord);
}
