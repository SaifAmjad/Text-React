import './App.css';
import React, {useState } from 'react'
import FormBox from './Components/FormBox';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  const [pop,newpop]=useState(null);

  const getAlert=(type,msg)=>{
  
      newpop({
          ty: type,
          message: msg
    })
    setTimeout(()=>{
      newpop(null);
    },2000)
  }

  const [backcol,setback]=useState('white');
  const [mode,setmode]=useState('light');

   let modeFunction=(col,state,formcol)=>{

      if(mode==='light'){
        setmode(state);
        setback(formcol);
        document.body.style.backgroundColor=col;
        document.body.style.color='white';
        getAlert("success","Dark mode enabled");
      
      }
      else{
         setmode('light');
         setback('white');
         document.body.style.backgroundColor='white';
         document.body.style.color='black';
         getAlert("success","Light mode enabled");
      }
   }

let DarkTheme=()=>{
  modeFunction('black','dark','gray');
  
  
}

let GreenTheme=()=>{
  modeFunction('#198754','darkgeen','green');
  
}

  return (  
    <>
    <Router>
    <Navbar title="Mechnix" about="About us" mode={mode} modeFun={DarkTheme} Green={GreenTheme}/>
    <Alert popup={pop}/>
    <div className="container my-4" >
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/" element={<FormBox title="Enter Text to instantiate" mode={mode} AlertFun={getAlert} back={backcol} />} />

    </Routes>
       
    </div>
    </Router>
    


    </>
  );

}

export default App;
