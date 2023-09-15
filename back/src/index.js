//EXPRESS

const express = require('express');
const mainRouter = require('./routes/mainRouter');
const app = express();
require('dotenv').config();
const {PORT} = process.env;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

app.use((req, res, next) =>
{
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
}); //MiddleWare para autorización.

app.use(express.json());

app.use("/rickandmorty", mainRouter);

app.listen(PORT, ()=>console.log(`Server running\n PORT: ${PORT}`))


// require('dotenv').config();
// const fs = require('fs');
// const http = require('http');
// const getCharById = require("./controllers/archive")

// const {PORT} = process.env;

// http.createServer(function(req,res)
// {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes("/rickandmorty/character/"))
//     {
//         let id = Number(req.url.split('/').at(-1));
//         getCharById(res, id);
       
//     }
//     else
//     {
//         if(req.url.includes("/rickandomrty/all"))
//         {
            
//         }
//     }

// }).listen(PORT);