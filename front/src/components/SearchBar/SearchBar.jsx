import { useState } from 'react';
import style from './SearchBar.module.css';

const SearchBar= ({onSearch})=>
{
   const [id, setId] = useState('');

   const handleChange = (event)=>
   {
      setId(event.target.value);
   }

   return (
      <div className={style.div}>
         <input className={style.input}type='search' onChange={handleChange}/>
         <button className={style.btn} onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}

export default SearchBar;