// import { signInWithPopup } from 'firebase/auth';
// import React from 'react';
// import { auth, provider } from '../firebase';

// const Login = ({setIsAuth}) => {
//     const loginInWithGoogle = () => {
//         signInWithPopup(auth, provider).then((result) => {
//             localStorage.setItem("isAuth", true);
//             setIsAuth(true);
//         });
//     };

//   return (
//       <div>
//         <p>ログインして始める</p>    
//         <button onClick={loginInWithGoogle}>Googleでログイン</button>
//       </div>
//   )
// }

// export default Login;

import React from 'react';
import { auth } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
    const [user] = useAuthState(auth);

  return (
      <div className='login'>
          <h1>ログイン</h1>
          <SignInButton />
    </div>
  )
}

export default Login;

function SignInButton() {
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider);
    };

    return (
        <button onClick={signInWithGoogle}>
            <p>グーグルでサインイン</p>
        </button>
    )
}

// import React from 'react'

// const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login