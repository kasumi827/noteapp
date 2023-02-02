import { useState,useEffect } from 'react';
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import Home from './Home';
import Login from './components/Login';
import Intro from './components/Intro';
import User from './components/User';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [isAuth, setIsAuth] = useState();
  const auth = getAuth();
  const [user] = useAuthState(auth);
  // const user = auth.currentUser;
  // const [user, loading, error] = useAuthState(auth);
  const uid = (user !== null) ? user.uid : "false";
  const displayName = (user !== null) ? user.displayName : "false";

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setIsAuth(true);
        // ...
      } else {
        // User is signed out
        // ...
        setIsAuth(false);
      }
    });
  }, []);

  if (isAuth === undefined) {
    return null;
  }

  return (
    <div className="App">

      <Router>
        <Navbar isAuth={isAuth} />

        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/home" element={<Home isAuth={isAuth} />}></Route>
          <Route path="/user" element={<User uid={uid}  displayName={displayName} isAuth={isAuth} auth={auth} />}></Route>
          <Route path="/login" element={<Login setIsAuth={setIsAuth}  />}></Route>
          <Route path="/logout" element={<Logout setIsAuth={setIsAuth} />}></Route>
        </Routes>
        </Router>
      
    </div>
  )
}

export default App;