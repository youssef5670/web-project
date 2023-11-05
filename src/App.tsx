import {HiIdentification} from 'react-icons/hi'
import {PiIdentificationCardFill} from 'react-icons/pi'

import { Footer } from './footer';
import {Link, NavLink, Route,Routes} from 'react-router-dom';
import { Cv } from './cv/cv';
import { Formulaire } from './formulaire';
import './App.css'
import { useState } from 'react';

function App() {
  return (
        <div id='container' className='pt-[10px]'>
          <nav className='nav pt-[10px] '>
            <NavLink to={'/'} className={'  ml-[5%] mr-[10px] text-[20px]'} id='s1'>Formulaire</NavLink>
            <NavLink to={'/cv'} className={'  text-[20px]'} id='s2'>CV</NavLink>
          </nav>
          <Routes>
            <Route path='/' element={<Formulaire/>}/>            
            <Route path='/cv' element={<Cv/>} /> 
          </Routes>
          
        </div>
  );
}

export default App;
