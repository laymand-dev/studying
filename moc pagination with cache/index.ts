interface Entity {
  id: string;
}

class Fetcher {
  data: Entity[] = [
    { id: "0" },
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
  ];
  // page от 1;
  fetch(page, pageSize) {
    for (let index = 0; index < this.data.length; index++) {
      const element = this.data[index];
    }
  }
}
