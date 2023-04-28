import express from "express";
import * as dotenv from "dotenv";
import userRouter from "./routes/usersRoutes.js";
import connectDB from "./config/dbConnect.js";
import cors from "cors";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Users server")
});

app.use("/users", userRouter);

app.listen(8080, () => {
    console.log("Backend server is running!");
})