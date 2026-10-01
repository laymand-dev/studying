// 11. Посчитать размер массива
function eleventhTask(value: any[]) {
  let lengthOfArray = 0;

  if (!Array.isArray(value)) return lengthOfArray;

  for (let index = 0; index < value.length; index++) {
    lengthOfArray += 1;
  }

  return lengthOfArray;
}

function eleventhTaskTest() {
  {
    const expectedResult = 4;
    const argument = [1, 2, 3, 4];
    const actualResult = eleventhTask(argument);

    console.log(
      `Task 11. Test 1. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }

  {
    const expectedResult = 0;
    const argument: any[] = [];
    const actualResult = eleventhTask(argument);

    console.log(
      `Task 11. Test 2. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }

  {
    const expectedResult = 0;
    const argument = "hello" as any;
    const actualResult = eleventhTask(argument);

    console.log(
      `Task 11. Test 3. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
}

// 12. Вывести массив
function twelthTask(value: any[]) {
  if (!Array.isArray(value)) return console.log("argument is not an Array");

  for (let index = 0; index < value.length; index++) {
    console.log(value[index]);
  }
}

function twelthTaskTest() {
  {
    const argument = [10, 20, 30];
    const expectedResult = [10, 20, 30];

    const logs: any[] = [];
    const originalConsoleLog = console.log;

    console.log = (...args: any[]) => {
      logs.push(args[0]);
    };

    twelthTask(argument);

    console.log = originalConsoleLog;

    const actualResult = logs;

    console.log(
      `Task 12. Test 1. Expected: ${expectedResult}, actual: ${actualResult}`,
    );

    if (JSON.stringify(expectedResult) !== JSON.stringify(actualResult)) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }

  {
    const argument: any[] = [];
    const expectedResult: any[] = [];

    const logs: any[] = [];
    const originalConsoleLog = console.log;

    console.log = (...args: any[]) => {
      logs.push(args[0]);
    };

    twelthTask(argument);

    console.log = originalConsoleLog;

    const actualResult = logs;

    console.log(
      `Task 12. Test 2. Expected: ${expectedResult}, actual: ${actualResult}`,
    );

    if (JSON.stringify(expectedResult) !== JSON.stringify(actualResult)) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }

  {
    const argument = 123 as any;
    const expectedResult = ["argument is not an Array"];

    const logs: any[] = [];
    const originalConsoleLog = console.log;

    console.log = (...args: any[]) => {
      logs.push(args[0]);
    };

    twelthTask(argument);

    console.log = originalConsoleLog;

    const actualResult = logs;

    console.log(
      `Task 12. Test 3. Expected: ${expectedResult}, actual: ${actualResult}`,
    );

    if (JSON.stringify(expectedResult) !== JSON.stringify(actualResult)) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
}

// 13. Сумма массива
function thirteenthTask(value: number[]) {
  let summary = 0;

  if (!Array.isArray(value)) {
    console.log("argument is not an Array");
    return summary;
  }

  for (let index = 0; index < value.length; index++) {
    summary += value[index];
  }

  return summary;
}

function thirteenthTaskTest() {
  {
    const expectedResult = 15;
    const argument = [1, 2, 3, 4, 5];
    const actualResult = thirteenthTask(argument);

    console.log(
      `Task 13. Test 1. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }

  {
    const expectedResult = 0;
    const argument: number[] = [];
    const actualResult = thirteenthTask(argument);

    console.log(
      `Task 13. Test 2. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }

  {
    const expectedResult = 0;
    const argument = "123" as any;
    const actualResult = thirteenthTask(argument);

    console.log(
      `Task 13. Test 3. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
}

// 14. Максимальный элемент
function fourteenthTask(value: number[]) {
  if (!Array.isArray(value)) {
    console.log("argument is not an Array");
    return 0;
  }

  let maxElement = value[0];

  for (let index = 0; index < value.length; index++) {
    if (maxElement < value[index]) {
      maxElement = value[index];
    }
  }

  return maxElement;
}

function fourteenthTaskTest() {
  {
    const expectedResult = 42;
    const argument = [1, 15, 3, 27, 8, 42, 4];
    const actualResult = fourteenthTask(argument);

    console.log(
      `Task 14. Test 1. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }

  {
    const expectedResult = 5;
    const argument = [5];
    const actualResult = fourteenthTask(argument);

    console.log(
      `Task 14. Test 2. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }

  {
    const expectedResult = -1;
    const argument = [-5, -10, -1, -7];
    const actualResult = fourteenthTask(argument);

    console.log(
      `Task 14. Test 3. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
}

// 15. Фильтрация по числу
function fifteenthTask(value: number[], limit: number) {
  let filteredELements: number[] = [];

  if (!Array.isArray(value)) {
    console.log("argument is not an Array");
    return filteredELements;
  }

  for (let index = 0; index < value.length; index++) {
    if (value[index] > limit) {
      filteredELements = [...filteredELements, value[index]];
    }
  }

  return filteredELements;
}

function fifteenthTaskTest() {
  {
    const expectedResult = [15, 27, 42];
    const argument = [1, 15, 3, 27, 8, 42, 4];
    const limit = 10;
    const actualResult = fifteenthTask(argument, limit);

    console.log(
      `Task 15. Test 1. Arguments: ${argument}, limit: ${limit}, expected: ${expectedResult}`,
    );

    if (JSON.stringify(expectedResult) !== JSON.stringify(actualResult)) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }

  {
    const expectedResult = [11];
    const argument = [9, 10, 11];
    const limit = 10;
    const actualResult = fifteenthTask(argument, limit);

    console.log(
      `Task 15. Test 2. Arguments: ${argument}, limit: ${limit}, expected: ${expectedResult}`,
    );

    if (JSON.stringify(expectedResult) !== JSON.stringify(actualResult)) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }

  {
    const expectedResult: number[] = [];
    const argument = "not array" as any;
    const limit = 10;
    const actualResult = fifteenthTask(argument, limit);

    console.log(
      `Task 15. Test 3. Arguments: ${argument}, limit: ${limit}, expected: ${expectedResult}`,
    );

    if (JSON.stringify(expectedResult) !== JSON.stringify(actualResult)) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
}

function main() {
  eleventhTaskTest();
  twelthTaskTest();
  thirteenthTaskTest();
  fourteenthTaskTest();
  fifteenthTaskTest();
}

main();
