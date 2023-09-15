import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import style from './Card.module.css';

const Card=({characters, id, onClose})=>
{
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();

   const fav = useSelector((state)=> state.myFavorites);
   const allC = useSelector((state)=> state.allCharacters);

   useEffect(()=>
   {
      fav.forEach( (x)=> { if(x.id === characters.id ) setIsFav(true); } );
   },[fav])


   const handleFavorite = ()=>
   {
      if(isFav)
      {
         setIsFav(false);
         dispatch(removeFav(characters.id));
      }
      else
      {
         setIsFav(true);
         dispatch(addFav(characters))
      }
   }

   const mostrar = ()=>
   {
      console.log("fav: ",fav);
      console.log("allC: ",allC);
   }
   
   return (
      <div className={style.div}>
         <button onClick={mostrar}>MOSTRAR</button>
         {isFav ?
         (<button onClick={handleFavorite}> 💖 </button>) :
         (<button onClick={handleFavorite}> 🤍 </button>)}
         <img src={characters.image} alt='Imagen' className={style.img}/>
         <button className={style.btn} onClick={()=>onClose(characters.id)}>X</button>
         <Link to={`/detail/${characters.id}`}>
            <h2 className={style.name}>{characters.name}</h2>
         </Link>
         <div className={style.data}>
            <h2>{characters.status}</h2>
            <h2>{characters.species}</h2>
         </div>
      </div>
   );
}

export default Card;

