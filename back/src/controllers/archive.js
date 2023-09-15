const axios = require('axios');

function getCharById(res, id)
{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=>
    {
        const char = response.data;
        res.writeHead(200,{"content-type":"application/json"})
        .end(JSON.stringify(char));
    })
    .catch((error)=>
    {
        res.writeHead(500,{"content-type":"text/plain"})
        .end(error.message);
    })
}

const getAll = (res)=>
{
    axios.get()
}

module.exports = getCharById;