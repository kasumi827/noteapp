import { signInWithPopup } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { auth, provider } from '../firebase';
// import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import google from "../images/google.png";
import { getAuth, setPersistence } from "firebase/auth";
import { browserLocalPersistence } from 'firebase/auth';

const Login = ({setIsAuth}) => {   
    // const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const auth = getAuth();

    const signInWithGoogle = () => {
        setPersistence(auth, browserLocalPersistence)
        .then(() => {
                signInWithPopup(auth, provider).then((result) => {
                    // localStorage.setItem("isAuth", true);
                    // setIsAuth(true);
                    navigate("/home");
                    return signInWithPopup(auth, provider);
                });
            });
    };
    
    //今の認証情報を確認するところから始める
    // if (firebase.auth().currentUser !== null) {
    //     console.log("認証情報があるよ！")
    // } else {
    //     console.log("認証情報は残ってないよ！")
    // }

    // componentDidMount() {
    //     firebase.auth().onAuthStateChanged(function(user) {
    //       let userId = null;
    //       if (user) {
    //         userId = user.uid;
    //       }
      
    //       this.setState({ userId: userId });
    //     }.bind(this));
    //   }

    return (
        <div className="login">
            <div className="loginform">
                <h1 className="">Sign in</h1>
                <span></span>
            <p className="google"><img src={google}></img></p>
            <button onClick={signInWithGoogle}><p>Continue with Google</p></button>
            </div>
        </div>
  )
}

export default Login;