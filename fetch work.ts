// async function main () {
//   const headers = new Headers({
//     "Content-Type": "application/json",
//     "x-api-key": "live_6wGCnIIJLBN2bOVrdBCkdXm4Kgraes47jCWvtiMRptaeBFnvxD54QBHvkyRl6zJy"
//   });

//   const fetchRequestOptions = {
//     method: 'GET',
//     headers: headers,
//     redirect: 'follow'
//   };

//   const baseUrl = "https://api.thecatapi.com";
//   const pathUrl = "/v1/images/search";
//   const urlSearchParams = new URLSearchParams();

//   urlSearchParams.append("size", "med");
//   urlSearchParams.append("mime_types", "jpg");
//   urlSearchParams.append("format", "json");
//   urlSearchParams.append("has_breeds", "true");
//   urlSearchParams.append("order", "RANDOM");
//   urlSearchParams.append("page", "0");
//   urlSearchParams.append("limit", "1");

//   const url = `${baseUrl}${pathUrl}?${urlSearchParams.toString()}`;
//   const result = await fetch(url, fetchRequestOptions)
//   const resultJson = await result.json();
// };

// // main();

interface FetchBody {
  [i: string]: string | number;
}

class MyFetch {
  _headers = new Headers();
  _option = new Map();
  _body: FetchBody = {};
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

  get() {
    this._option.set("method", "GET");
    return this;
  }

  // adds a new data in DB with body
  post(body: FetchBody) {
    this._option.set("method", "POST");
    this._body = body;
    return this;
  }

  // changes all data that was in data but if anything in data in DB was missed in body it becomes null
  put(body: FetchBody) {
    this._option.set("method", "PUT");
    this._body = body;
    return this;
  }

  // changes only that data that was in body
  patch(body: FetchBody) {
    this._option.set("method", "PATCH");
    this._body = body;
    return this;
  }

  delete() {
    this._option.set("method", "DELETE");
    return this;
  }

  // checks existance of the data; returns headers, body is empty
  head() {
    this._option.set("method", "HEAD");
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
      this._body &&
      !(Object.keys(this._body).length === 0) &&
      (this._option.get("method") === "POST" ||
        this._option.get("method") === "PUT" ||
        this._option.get("method") === "PATCH")
    ) {
      this._option.set("body", JSON.stringify(this._body));
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

const baseUrl = "https://api.thecatapi.com";
const pathUrl = "/v1/images/search";

const url = `${baseUrl}${pathUrl}`;

async function runFetch() {
  const myFetchResult = await new MyFetch(url)
    .addHeader("Content-Type", "application/json")
    .addOption("redirect", "follow")
    .addUrlParam("size", "med")
    .addUrlParam("mime_types", "med")
    .addUrlParam("size", "jpg")
    .addUrlParam("format", "jpg")
    .addUrlParam("page", "0")
    .addUrlParam("limit", "1")
    .get()
    .json()
    .run();

  console.log(myFetchResult);
}

runFetch();
