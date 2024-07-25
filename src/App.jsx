import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Loading from "./components/Loading";
import './globals.css'; // Create this CSS file for transition styles

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition
          key={isLoading ? "loading" : "main"}
          timeout={500}
          classNames="fade"
        >
          {isLoading ? (
            <div className="LoadingScreen">
              <Loading />
            </div>
          ) : (
            <div className="MainContent">
              Main page is gonna be here soon stay tuned
            </div>
          )}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
