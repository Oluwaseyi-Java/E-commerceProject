
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Body from './components/body/Body';
import Dashboard from './components/dashboard/Dashboasrd';
import Footer from './components/footer/Footer';

function App() {

  const [count, setCount] = useState(0);


  useEffect(() => {
    window.addEventListener("resize", () => {
      setCount(window.innerWidth)

    })

    console.log(count)
  }, [count])
  // function reveal() {
  //   var reveals = document.querySelectorAll(".reveal");

  //   for (var i = 0; i < reveals.length; i++) {
  //     var windowHeight = window.innerHeight;
  //     var elementTop = reveals[i].getBoundingClientRect().top;
  //     var elementVisible = 150;

  //     if (elementTop < windowHeight - elementVisible) {
  //       reveals[i].classList.add("active");
  //     } else {
  //       reveals[i].classList.remove("active");
  //     }
  //   }
  // }
  // window.addEventListener("scroll", reveal);

  // const [fade, setFade] = useState(
  //   {
  //     isFade: false,
  //     offset: 0
  //   }
  // );

  // const refHandler = useRef(null);

  // const handleScroll = (elTopOffset, elHeight) => {

  //   if (window.pageYOffset < (elHeight - elTopOffset)) {
  //     setFade({
  //       isFade: true,
  //       offset: elHeight
  //     })
  //   } else {
  //     setFade({
  //       isFade: false,
  //       offset: 0
  //     })
  //   }
  // }
  // useEffect(() => {
  //   let element = refHandler.current.getBoundingClientRect();
  //   let heig = window.innerHeight;
  //   // let visible = 150

  //   const handleScrollEvent = () => {

  //     handleScroll(element.top, heig)
  //   }
  //   window.addEventListener("scroll", handleScrollEvent)

  //   return () => {
  //     window.removeEventListener("scroll", handleScrollEvent)
  //   }
  // }, []);
  // Fade = { fade } Handler = { refHandler } 


  return (
    <div className="App">
      <Dashboard />
      <Body/>
      <Footer />
    </div>
  );
}

export default App;
