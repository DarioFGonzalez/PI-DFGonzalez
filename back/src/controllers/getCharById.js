const axios = require('axios');
// const URL = "https://rym2-production.up.railway.app/api/character/"
// const API_KEY = "?key=henrym-DFGonzalez";

const getCharById = async (req, res) =>
{
    const {id} = req.params;
    try
    {
        const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

        data
        ?res.status(200).json(data)
        :res.status(404).send("Not found el coso");
    }
    catch
    {
        res.status(500).json({message: "Error"});
    }
}

/*  //No async-await
const getCharById = (req, res)=>
{
    const {id} = req.params;
   axios.get(`https://rickandmortyapi.com/api/character/${id}`)
   .then((response)=>
   {
    const char = response.data;

    char
    ?res.status(200).json(char)
    :res.status(404).send("Not found el coso");

   })
   .catch(error => res.status(500).json({message: error.message}))
}
*/

module.exports = getCharById;