import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './Detail.module.css';

const Detail = ()=>
{
    const [character, setCharacter] = useState({});

    let {id} = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div className={style.cont}>
            <div className={style.img}>
                <img src={character.image}/>
            </div>

            <div className={style.data}>
                {character.name && <h2>Name: {character.name}</h2>}
                {character.status && <h2>Status: {character.status}</h2>}
                {character.species && <h2>Species: {character.species}</h2>}
                {character.gender && <h2>Gender: {character.gender}</h2>}
                {character.origin?.name && <h2>Origin: {character.origin?.name}</h2>}
            </div>
            
        </div>
    )
}

export default Detail;