import express from "express";
import AuthRouter from "./routes/auth.js";
import http from "http";

const app = express();
const port = 3000;
const serverPort = 8080;

app.use("/login", AuthRouter);

app.get("/", (req, res) => {
  console.log(req);
  res.json({ message: "Server is running" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const server = http.createServer(app);
server.listen(serverPort, "0.0.0.0");
