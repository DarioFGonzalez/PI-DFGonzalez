import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from './Favorites.module.css';

const Favorites = ({onClose})=>
{
    const favs = useSelector((state)=> state.myFavorites);

    return(
        <div className={style.cont}>
            <select>
                <option value='A'>Ascendente</option>
                <option value='D'>Descendente</option>
            </select>
            {
                favs.map((x)=>{ return( <Card characters={x} key={x.id} onClose={onClose} /> ) })
            }
        </div>
    )
}

export default Favorites;