// 16. Фильтрация через функцию
function sixteenthTask(value: number[]) {
  if (!Array.isArray(value)) {
    console.log("argument is not an Array");
    return [];
  }

  let result: number[] = [];

  for (let index = 0; index < value.length; index++) {
    const element = value[index];
    const checkResult = check(element);
    if (checkResult) {
      result = [...result, element];
    }
  }

  return result;
}

function check(number: number) {
  return number % 2 === 0;
}

function sixteenthTaskTest() {
  {
    const expectedResult = [2, 4, 6];
    const argument = [1, 2, 3, 4, 5, 6];
    const actualResult = sixteenthTask(argument);

    console.log(
      `Task 16. Test 1. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (JSON.stringify(expectedResult) !== JSON.stringify(actualResult)) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }

  {
    const expectedResult: number[] = [];
    const argument: number[] = [];
    const actualResult = sixteenthTask(argument);

    console.log(
      `Task 16. Test 2. Arguments: ${argument}, expected: ${expectedResult}`,
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
    const actualResult = sixteenthTask(argument);

    console.log(
      `Task 16. Test 3. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (JSON.stringify(expectedResult) !== JSON.stringify(actualResult)) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
}

// 17. Удалить дубликаты. Порядок первого появления должен сохраниться.
function seventeenthTask(value: number[]) {
  if (!Array.isArray(value)) {
    console.log("argument is not an Array");
    return [];
  }

  let result: number[] = [];
  // first approach bymyself
  // {
  //   let indexOfDuplicated: number[] = [];

  //   for (let index = 0; index < value.length; index++) {
  //     const firstRow = value[index];

  //     for (
  //       let secondRowIndex = index + 1;
  //       secondRowIndex < value.length;
  //       secondRowIndex++
  //     ) {
  //       const secondRow = value[secondRowIndex];
  //       if (firstRow === secondRow) {
  //         indexOfDuplicated = [...indexOfDuplicated, secondRowIndex];
  //       }
  //     }
  //   }

  //   for (let index = 0; index < value.length; index++) {
  //     let isMarked = false;

  //     for (
  //       let duplicatedIndex = 0;
  //       duplicatedIndex < indexOfDuplicated.length;
  //       duplicatedIndex++
  //     ) {
  //       if (indexOfDuplicated[duplicatedIndex] === index) {
  //         isMarked = true;
  //         break;
  //       }
  //     }

  //     if (!isMarked) {
  //       result[result.length] = value[index];
  //     }
  //   }
  // }

  // second approach after research
  {
    for (let index = 0; index < value.length; index++) {
      let isDuplicated = false;
      for (let prevIndex = 0; prevIndex < index; prevIndex++) {
        if (value[prevIndex] === value[index]) {
          isDuplicated = true;
          break;
        }
      }

      if (!isDuplicated) {
        result[result.length] = value[index];
      }
    }
  }

  return result;
}

function seventeenthTaskTest() {
  {
    const expectedResult = [1, 2, 3, 4];
    const argument = [1, 2, 2, 3, 1, 4, 3];
    const actualResult = seventeenthTask(argument);

    console.log(
      `Task 17. Test 1. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (JSON.stringify(expectedResult) !== JSON.stringify(actualResult)) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }

  {
    const expectedResult = [5];
    const argument = [5, 5, 5, 5];
    const actualResult = seventeenthTask(argument);

    console.log(
      `Task 17. Test 2. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (JSON.stringify(expectedResult) !== JSON.stringify(actualResult)) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }

  {
    const expectedResult: number[] = [];
    const argument = 123 as any;
    const actualResult = seventeenthTask(argument);

    console.log(
      `Task 17. Test 3. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (JSON.stringify(expectedResult) !== JSON.stringify(actualResult)) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
}

// 18. Найти второй максимум. (Найти второе по величине различное число)
function eighteenthTask(value: number[]) {
  if (!Array.isArray(value)) {
    console.log("argument is not an Array");
    return 0;
  }

  let maxNumber = value[0];
  let secondMaxNumber = value[0];

  for (let index = 0; index < value.length; index++) {
    for (
      let secondRowIndex = index + 1;
      secondRowIndex < value.length;
      secondRowIndex++
    ) {
      const secondRowElement = value[secondRowIndex];

      if (secondRowElement > value[index] && secondRowElement > maxNumber) {
        maxNumber = secondRowElement;
      }

      if (
        secondRowElement > value[index] &&
        secondRowElement < maxNumber &&
        secondRowElement > secondMaxNumber
      ) {
        secondMaxNumber = secondRowElement;
      }
    }
  }

  return secondMaxNumber;
}

function eighteenthTaskTest() {
  {
    const expectedResult = 8;
    const argument = [3, 10, 8, 10, 5];
    const actualResult = eighteenthTask(argument);

    console.log(
      `Task 18. Test 1. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }

  {
    const expectedResult = -2;
    const argument = [-5, -2, -1, -10];
    const actualResult = eighteenthTask(argument);

    console.log(
      `Task 18. Test 2. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }

  {
    const expectedResult = 0;
    const argument = "not array" as any;
    const actualResult = eighteenthTask(argument);

    console.log(
      `Task 18. Test 3. Arguments: ${argument}, expected: ${expectedResult}`,
    );

    if (expectedResult !== actualResult) {
      console.log(`Test failed, actually result is ${actualResult}`);
    } else {
      console.log("Test passed");
    }
  }
}

function main() {
  sixteenthTaskTest();
  seventeenthTaskTest();
  eighteenthTaskTest();
}

main();
