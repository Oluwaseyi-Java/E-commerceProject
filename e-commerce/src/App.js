import { useEffect, useState } from 'react';
import './App.css';
import Body from './components/body/Body';
import { BrowserRouter } from "react-router-dom"
import Newsletter from './components/body/Newsletter'
import Dashboard from './components/dashboard/Dashboasrd';
import Footer from './components/footer/Footer';
import { useGlobalContext } from './contextApi/Context.api';

function App() {
  const { isOpen } = useGlobalContext
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCount(window.innerWidth)
    })
    console.log(count)
  }, [count])
  
  return (
    <div className="App">
      <Dashboard />

      <BrowserRouter>
        <Body />
      </BrowserRouter>

      {isOpen && <Newsletter />}
      <Footer />
    </div>
  );
}

export default App;
