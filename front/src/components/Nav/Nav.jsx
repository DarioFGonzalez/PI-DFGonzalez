import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css';

const Nav = ({onSearch, logout})=>
{
    const random = ()=>
    {
        let random = Math.floor(Math.random() * (150 - 0 + 1)) + 0;
        onSearch(random);
    }

    return (
        <>
        <div className={style.der}>
            <Link to='/home'>
                <button className={style.btn}>HOME</button>
            </Link>
            <Link to='/about'>
                <button className={style.btn}>ABOUT</button>
            </Link>
        <button className={style.btn} onClick={random}>RaNdOm</button>
        <SearchBar onSearch={onSearch}/>
        <button className={style.btn} onClick={logout}>LogOut</button>
        </div>
        </>
    )
}

export default Nav;