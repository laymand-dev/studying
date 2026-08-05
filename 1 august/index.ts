interface User {
  id?: string;
  username: string;
  age: number;
}

class MyFetch {
  _headers = new Headers();
  _option = new Map();
  _user: User | null = null;
  _url = "";
  _outputType = "";
  _urlSearchParams = new URLSearchParams();

  constructor(url: string) {
    this._url = url;
  }

  addUrlParam(key: string, value: string) {
    this._urlSearchParams.append(key, value);
    return this;
  }

  addHeader(key: string, value: string) {
    this._headers.append(key, value);
    return this;
  }

  addOption(key: string, value: string) {
    if (this._option.has(key)) return this;

    this._option.set(key, value);
    return this;
  }

  getUsers() {
    this._option.set("method", "GET");
    return this;
  }

  createUser(user: User) {
    this._option.set("method", "POST");
    this._user = user;
    return this;
  }

  updateUser(user: User) {
    this._option.set("method", "PUT");
    this._user = user;
    return this;
  }

  deleteUser() {
    this._option.set("method", "DELETE");
    return this;
  }

  json() {
    this._outputType = "json";
    return this;
  }

  text() {
    this._outputType = "text";
    return this;
  }

  async run() {
    this._url = `${this._url}?${this._urlSearchParams.toString()}`;
    this._option.set("headers", this._headers);

    if (
      this._user &&
      !(Object.keys(this._user).length === 0) &&
      (this._option.get("method") === "POST" ||
        this._option.get("method") === "PUT")
    ) {
      this._option.set("body", JSON.stringify(this._user));
    }

    let result: null | Response = null;
    let errorText: null | string = null;
    let errorBody: null | unknown = null;
    let parsedResult: JSON | string | null = null;

    try {
      result = await fetch(this._url, Object.fromEntries(this._option));

      if (!result.ok) {
        try {
          errorBody = await result.json();
        } catch (error) {
          errorText = "Unknown Error";
        }

        errorText = `HTTP: ${result.status}: ${result.statusText}`;
        return { errorText, errorBody, result };
      }

      switch (this._outputType) {
        case "json": {
          parsedResult = await result.json();
          break;
        }
        case "text": {
          parsedResult = await result.text();
          break;
        }
        default: {
          break;
        }
      }

      return { parsedResult, result };
    } catch (error) {
      if (error instanceof Error) {
        errorText = error.message;
      } else {
        errorText = "Unknown Error";
      }

      return { errorText, result };
    }
  }
}

const url = "http://localhost:3000/users";

async function runFetch() {
  const myFetchResult = await new MyFetch(url)
    .addHeader("Content-Type", "application/json")
    // .updateUser({
    //   id: "8dfa1be6-8e68-4578-b03b-2979da77db47",
    //   username: "laymand the main",
    //   age: 0
    // })
    // .deleteUser()
    .getUsers()
    // .createUser({username: "laymand the main", age: 0})
    .json()
    .run();

  console.log(myFetchResult);
}

runFetch();
