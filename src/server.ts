import express from "express";
import router from "./router";
import { connectDB } from "./config/db";
import 'dotenv/config'
import cors from 'cors';

const app = express();

connectDB();

app.use(cors());

app.use(express.json());
app.use('/',router);
export default app;