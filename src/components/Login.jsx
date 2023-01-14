import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebase';
// import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {   
    // const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/home");
        });
    };

    return (
        <div className="login">
            <div className="loginform">
            <p>グーグルでログインする</p>
            <button onClick={signInWithGoogle}><p>login</p></button>
            </div>
        </div>
  )
}

export default Login;