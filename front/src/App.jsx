import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import About from './components/About/About.jsx';
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail.jsx';
import Error from './components/Error/Error';
import Favorites from './components/Favorites/Favorites';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav.jsx';
import { removeFav } from './redux/actions';

const App=()=>
{
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const location = useLocation();
   const navigate = useNavigate();

   const dispatch = useDispatch();
   
   const onSearch= async (id)=>
   {
      let check=true;
      for(let i=0; i<characters.length; i++)
      {
         if(characters[i].id==id)
         {
            check=false;
         }
      }

      if(check)
      {
         const {data} = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
         data.name
         ?setCharacters(x => [...x, data])
         :window.alert('¡No hay personajes con este ID!');
      }
   }

   const onClose = (id)=>
   {
      setCharacters(characters.filter( (x)=>x.id!=Number(id) ));
      dispatch(removeFav(id));
   }

   function login(userData)
   {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   const logout =()=>
   {
      setAccess(false);
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
 
   return (
      <div className='App'>
         {location.pathname!='/' &&<Nav onSearch={onSearch} logout={logout}/>}
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/form' element={<Form />} />
            <Route path='/favorites' element={<Favorites onClose={onClose} />} />
            <Route path='*' element={<Error />} />
         </Routes>
         
      </div>
   );
}

export default App;

//async onsearch
/*
async function onSearch(character)
{
   try
   {
      const { data } = await axios.get(`http://localhost:3006/rickandmorty/character/${id}`);
      if (data.name)
      {
         characters.find((x)=> x.id === data.id) === undefined
         ? setCharacters((x)=> [...x, data])
         : alert("Personaje repetido, poné otro ID.");
      }
      else
      {
         alert("No hay personajes con ese ID.");
      }
   }
   catch (error)
   {
      alert(error.message)
   }
}
*/

//asinc login
/*
async function login(userData)
{
   const {email, password} = userData;
   cosnt URL = "http://localhost:3001/rickandmorty/login/";

   try
   {
      const {data} = await axios.get(URL + `?email=${email}&password=${password}`);
      const {access} = data;
      setAccess(access);
      access && navigate("/home");

   }
   catch(error)
   {
      alert(error.message);
   }
}
*/