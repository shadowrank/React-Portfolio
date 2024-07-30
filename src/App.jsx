import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import Loading from "./components/preloader/Loading";
import MainContent from "./components/MainContent/Content";

import './globals.css'; // Ensure this file exists with necessary styles

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { opacity: 0, x:-100 , y:-250 },
    enter: { opacity: 1, x:0 , y:0 },
    leave: { opacity: 0, x: 100 , y: 250},
    config: { duration: 350 }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.backgroundColor = "#bab9b9";
      document.body.style.color = "black";
    }, 2000);
    setIsVisible(true);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
          {isLoading ? (transition((style, item) => {
              return item ? <animated.div style={style} className="LoadingScreen">
                <Loading />
              </animated.div>
              :
               <></>
          })
          ) : (
            <MainContent />
          )}
    </div>
  );
}
