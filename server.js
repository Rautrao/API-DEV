const express = require('express');
const server = express();
const tasks = require('./routes/tasks.js');
const connectDB = require('./db/connectDB.js');
const notFound = require('./middleware/not-found.js');
const errorHandlerMiddleware = require('./middleware/error-handler.js');
require('dotenv').config();

//middlewares
server.use(express.json());
//routes
server.use('/api/v1/tasks',tasks);
server.use(notFound);
server.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        server.listen(port,console.log(`Server is listening to the port : ${port}...`));
    } catch (error){
        console.log(error);
    }
}
start();