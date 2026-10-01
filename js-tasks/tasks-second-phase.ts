// 6. Посчитать сумму цифр данного числа.
// const number = 58321;
function sixthTask(value: number) {
  let num = Math.abs(value);
  let summary = 0;

  while (num > 0) {
    summary += num % 10;
    num = Math.floor(num / 10);
  }

  return summary;
}

function sixthTaskTest() {
  {
    const expectedResult = 19;
    const argument = 58321;
    const actualResult = sixthTask(argument);

    console.log(
      `Task 6. Test 1. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
  {
    const expectedResult = 0;
    const argument = 0;
    const actualResult = sixthTask(argument);

    console.log(
      `Task 6. Test 2. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
  {
    const expectedResult = 6;
    const argument = -123;
    const actualResult = sixthTask(argument);

    console.log(
      `Task 6. Test 3. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
}

// 7. Максимальная цифра
// const number = 583219;
function seventhTask(value: number) {
  let maxNumber = 0;
  let num = Math.abs(value);

  while (num > 0) {
    maxNumber = Math.max(num % 10, maxNumber);
    num = Math.floor(num / 10);
  }

  return maxNumber;
}

function seventhTaskTest() {
  {
    const expectedResult = 9;
    const argument = 583219;
    const actualResult = seventhTask(argument);

    console.log(
      `Task 7. Test 1. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
  {
    const expectedResult = 0;
    const argument = 0;
    const actualResult = seventhTask(argument);

    console.log(
      `Task 7. Test 2. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
  {
    const expectedResult = 7;
    const argument = -527;
    const actualResult = seventhTask(argument);

    console.log(
      `Task 7. Test 3. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
}

// 8. Количество чётных цифр
// const number = 58321428;
function eighthTask(value: number) {
  let evenNumbersCount = 0;
  let num = Math.abs(value);

  while (num > 0) {
    if (!((num % 10) % 2)) {
      evenNumbersCount += 1;
    }

    num = Math.floor(num / 10);
  }

  return evenNumbersCount;
}

function eighthTaskTest() {
  {
    const expectedResult = 5;
    const argument = 58321428;
    const actualResult = eighthTask(argument);

    console.log(
      `Task 8. Test 1. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
  {
    const expectedResult = 0;
    const argument = 13579;
    const actualResult = eighthTask(argument);

    console.log(
      `Task 8. Test 2. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
  {
    const expectedResult = 2;
    const argument = -1234;
    const actualResult = eighthTask(argument);

    console.log(
      `Task 8. Test 3. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
}

// 9. Вывести таблицу умножения от 1 до 10
function ninethTask() {
  const arrayOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (let index = 0; index < arrayOfNums.length; index++) {
    const firstRow = arrayOfNums[index];

    for (let secondIndex = 0; secondIndex < arrayOfNums.length; secondIndex++) {
      const secondRow = arrayOfNums[secondIndex];

      console.log({
        firstRow,
        secondRow,
        result: firstRow * secondRow,
      });
    }
  }
}

function ninethTaskTest() {
  {
    const logs: unknown[] = [];
    const originalConsoleLog = console.log;

    console.log = (...args: unknown[]) => {
      logs.push(args[0]);
    };

    ninethTask();

    console.log = originalConsoleLog;

    const expectedResult = true;

    const actualResult = logs.some((item: any) => {
      return (
        item?.firstRow === 2 && item?.secondRow === 2 && item?.result === 4
      );
    });

    console.log(
      `Task 9. Test 1. Expected multiplication 2 * 2 = 4: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
  {
    const logs: unknown[] = [];
    const originalConsoleLog = console.log;

    console.log = (...args: unknown[]) => {
      logs.push(args[0]);
    };

    ninethTask();

    console.log = originalConsoleLog;

    const expectedResult = true;

    const actualResult = logs.some((item: any) => {
      return (
        item?.firstRow === 10 && item?.secondRow === 10 && item?.result === 100
      );
    });

    console.log(
      `Task 9. Test 2. Expected multiplication 10 * 10 = 100: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
  {
    const logs: unknown[] = [];
    const originalConsoleLog = console.log;

    console.log = (...args: unknown[]) => {
      logs.push(args[0]);
    };

    ninethTask();

    console.log = originalConsoleLog;

    const expectedResult = true;

    const actualResult = logs.some((item: any) => {
      return (
        item?.firstRow === 1 && item?.secondRow === 1 && item?.result === 1
      );
    });

    console.log(
      `Task 9. Test 3. Expected multiplication 1 * 1 = 1: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
}

// 10. Найти первое вхождение
// Найти позицию первого появления символа `target`
function tenthTask(word: string, target: string) {
  const arrayFromWord = Array.from(word);

  for (let index = 0; index < arrayFromWord.length; index++) {
    const element = arrayFromWord[index];

    if (element === target) return index;
  }

  return -1;
}

function tenthTaskTest() {
  {
    const expectedResult = 1;
    const word = "banana";
    const target = "a";
    const actualResult = tenthTask(word, target);

    console.log(
      `Task 10. Test 1. Arguments: "${word}", "${target}", expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
  {
    const expectedResult = 1;
    const word = "A😀B";
    const target = "😀";
    const actualResult = tenthTask(word, target);

    console.log(
      `Task 10. Test 2. Arguments: "${word}", "${target}", expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
  {
    const expectedResult = -1;
    const word = "hello";
    const target = "z";
    const actualResult = tenthTask(word, target);

    console.log(
      `Task 10. Test 3. Arguments: "${word}", "${target}", expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
}

function main() {
  sixthTaskTest();
  seventhTaskTest();
  eighthTaskTest();
  ninethTaskTest();
  tenthTaskTest();
}

main();
