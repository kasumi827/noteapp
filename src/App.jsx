import { useState } from 'react';
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import Home from './Home';
import Login from './components/Login';
import Intro from './components/Intro';
import User from './components/User';
import { getAuth } from "firebase/auth";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;
  // const [user, loading, error] = useAuthState(auth);
  const uid = (user !== null) ? user.uid : "false";
  const displayName = (user !== null) ? user.displayName : "false";

  return (
    <div className="App">

      <Router>
        <Navbar isAuth={isAuth} />

        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/home" element={<Home isAuth={isAuth} />}></Route>
          <Route path="/user" element={<User uid={uid}  displayName={displayName} isAuth={isAuth} />}></Route>
          <Route path="/login" element={<Login setIsAuth={setIsAuth}  />}></Route>
          <Route path="/logout" element={<Logout setIsAuth={setIsAuth} />}></Route>
        </Routes>
        </Router>
      
    </div>
  )
}

export default App;