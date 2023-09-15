const {error, log} = require('console');
const fs = require('fs');

function promisifiedReadFile(file)
{
    return new Promise((res, rej)=>
    {
        fs.readFile(file, "utf-8", (error,data)=>
        {
            if (error) rej(error);
            else res(data);
        })
    })
}

let promesa = promisifiedReadFile("ejemplo.md");

const succesHandler= (x)=>
{
    console.log("succesHandler: ", x);
}

promesa.then((res)=>succesHandler(res));

function getChar()
{
    return fetch("https://swapi.dev/api/people/13")
    .then(res => res.json())
    .then(res => res)
    .catch(err=> console.log("Error: ", err));
}


const chewie = getChar().then((personaje)=>personaje);

console.log("chewie sin timeOut: ",chewie);
setTimeout(() => {
    console.log("chewie CON timeOut: ", chewie);
}, 3500);