import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Profile from './Components/Profile';
import './style.css';
import rect2 from './images/rect2.svg';


const App=()=>{

  return (
    <>
     <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <div className='designing'>
       <img src={rect2} alt="rect2" className='rect2'/>
      </div>
    </>
  );
}
export default App;