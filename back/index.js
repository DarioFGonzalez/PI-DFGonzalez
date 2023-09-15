require("dotenv").config();

const http = require('http');

const fs = require('fs');

const {PORT} = process.env;

http.createServer(
    function(req,res)
    {
        // res.writeHead(200, {"ContentType": "text/plain"}); //solo TEXTO
        // res.end("Hola mundo! Este es mi primer servidor :D");

        // res.writeHead(200, { "ContentType": "text/html" })  //texto en un .HTML
        // const html = fs.readFileSync(__dirname + '/index.html');
        // res.end(html);

        // res.writeHead(200, { "ContentType": "text/html" })  //texto en un .HTML
        // let html = fs.readFileSync(__dirname + '/index.html', "utf8");
        // html = html.replace("{variable}", "Variable cambiada desde el servidor ♫");
        // res.end(html);   //cambiando una variable desde acá.

        // /*Como enviar un JSON con datos*/
        // res.writeHead(200, { "ContentType": "application/json"});
        // /*Código pre-carga*/
        // let cohorte = { numero: 41, cedula: "B"};
        // res.end(JSON.stringify(cohorte));

        /*Código pre-carga*/

        res.setHeader( "Access-Control-Allow-Origin" , " * ");

        // const characters = fs.readFileSync(__dirname + '/src/data.js');
        const characters = require("./src/data.js");

        if(req.url.includes("rickandmorty/characters"))
        {
            const id = Number(req.url.split("/").at(-1));

            console.log(id);

            const character = characters.find(x=>x.id===id);

            res.writeHead(200, {"ContentType": "application/JSON"});

            res.end(JSON.stringify(character));
        }
        else if(req.url === "/rickandmorty/lista")
        {
            res.writeHead(200,{"ContentType":"application/JSON"});
            res.end(JSON.stringify(characters));
        }
        
        // if(req.url === "/rickandmorty/character")
        // {
        //     res.writeHead(200, {"ContentType": "application/JSON"});
        //     res.end(characters);
        // }
        // else if(req.url.startsWith("/detalle/"))
        // {
        //     const params = req.url.split("/");
        //     const id = params[2];
        //     console.log(params);
        //     res.writeHead(200, {"ContentType": "application/JSON"});
        //     const alumno = JSON.parse(alumnos)[id];
        //     res.end(JSON.stringify(alumno));
        // }
    }
).listen(PORT,"localhost");