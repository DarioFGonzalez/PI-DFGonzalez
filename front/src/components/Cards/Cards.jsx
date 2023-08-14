import Card from '../Card/Card';
import style from './Cards.module.css';

const Cards= ({characters, onClose})=>
{

   return(
      <div className={style.cont}>
         { characters.map((x)=>{return(
            <Card characters={x} key={x.id} onClose={onClose}/>
         )})}
      </div>
   )
}

export default Cards;