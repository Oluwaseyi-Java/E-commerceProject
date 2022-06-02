
import { useEffect, useState } from 'react';
import './App.css';
import Body from './components/body/Body';
import Dashboasrd from './components/dashboard/Dashboasrd';
import Footer from './components/footer/Footer';





function App() {


const[count, setCount]=useState(0)

  useEffect(() => {
    window.addEventListener("resize",()=> {
      setCount(window.innerWidth)
      
    })
  
    console.log(count)
  }, [count])
  return (
    <div className="App">
      <Dashboasrd />
      <Body />
      <Footer/>
    </div>
  );
}

export default App;
