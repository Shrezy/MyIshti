import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

console.log('Hello world');

const URL = process.env.MONGODB_URI || `mongodb://${username}:${password}@ac-oz16yzn-shard-00-00.qntbcc3.mongodb.net:27017,ac-oz16yzn-shard-00-01.qntbcc3.mongodb.net:27017,ac-oz16yzn-shard-00-02.qntbcc3.mongodb.net:27017/?ssl=true&replicaSet=atlas-ieoo99-shard-0&authSource=admin&retryWrites=true&w=majority`
Connection(URL);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));