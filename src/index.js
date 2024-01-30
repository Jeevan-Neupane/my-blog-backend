import dotenv from "dotenv"
dotenv.config({
    path: ".env"
})
import app from "./app.js"
import connectToDB from "./utils/db.js"


connectToDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server is started at port ", process.env.PORT);
    })
}).catch((error) => {
    console.log("Error while connecting to the DB", error);
    process.exit(1);
})



