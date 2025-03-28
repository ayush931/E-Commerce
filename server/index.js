import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

import express from 'express';
import cors from 'cors';
import { config } from "dotenv";
import connectionToDB from "./config/dbConnection.js";
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import userRouter from './routes/user.route.js';
config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(cookieParser())
app.use(morgan());
app.use(helmet({
  crossOriginResourcePolicy: false
}))

app.get("/", (req, res) => {
  res.send("Hello")
})

app.use("/api/user", userRouter);

app.listen(PORT, async () => {
  await connectionToDB();
  console.log(`App is listening on ${PORT}`);
});


export default app;