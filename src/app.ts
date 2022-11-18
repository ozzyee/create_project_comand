import express from 'express';
import path from "path";
import * as dotenv from 'dotenv'
import * as bodyParser from "body-parser"
import {CreateAppService} from "./service/createApp/main";

// configure dotenv
dotenv.config({path: path.resolve(__dirname, '../.env')});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/', async (req, res) => {
    await CreateAppService.createApp({
        req, res
    })

    res.send("Hello World!");
})


app.listen(3000, () => {
    console.log("app listening on port 3000")
})