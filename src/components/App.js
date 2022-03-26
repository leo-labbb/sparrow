import React, { useState } from "react";
import AppRouter from "components/Router";
// import authService from "fBase"
import { auth } from "fBase";
import { useEffect } from "react";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggenIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, [])

  return (
    <>
      {init ? <AppRouter isLoggenIn={isLoggenIn} /> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} Sparrow</footer>
    </>
  )
}

export default App;
