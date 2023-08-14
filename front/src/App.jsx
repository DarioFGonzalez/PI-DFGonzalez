import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import About from './components/About/About.jsx';
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail.jsx';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav.jsx';

const App=()=>
{
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const email= 'dario@mail.com';
   const password= '1mb3cil0';

   const location = useLocation();
   const navigate = useNavigate();
   
   const onSearch= (id)=>
   {
      let check=true;
      for(let i=0; i<characters.length; i++)
      {
         if(characters[i].id==id)
         {
            check=false;
         }
      }

      check && axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data })=>
      {
         if(data.name)
         {
            setCharacters((oldChars) => [...oldChars, data]);
         }
         else
         {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id)=>
   {
      setCharacters(characters.filter( (x)=>x.id!=Number(id) ));
   }

   const login = (userData)=>
   {
      if(userData.email==email && userData.password==password)
      {
         setAccess(true);
         navigate("/home");
      }
   }

   const logout =()=>
   {
      setAccess(false);
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   console.log(`access: ${access}`);
 
   return (
      <div className='App'>
         {location.pathname!='/' &&<Nav onSearch={onSearch} logout={logout}/>}
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/form' element={<Form />} />
            <Route path='*' element={<Error />} />
         </Routes>
         
      </div>
   );
}

export default App;
