
import './styles/main.scss'
import React from 'react'
import { createRoot } from 'react-dom/client';
import Header from '../components/header/header'


function App(){
  return(
    <>
      <h1>hello from React</h1>
      <Header/>
    </>
    
  ) 
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);


if(module.hot){         //will not reload but only changes in script 
  module.hot.accept();
}