let myFavorites = [];

const postFav = (req, res) =>
{
    myFavorites.push(req.body);
    res.status(200).json(myFavorites);
}

const deleteFav = (req, res) =>
{
    const {id} = req.params;
    myFavorites = myFavorites.filter(x=>x.id != Number(id));

    res.status(200).json(myFavorites);
}

module.exports = {postFav, deleteFav};