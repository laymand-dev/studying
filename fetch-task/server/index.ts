import express, { type Express, type Request, type Response } from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

interface User {
  id: string;
  username: string;
  age: number;
}

const app: Express = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const FILE_ENCODING = "utf8";
const FILE_PATH = path.join(__dirname, "data.json");
const PORT = process.env.PORT || 3000;

let users = new Map<User["id"], User>();
let isShuttingDown = false;

const server = app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  const rawData = await fs.readFile(FILE_PATH, FILE_ENCODING);
  const parsedData = JSON.parse(rawData);
  users = new Map(Object.entries(parsedData));
});

app.get("/", (_, res: Response) => {
  res.send(JSON.stringify("Hello World!"));
});

// health-serve check endpoint
app.get("/health", (_, res) => {
  if (isShuttingDown) {
    return res.status(503).send("Server is shutting down");
  }
  res.status(200).send("OK");
});

// get user by id
app.get("/users/:userId", (req: Request<{ userId: string }>, res: Response) => {
  const userId = req.params.userId;
  if (users.has(userId)) {
    res.send(users.get(userId));
  } else {
    res.send(JSON.stringify("User is not found"));
  }
});

app.get("/users", (_, res: Response) => {
  res.send(JSON.stringify(Object.fromEntries(users)));
});

// create or rewrite
app.put("/users/:userId", (req: Request<{ userId: string }>, res: Response) => {
  if (users.has(req.params.userId)) {
    users.set(req.params.userId, {
      id: req.params.userId,
      username: req.body.username,
      age: req.body.age,
    });
    res.send(JSON.stringify(Object.fromEntries(users)));
  } else {
    res.send(JSON.stringify("User is not found"));
  }
});

// create a new user
app.post("/users", (req: Request<User>, res: Response) => {
  const userId = uuidv4();
  users.set(userId, {
    id: userId,
    username: req.body.username,
    age: req.body.age,
  });
  res.send(JSON.stringify(Object.fromEntries(users)));
});

app.delete(
  "/users/:userId",
  (req: Request<{ userId: string }>, res: Response) => {
    if (users.has(req.params.userId)) {
      users.delete(req.params.userId);
      res.send(JSON.stringify(Object.fromEntries(users)));
    } else {
      res.send(JSON.stringify("User is not found"));
    }
  },
);

async function gracefulShutdown(signal: string) {
  console.log(`Received ${signal}. Starting graceful shutdown...`);

  isShuttingDown = true;

  const forceExitTimeout = setTimeout(() => {
    console.error("Forced shutdown initiated: Active connections hung.");
    process.exit(1);
  }, 30000);

  server.close(async (err) => {
    if (err) {
      console.error("Error during server close:", err);
      process.exit(1);
    }
    console.log("HTTP server closed. No more active connections.");

    try {
      console.log("Saving data to the file...");
      try {
        const usersObject = Object.fromEntries(users);
        if (!users || Object.keys(usersObject).length === 0) {
          console.log("No data to save");
        } else {
          const stringData = JSON.stringify(usersObject, null, 2);

          await fs.writeFile(FILE_PATH, stringData, FILE_ENCODING);

          console.log("Data successfully saved to file");
        }
      } catch (error) {
        console.error("Failed to write file:", error);
      }

      console.log("Shutdown complete.");
      clearTimeout(forceExitTimeout);
      process.exit(0);
    } catch (dbErr) {
      console.error("Error closing database:", dbErr);
      process.exit(1);
    }
  });
}

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));
