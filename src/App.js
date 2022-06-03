import './index.css';

import React from 'react';
import { Home } from './components/Pages/Home/Home';
import {AboutUS} from './components/Pages/AboutUS/AboutUS'
import {ContactUS} from './components/Pages/ContactUS/ContactUS'
import {NotFound} from './components/Pages/NotFound/NotFound'
import {Route, Routes} from 'react-router-dom'
import {Navigator} from './components/UI/Navigator/Navigator'
import {UseEffectUI} from './components/UI/UseEffectUI/UseEffectUI'
import {UseStateUI} from './components/UI/UseStateUI/UseStateUI'
import { UseCustomUI } from './components/UI/UseCustomUI/UseCustomUI';
import { RickAndMorty } from './components/UI/RickAndMorty/RickAndMorty';
import { ThenorApi } from './components/UI/ThenorApi/ThenorApi'

function App() {
  return (
    <div>
      <Navigator/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutUS' element={<AboutUS/>}/>
        <Route path='/contactUS' element={<ContactUS/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/useEffect' element={<UseEffectUI/>}/>
        <Route path='/useState' element={<UseStateUI/>}/>
        <Route path='/useCustom' element={<UseCustomUI/>}/>
        <Route path='/rickAndMorty' element={<RickAndMorty/>}/>
        <Route path='/thenorApi' element={<ThenorApi/>}/>

      </Routes>
    </div>











    // <div>
    //   <Home/>
    //   <AboutUS/>
    //   <ContactUS/>
    //   <NotFound/>
    // </div>

  );
}

export default App;
