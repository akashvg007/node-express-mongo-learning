import express from 'express';
import user from './routes/users';
import cors from 'cors';
import mongoose from 'mongoose'
import { config } from "dotenv";

config({ path: ".env" });
const app = express();
const { PORT } = process.env;
const DB = 'mongodb+srv://root:root@mallucoder.fhzzu.mongodb.net/nodework?retryWrites=true&w=majority'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect(DB, options)
    .then(() => console.log('connection successfuly'))
    .catch(err => console.log("connection failed", err))

//middlewares
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", user);

app.get("/", (req, res) => {
    res.send("welcome to the applicaton");
})
console.log("port", PORT);
app.listen(PORT, () => {
    console.log(`the application is running on ${PORT}`);
})
