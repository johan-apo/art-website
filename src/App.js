import React, { useRef, useMemo } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

export const hoverContext = React.createContext();

function App() {

  const isHover = () => {
    refCursor.current.classList.add("cursor-active")
    refFollower.current.classList.add("follower-active");
  };
  const noHover = () => {
    refCursor.current.classList.remove("cursor-active")
    refFollower.current.classList.remove("follower-active");
  };

  const contextValue = {
    isHover,
    noHover
  };
  // CURSOR ANIMATION
  let refCursor = useRef();
  let refFollower = useRef();

  document.addEventListener("mousemove", e => {
    refCursor.current.setAttribute(
      "style",
      `top: ${e.pageY}px; left: ${e.pageX}px;`
    );
    refFollower.current.setAttribute(
      "style",
      `top: ${e.pageY}px; left: ${e.pageX}px;`
    );
  });

  // CURSOR CARD ANIMATION

  return (
    <hoverContext.Provider value={contextValue}>
      <div className="app">
        <div ref={refCursor} className="cursor"></div>
        <div ref={refFollower} className="cursor-follower"></div>
        <Navbar />
        <Main />
      </div>
    </hoverContext.Provider>
  );
}

export default App;
