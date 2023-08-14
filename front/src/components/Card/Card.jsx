import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card=({characters, id, onClose})=>
{
   
   return (
      <div className={style.div}>
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

