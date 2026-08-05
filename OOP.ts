// инкапсуляция
interface Counter {
  currentValue: number;
  increase: () => void;
}

const counter: Counter = {
  currentValue: 0,
  increase() {
    this.currentValue += 1;
  },
};

interface Counter2 {
  currentValue: number;
}

const counter2: Counter2 = {
  currentValue: 0,
};

function increase(obj: Counter2) {
  obj.currentValue += 1;
}

// наследование
interface SuperCounter extends Counter {
  decrease: () => void;
}

interface DuperCounter extends SuperCounter {
  megaValue: string;
}

const superCounter: SuperCounter = {
  ...counter,
  decrease() {
    this.currentValue -= 1;
  },
};

// композиция
interface DecreasableCounter {
  decrease: () => void;
}

type SuperCounter2 = Counter & DecreasableCounter;

const superCounter2: SuperCounter2 = {
  ...counter,
  decrease() {
    this.currentValue -= 1;
  },
};

// полиморфизм
interface ProxyCounter {
  increase: (counter: Counter) => void;
}

const proxyCounter: ProxyCounter = {
  increase(counter) {
    counter.increase();
  },
};

proxyCounter.increase(superCounter2);
