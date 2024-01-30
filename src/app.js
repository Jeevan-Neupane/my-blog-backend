import express from "express";
import cors from "cors"
const app = express();


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//This middleware is part of the Express.js framework and is used to parse incoming JSON-formatted request bodies.
app.use(express.json({
    limit: "16kb"
}))
import userRouter from "./routes/user.route.js"

//This middleware is part of the Express.js framework and is used to parse incoming request bodies with a Content-Type of "application/x-www-form-urlencoded". This content type is commonly used when submitting HTML forms.
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

app.use("/api/user", userRouter);
export default app;